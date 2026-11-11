# karpathy.log

An unofficial fan archive of Andrej Karpathy's public work on AI: posts, videos, code and talks, with short summaries in simple English and links to the originals.

Not made or endorsed by Andrej Karpathy, Anthropic or Eureka Labs.

## How the site works

- `index.html`, `style.css`, `app.js`: the site itself. A static site with no build step, served by GitHub Pages.
- `data.js`: **all the content**: posts, blog archive, resources and the About page.
- `build.js`: rebuilds `feed.xml` (RSS) from `data.js`. Run `node build.js` after every content change.
- `feed.xml`: the RSS feed. Buttondown reads it and emails new posts to subscribers.

## Adding a post

1. Open `data.js` and copy an object in `POSTS`. Put the new one at the **top** (newest first).
2. Fill in `id` (lowercase-with-dashes, unique), `date` (YYYY-MM-DD), `type` (`blog`, `gist`, `x`, `video`, `talk`, `podcast`, `repo`, `tool`), `title`, `summary`, `points`, `links`. Add `video` (YouTube ID) or `tweet` (X URL) to embed it.
3. Update `SITE.lastChecked`.
4. Run `node build.js`, then commit and push.

## Writing rules

- Use an ASD-STE100 style: short sentences (max ~20 words), active voice, simple words, one idea per sentence.
- Use our own words only. Never copy his text. Keep any quote under 15 words.
- Every item links to its original source.

## Emails to subscribers

`.github/workflows/newsletter.yml` runs when `data.js` changes on `main`. It finds posts that are new since the last commit and sends one email through the Buttondown API. It needs a repository secret called `BUTTONDOWN_API_KEY` (Settings → Secrets and variables → Actions).
