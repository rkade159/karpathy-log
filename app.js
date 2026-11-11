(function () {
  "use strict";
  const S = window.SITE, POSTS = window.POSTS, ARCHIVE = window.ARCHIVE, RES = window.RESOURCES, ABOUT = window.ABOUT;
  const main = document.getElementById("main");

  // Embeds (YouTube player, X posts) work on a normal host. The claude.ai preview blocks them.
  const EMBEDS = S.embeds && !/claude/i.test(location.hostname);

  const TYPE = {
    blog: "Blog", gist: "Gist", x: "Post on X", video: "Video",
    talk: "Talk", podcast: "Podcast", repo: "Code", tool: "Tool"
  };
  const FILTERS = [
    { key: "all", label: "All", types: null },
    { key: "writing", label: "Writing", types: ["blog", "gist"] },
    { key: "x", label: "X posts", types: ["x"] },
    { key: "watch", label: "Videos & talks", types: ["video", "talk", "podcast"] },
    { key: "code", label: "Code & tools", types: ["repo", "tool"] }
  ];
  let filter = "all";
  let query = "";

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = d => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  const monthOf = d => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
  const PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';

  /* ---------- Generated cover image: a small neural net, seeded by the post id ---------- */
  function rng(seed) {
    let h = 2166136261;
    for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
    return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507), h = Math.imul(h ^ (h >>> 13), 3266489909), (h ^= h >>> 16) >>> 0) / 4294967296);
  }
  function cover(post) {
    const r = rng(post.id), W = 760, H = 240;
    const layers = 4 + Math.floor(r() * 3), nodes = [];
    for (let l = 0; l < layers; l++) {
      const n = 3 + Math.floor(r() * 4), x = 70 + l * ((W - 140) / (layers - 1)), col = [];
      for (let i = 0; i < n; i++) col.push({ x, y: H / 2 + (i - (n - 1) / 2) * 38 });
      nodes.push(col);
    }
    let lines = "", dots = "";
    for (let l = 0; l < layers - 1; l++)
      for (const a of nodes[l]) for (const b of nodes[l + 1]) {
        const hot = r() < 0.12;
        lines += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" style="stroke:${hot ? "var(--brand)" : "var(--ink)"};stroke-opacity:${hot ? 0.9 : 0.13};stroke-width:${hot ? 2 : 1}"/>`;
      }
    nodes.flat().forEach(p => {
      const on = r() < 0.25;
      dots += `<circle cx="${p.x}" cy="${p.y}" r="7" style="fill:${on ? "var(--accent)" : "var(--bg)"};stroke:var(--ink);stroke-width:1.5"/>`;
    });
    return `<svg class="cover" viewBox="0 0 ${W} ${H}" role="img" aria-label="Decorative network diagram">
      <rect width="${W}" height="${H}" style="fill:var(--card)"/>${lines}${dots}
      <text x="20" y="${H - 16}" style="fill:var(--muted);font:12px var(--font-mono)">${esc(TYPE[post.type])} · ${fmt(post.date)}</text></svg>`;
  }

  /* ---------- Pieces ---------- */
  const linksHtml = links => `<p class="links">${links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</p>`;
  const videoHtml = (id, title) =>
    `<a class="video" href="https://www.youtube.com/watch?v=${esc(id)}" target="_blank" rel="noopener" data-yt="${esc(id)}">
      <span class="play">${PLAY}</span><span class="vt">${esc(title)}<small>${EMBEDS ? "Play here" : "Watch on YouTube"}</small></span></a>`;
  const tweetHtml = url => EMBEDS ? `<div class="tweet-wrap"><blockquote class="twitter-tweet" data-dnt="true"><a href="${esc(url.replace("x.com", "twitter.com"))}">View the original post on X</a></blockquote></div>` : "";
  const pointsHtml = pts => pts && pts.length ? `<ul>${pts.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : "";

  function postHtml(p) {
    return `<article class="post" id="post-${esc(p.id)}">
      <div class="meta"><a href="#post-${esc(p.id)}" title="Link to this post" style="color:inherit;text-decoration:none"><time datetime="${p.date}">${fmt(p.date)}</time></a><span class="tag">${TYPE[p.type]}</span></div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      ${pointsHtml(p.points)}
      ${p.video ? videoHtml(p.video, p.title) : ""}
      ${p.tweet ? tweetHtml(p.tweet) : ""}
      ${linksHtml(p.links)}
    </article>`;
  }

  /* ---------- Search ---------- */
  const norm = s => s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
  const haystack = p => norm([p.title, p.summary, (p.points || []).join(" "), TYPE[p.type], fmt(p.date), monthOf(p.date),
    (p.links || []).map(l => l.label + " " + l.url).join(" ")].join(" "));
  const INDEX = POSTS.map(p => ({ p, text: haystack(p) }));
  function matches(text, q) {
    // Every word must appear. Words in "double quotes" must appear as one phrase.
    const phrases = [...q.matchAll(/"([^"]+)"/g)].map(m => m[1].trim()).filter(Boolean);
    const words = q.replace(/"[^"]*"?/g, " ").split(/\s+/).filter(Boolean);
    return [...phrases, ...words].every(t => text.includes(t));
  }

  /* ---------- Newsletter ---------- */
  function subscribeHtml() {
    return `<section class="subscribe" aria-labelledby="sub-h">
      <h2 id="sub-h">Get new posts by email</h2>
      <p>Enter your email address. When we add a new post, you get an email with its title, a short summary and a link.</p>
      <form id="sub-form" novalidate>
        <label for="sub-email" class="sr-only" style="position:absolute;left:-9999px">Email address</label>
        <input id="sub-email" name="email" type="email" required autocomplete="email" placeholder="you@example.com">
        <button type="submit">Subscribe</button>
      </form>
      <p class="msg" id="sub-msg" role="status"></p>
      <p class="small">About one email every ${S.checkEveryDays} days, only when there is something new. You can unsubscribe at any time.</p>
    </section>`;
  }
  function wireSubscribe() {
    const form = document.getElementById("sub-form");
    if (!form) return;
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector("input"), msg = document.getElementById("sub-msg");
      const email = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = "Please enter a valid email address."; input.focus(); return; }
      if (!S.buttondown) { msg.textContent = "Email sign-up is not open yet. Please come back soon."; return; }
      // Send the address to Buttondown, which stores subscribers and sends the emails.
      const f = document.createElement("form");
      f.method = "post"; f.target = "_blank";
      f.action = `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(S.buttondown)}`;
      f.innerHTML = `<input type="hidden" name="email" value="${esc(email)}"><input type="hidden" name="embed" value="1">`;
      document.body.appendChild(f); f.submit(); f.remove();
      input.value = "";
      msg.textContent = "Thanks! Check your inbox to confirm your subscription.";
    });
  }

  /* ---------- Pages ---------- */
  function home() {
    const [f, ...rest] = POSTS;
    return `
      <h1>Andrej Karpathy, in one place</h1>
      <p class="about-short">${esc(ABOUT.short)} <a href="#about">More about him</a>.</p>
      <p class="muted">This site collects his posts, videos, code and talks. Each item has a short summary in simple English and a link to the original.</p>

      <div class="label">Latest</div>
      <article class="feature" id="post-${esc(f.id)}">
        ${cover(f)}
        <div class="body">
          <div class="meta"><time>${fmt(f.date)}</time><span class="tag">${TYPE[f.type]}</span></div>
          <h2>${esc(f.title)}</h2>
          <p>${esc(f.summary)}</p>
          ${pointsHtml(f.points)}
          ${f.video ? videoHtml(f.video, f.title) : ""}
          ${f.tweet ? tweetHtml(f.tweet) : ""}
          ${linksHtml(f.links)}
        </div>
      </article>

      ${subscribeHtml()}

      <div class="label">Also recent</div>
      <ul class="recent">
        ${rest.slice(0, 5).map(p => `<li><time>${fmt(p.date)}</time><a href="#post-${esc(p.id)}">${esc(p.title)}</a></li>`).join("")}
      </ul>
      <a class="more" href="#posts">All posts →</a>`;
  }

  function posts() {
    return `<h1>Posts</h1>
      <p class="muted">Everything we have collected, newest first. ${POSTS.length} summaries.</p>
      <input id="search" class="search" type="search" placeholder="Search posts — e.g. agents, nanochat, &quot;vibe coding&quot;" aria-label="Search posts" autocomplete="off" value="${esc(query)}">
      <div class="filters" role="group" aria-label="Filter posts">
        ${FILTERS.map(x => `<button type="button" data-filter="${x.key}" aria-pressed="${x.key === filter}">${x.label}</button>`).join("")}
      </div>
      <p class="count" id="count" aria-live="polite"></p>
      <div id="results"></div>`;
  }

  function renderResults() {
    const box = document.getElementById("results");
    if (!box) return;
    const f = FILTERS.find(x => x.key === filter);
    const q = norm(query.trim());
    const list = INDEX.filter(({ p, text }) => (!f.types || f.types.includes(p.type)) && (!q || matches(text, q))).map(x => x.p);
    const showArchive = filter === "all" || filter === "writing";
    const arch = showArchive ? ARCHIVE.filter(a => !q || matches(norm(a.title + " " + fmt(a.date)), q)) : [];

    let out = "", month = "";
    for (const p of list) {
      const m = monthOf(p.date);
      if (m !== month) { out += `<div class="month">${m}</div>`; month = m; }
      out += postHtml(p);
    }
    if (arch.length) {
      out += `<h2>More from his blog</h2>
        <p class="muted">Listed here. Summaries to come.</p>
        <ul class="archive">${arch.map(a => `<li><time>${fmt(a.date)}</time><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.title)}</a></li>`).join("")}</ul>`;
    }
    if (!list.length && !arch.length) out = `<p class="empty">No posts found.</p>`;
    box.innerHTML = out;
    document.getElementById("count").textContent = q ? `${list.length + arch.length} result${list.length + arch.length === 1 ? "" : "s"} for ${query.includes('"') ? query.trim() : "“" + query.trim() + "”"}` : "";
    enhance(box);
  }

  function resources() {
    const slug = t => "r-" + t.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return `<h1>Materials &amp; resources</h1>
      <p class="muted">His free courses, videos, code and essays, sorted so you can work through them one by one.</p>
      <ol class="toc">${RES.map(s => `<li><a href="#resources" data-jump="${slug(s.title)}">${esc(s.title)}</a></li>`).join("")}</ol>
      ${RES.map(s => `
        <section class="res" id="${slug(s.title)}">
          <h2>${esc(s.title)}</h2>
          <p>${esc(s.intro)}</p>
          ${s.links ? `<p class="res-links">${s.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</p>` : ""}
          <ul class="items${s.numbered ? " numbered" : ""}">
            ${s.items.map(it => {
              const url = it.video ? `https://www.youtube.com/watch?v=${it.video}` : it.url;
              return `<li><div><a href="${esc(url)}" target="_blank" rel="noopener">${esc(it.title)}</a>${it.video ? '<span class="yt">▶ video</span>' : ""}<span class="it-meta">${esc(it.meta || "")}</span></div></li>`;
            }).join("")}
          </ul>
        </section>`).join("")}`;
  }

  function about() {
    return `<h1>About Andrej Karpathy</h1>
      ${ABOUT.paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}
      <h2>Timeline</h2>
      <ul class="timeline">${ABOUT.timeline.map(t => `<li><span class="when">${esc(t.when)}</span>${esc(t.what)}</li>`).join("")}</ul>
      <h2>Ideas he is known for</h2>
      <div class="ideas">${ABOUT.ideas.map(i => `<div class="idea"><h3>${esc(i.name)}</h3><p>${esc(i.text)}</p></div>`).join("")}</div>
      <h2>Sources</h2>
      <p class="links">
        <a href="https://karpathy.ai/" target="_blank" rel="noopener">karpathy.ai</a>
        <a href="https://en.wikipedia.org/wiki/Andrej_Karpathy" target="_blank" rel="noopener">Wikipedia</a>
        <a href="https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/" target="_blank" rel="noopener">TechCrunch (Anthropic)</a>
      </p>
      <h2>About this site</h2>
      <p>karpathy.log is an unofficial fan project. Andrej Karpathy, Anthropic and Eureka Labs do not run or endorse it. We write every summary in our own words. To read his exact words, follow the links to the original posts.</p>
      <p>We write in an ASD-STE100 style of Simplified English: short sentences, active voice, one idea per sentence. Karpathy suggested this style for LLM output on 2 October 2026.</p>
      <p>We check his blogs, YouTube, GitHub, X and Hacker News about every ${S.checkEveryDays} days. You can also follow the <a href="feed.xml">RSS feed</a>.</p>`;
  }

  const PAGES = { home, posts, resources, about };

  /* ---------- Router: #home, #posts, #resources, #about, #post-<id> ---------- */
  function route(jump) {
    let page = (location.hash || "#home").slice(1);
    if (page.startsWith("post-")) { jump = page; page = "posts"; filter = "all"; query = ""; }
    if (!PAGES[page]) page = "home";
    main.innerHTML = PAGES[page]();
    document.querySelectorAll("nav a").forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + page ? "page" : "false"));
    document.title = (page === "home" ? "" : page[0].toUpperCase() + page.slice(1) + " · ") + S.name;
    if (page === "posts") renderResults(); else enhance(main);
    if (page === "home") wireSubscribe();
    if (jump) {
      const el = document.getElementById(jump);
      if (el) { el.scrollIntoView({ block: "start" }); return; }
    }
    window.scrollTo(0, 0);
  }

  /* Click-to-play YouTube, and X embeds — only where EMBEDS is on. */
  let twitterRequested = false;
  function enhance(root) {
    if (!EMBEDS) return;
    root.querySelectorAll("a.video[data-yt]").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        const box = document.createElement("div");
        box.className = "embed";
        box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${a.dataset.yt}?autoplay=1" title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
        a.replaceWith(box);
      });
    });
    if (root.querySelector(".twitter-tweet")) {
      if (window.twttr && twttr.widgets) twttr.widgets.load(root);
      else if (!twitterRequested) {
        twitterRequested = true;
        const s = document.createElement("script");
        s.src = "https://platform.twitter.com/widgets.js"; s.async = true; s.charset = "utf-8";
        document.body.appendChild(s);
      }
    }
  }

  document.addEventListener("input", e => {
    if (e.target.id === "search") { query = e.target.value; renderResults(); }
  });
  document.addEventListener("click", e => {
    const fb = e.target.closest("[data-filter]");
    if (fb) {
      filter = fb.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(b => b.setAttribute("aria-pressed", b === fb));
      renderResults();
      return;
    }
    const j = e.target.closest("[data-jump]");
    if (j) {
      e.preventDefault();
      const el = document.getElementById(j.dataset.jump);
      if (el) el.scrollIntoView({ block: "start" });
    }
    const t = e.target.closest("[data-set-theme]");
    if (t) setTheme(t.dataset.setTheme, true);
  });
  window.addEventListener("hashchange", () => route());

  /* ---------- Light / dark ---------- */
  function setTheme(k, save) {
    document.documentElement.setAttribute("data-theme", k);
    if (save) { try { localStorage.setItem("klog-theme", k); } catch (_) {} }
    document.querySelectorAll("[data-set-theme]").forEach(b => b.setAttribute("aria-pressed", b.dataset.setTheme === k));
  }

  /* ---------- Footer ---------- */
  const next = new Date(S.lastChecked + "T12:00:00Z"); next.setUTCDate(next.getUTCDate() + S.checkEveryDays);
  document.getElementById("footer").innerHTML =
    `<p><strong>${esc(S.name)}</strong> is an unofficial fan archive. It is not made or endorsed by Andrej Karpathy, Anthropic or Eureka Labs. Summaries are in our own words. Follow the links for the originals.</p>
     <div class="foot-row">
       <p class="mono" style="margin:0">Last checked: ${fmt(S.lastChecked)} · Next check: about ${fmt(next.toISOString().slice(0, 10))} · <a href="feed.xml">RSS</a></p>
       <div class="theme-toggle" role="group" aria-label="Colour theme">
         <button type="button" data-set-theme="light">Light</button>
         <button type="button" data-set-theme="dark">Dark</button>
       </div>
     </div>`;

  let theme = null;
  try { theme = localStorage.getItem("klog-theme"); } catch (_) {}
  if (theme !== "light" && theme !== "dark") theme = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(theme, false);

  route();
})();
