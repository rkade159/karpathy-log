// Emails new posts to Buttondown subscribers.
// Runs in GitHub Actions after a push that changes data.js.
// New posts = ids in data.js now that were not in the previous commit.
const { execSync } = require("child_process");
const vm = require("vm");

function load(src) {
  const ctx = { window: {} };
  vm.runInNewContext(src, ctx);
  return ctx.window;
}

const now = load(require("fs").readFileSync("data.js", "utf8"));
let before = { POSTS: [] };
try { before = load(execSync("git show HEAD^:data.js", { encoding: "utf8" })); }
catch (e) { console.log("No previous data.js. Nothing to compare, so no email."); process.exit(0); }

const oldIds = new Set(before.POSTS.map(p => p.id));
const fresh = now.POSTS.filter(p => !oldIds.has(p.id));
if (!fresh.length) { console.log("No new posts. No email."); process.exit(0); }

const key = process.env.BUTTONDOWN_API_KEY;
if (!key) { console.log(`Found ${fresh.length} new post(s), but BUTTONDOWN_API_KEY is not set. No email.`); process.exit(0); }

const site = (now.SITE.siteUrl || "").replace(/\/?$/, "/");
const TYPE = { blog: "Blog", gist: "Gist", x: "Post on X", video: "Video", talk: "Talk", podcast: "Podcast", repo: "Code", tool: "Tool" };
const fmt = d => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

const subject = fresh.length === 1
  ? `karpathy.log: ${fresh[0].title}`
  : `karpathy.log: ${fresh.length} new posts, including "${fresh[0].title}"`;

const body = [
  fresh.length === 1 ? "There is a new post on karpathy.log." : `There are ${fresh.length} new posts on karpathy.log.`,
  "",
  ...fresh.map(p => [
    `## ${p.title}`,
    `*${fmt(p.date)} · ${TYPE[p.type] || p.type}*`,
    "",
    p.summary,
    "",
    `**[Read it on karpathy.log](${site}#post-${p.id})** · [Original](${p.links[0].url})`,
    ""
  ].join("\n")),
  "---",
  `karpathy.log is an unofficial fan archive. It is not made or endorsed by Andrej Karpathy, Anthropic or Eureka Labs. [Visit the site](${site}).`
].join("\n");

(async () => {
  const res = await fetch("https://api.buttondown.com/v1/emails", {
    method: "POST",
    headers: { "Authorization": `Token ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ subject, body, status: process.env.SEND_MODE === "draft" ? "draft" : "about_to_send" })
  });
  const text = await res.text();
  if (!res.ok) { console.error(`Buttondown said ${res.status}: ${text}`); process.exit(1); }
  console.log(`Sent "${subject}" for: ${fresh.map(p => p.id).join(", ")}`);
})();
