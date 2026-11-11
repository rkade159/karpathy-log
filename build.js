// Builds feed.xml (RSS 2.0) from data.js.  Usage: node build.js
// Buttondown reads this feed and emails each new item to subscribers.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "data.js"), "utf8"), ctx);
const { SITE, POSTS } = ctx.window;

const base = (SITE.siteUrl || "https://example.com/").replace(/\/?$/, "/");
const x = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc = d => new Date(d + "T12:00:00Z").toUTCString();

const items = POSTS.slice(0, 50).map(p => {
  const link = `${base}#post-${p.id}`;
  const html = `<p>${x(p.summary)}</p>` +
    (p.points && p.points.length ? `<ul>${p.points.map(t => `<li>${x(t)}</li>`).join("")}</ul>` : "") +
    `<p><a href="${x(link)}">Read on karpathy.log</a> · ` +
    p.links.map(l => `<a href="${x(l.url)}">${x(l.label)}</a>`).join(" · ") + `</p>`;
  return `    <item>
      <title>${x(p.title)}</title>
      <link>${x(link)}</link>
      <guid isPermaLink="false">karpathy-log-${x(p.id)}</guid>
      <pubDate>${rfc(p.date)}</pubDate>
      <description>${x(html)}</description>
    </item>`;
}).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${x(SITE.name)}</title>
    <link>${x(base)}</link>
    <atom:link href="${x(base)}feed.xml" rel="self" type="application/rss+xml"/>
    <description>${x(SITE.tagline)}</description>
    <language>en-gb</language>
    <lastBuildDate>${rfc(SITE.lastChecked)}</lastBuildDate>
${items}
  </channel>
</rss>
`;
fs.writeFileSync(path.join(__dirname, "feed.xml"), xml);
console.log(`feed.xml: ${POSTS.length > 50 ? 50 : POSTS.length} items, base ${base}`);
