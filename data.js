/* karpathy.log — all site content lives in this one file.
   To add a new item: copy one object in POSTS, put it at the TOP, and fill it in.
   After editing, run: node build.js  (rebuilds feed.xml)
   Writing style: ASD-STE100-style Simplified English. Short sentences. Active voice.
   One idea per sentence. Our own words only — never paste the original text. */

window.SITE = {
  name: "karpathy.log",
  tagline: "An unofficial archive of Andrej Karpathy's public work on AI.",
  lastChecked: "2026-11-13",
  checkEveryDays: 4,
  // Full public address of the site. Used for links in the RSS feed and the emails.
  siteUrl: "https://rkade159.github.io/karpathy-log/",
  // Buttondown username. Buttondown stores subscribers and emails them new posts from feed.xml.
  buttondown: "karpathy.log",
  // Show YouTube players and X posts inside the page.
  embeds: true
};

window.POSTS = [
  {
    id: "tristantube",
    date: "2026-11-07",
    type: "x",
    title: "TristanTube: 47,000 videos from one person's favourite channels",
    summary: "Tristan Hume published a list of his top YouTube channels. Karpathy made the list into a video site. The site has about 47,000 technical videos and a TV mode for relaxed watching.",
    points: [
      "He says Claude Code built the site in one attempt, in about 3 minutes.",
      "It follows the same idea as HackerTube (below): a video feed chosen by people, not by an algorithm."
    ],
    tweet: "https://x.com/karpathy/status/2119114537442189652",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2119114537442189652" },
      { label: "TristanTube", url: "https://karpathy.ai/tristan-tube/" },
      { label: "Tristan's list", url: "https://thume.ca/" }
    ]
  },
  {
    id: "hackertube",
    date: "2026-10-31",
    type: "blog",
    title: "HackerTube: a YouTube made from Hacker News recommendations",
    summary: "Karpathy did not like his YouTube recommendations. He asked Claude to make a better video site. Claude filtered about 43 million Hacker News comments down to 6,454 videos that people recommend again and again.",
    points: [
      "The videos cover about 150 topics. The comments go from 2007 to 2026.",
      "The work took about 2 hours with Claude Opus 5.5. He did not write or run code himself.",
      "He did only three steps by hand: make a YouTube API key, start a server, and buy the domain.",
      "The 'For You' feed needs no account. It keeps your history in your browser."
    ],
    links: [
      { label: "Blog post", url: "https://karpathy.bearblog.dev/hacker-tube/" },
      { label: "hackertube.org", url: "https://hackertube.org/" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=50319510" }
    ]
  },
  {
    id: "funnel",
    date: "2026-10-11",
    type: "x",
    title: "The gap in AI understanding is getting wider",
    summary: "Karpathy shared again a post from April. He says people no longer split into two groups that talk past each other. Their understanding of AI now looks like a narrow funnel.",
    points: [
      "About 6 billion people have almost no contact with LLMs.",
      "About 1–2 billion people use free chatbots sometimes. They see a better search engine or a writing aid.",
      "About 20 million professionals in maths and code see agents finish large projects from one prompt.",
      "At the narrow end is a small group of people inside the AI labs. He calls all of these numbers 'napkin math'."
    ],
    tweet: "https://x.com/karpathy/status/2109361546505966046",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2109361546505966046" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=50047422" }
    ]
  },
  {
    id: "understand-outputs",
    date: "2026-10-02",
    type: "x",
    title: "Four ways to understand what an LLM tells you",
    summary: "Karpathy says that people will spend more and more time reading and checking LLM output. He gives four formats that make output easier to understand.",
    points: [
      "Writing: ask for ASD-STE100, a strict 'Simplified Technical English' made for aircraft manuals. He finds it much easier to read.",
      "Diagrams: ask for a diagram instead of paragraphs.",
      "HTML: ask for an interactive web page.",
      "Video: custom explainer videos. He is most excited about this format.",
      "Note: this site writes its summaries in an STE style because of this post."
    ],
    tweet: "https://x.com/karpathy/status/2105819303471976479",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2105819303471976479" }
    ]
  },
  {
    id: "pelican",
    date: "2026-08-02",
    type: "x",
    title: "Past the pelican test",
    summary: "For a long time, people tested LLMs with one request: draw a pelican on a bicycle as an SVG. Karpathy says this test is now too small. He showed a 3D scene from The Lord of the Rings that Claude Opus 5 made.",
    points: [
      "The scene used about 5,500 lines of code and cost about $10.",
      "He says LLMs now move towards custom worlds that are made on demand."
    ],
    tweet: "https://x.com/karpathy/status/2083749667410727319",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2083749667410727319" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=49140998" }
    ]
  },
  {
    id: "anthropic",
    date: "2026-05-19",
    type: "x",
    title: "Karpathy joins Anthropic",
    summary: "Karpathy joined Anthropic to go back to research and development at the frontier of LLMs. He works on the pre-training team under Nick Joseph. His new team uses Claude to make pre-training research faster.",
    points: [
      "He thinks the next few years at the frontier will be 'especially formative'.",
      "He says he still cares deeply about education and plans to return to it later."
    ],
    tweet: "https://x.com/karpathy/status/2056753169888334312",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2056753169888334312" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=48194352" }
    ]
  },
  {
    id: "understanding",
    date: "2026-04-30",
    type: "x",
    title: "You can outsource your thinking, not your understanding",
    summary: "Karpathy shared a line by @yacineMTB that he quotes a lot: you can outsource your thinking, but you cannot outsource your understanding.",
    points: [
      "Agents can do much of the work. But you must still understand what to build, why, and how to split the work between agents.",
      "He used the same line in his Sequoia talk on the same day."
    ],
    tweet: "https://x.com/karpathy/status/2049907410303865030",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2049907410303865030" }
    ]
  },
  {
    id: "sequoia-2026",
    date: "2026-04-30",
    type: "talk",
    title: "Sequoia AI Ascent 2026: from vibe coding to agentic engineering",
    summary: "A fireside chat with Stephanie Zhan at Sequoia AI Ascent. Karpathy also wrote a summary on his blog. The main ideas are below.",
    points: [
      "Around December 2025, coding agents became reliable. People could give them large tasks and correct them less.",
      "Software 3.0: you program an LLM with prompts. The context window is the main control.",
      "Verifiability: models improve fastest where success is easy to check, like code, maths and tests.",
      "Vibe coding makes building easy. Agentic engineering adds professional standards: security, correctness and maintenance.",
      "Humans become orchestrators. They write specs, check plans, and supply judgement and taste.",
      "Products should give agents clear interfaces: CLIs, APIs and docs that an agent can copy and use.",
      "LLMs are 'ghosts, not animals'. Learn by experience where they succeed and where they fail."
    ],
    video: "96jN2OCOfLs",
    links: [
      { label: "Blog summary", url: "https://karpathy.bearblog.dev/sequoia-ascent-2026/" },
      { label: "Video", url: "https://www.youtube.com/watch?v=96jN2OCOfLs" }
    ]
  },
  {
    id: "llm-wiki",
    date: "2026-04-04",
    type: "gist",
    title: "LLM Wiki: a personal knowledge base that an LLM keeps for you",
    summary: "Karpathy now spends more tokens on knowledge than on code. He described how an LLM keeps his personal wiki. The LLM writes and updates Markdown pages. He reads them in Obsidian.",
    points: [
      "You collect the raw sources. The LLM reads them but never changes them.",
      "The LLM writes the wiki pages, the index and the links between pages. You rarely edit the wiki yourself.",
      "He shared it as an 'idea file' — text, not code. You give the file to your own agent, and it builds a version for you."
    ],
    links: [
      { label: "The gist", url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" },
      { label: "First post on X", url: "https://x.com/karpathy/status/2039805659525644595" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=47640875" }
    ]
  },
  {
    id: "no-priors-2026",
    date: "2026-03-20",
    type: "podcast",
    title: "No Priors: 'Skill issue' — code agents, autoresearch and the loopy era",
    summary: "A podcast talk about how Karpathy now gives most of his coding to agents. He also talks about autoresearch and about running agents in loops.",
    points: [],
    video: "kwSVtQ7dziU",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=kwSVtQ7dziU" }
    ]
  },
  {
    id: "jobs",
    date: "2026-03-16",
    type: "tool",
    title: "US Job Market Visualizer",
    summary: "An interactive map of 342 US jobs from Bureau of Labor Statistics data. Together they cover about 143 million jobs. Box size shows how many people do a job. Colour shows the measure you select, for example pay or AI exposure.",
    points: [
      "The README says it is a tool to explore data. It is not a report or a paper.",
      "An LLM gives the AI-exposure scores. All the code is open, so you can change the prompt and score again."
    ],
    links: [
      { label: "Live tool", url: "https://karpathy.ai/jobs/" },
      { label: "Code", url: "https://github.com/karpathy/jobs" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=47400060" }
    ]
  },
  {
    id: "autoresearch",
    date: "2026-03-07",
    type: "repo",
    title: "autoresearch: let an agent do ML research overnight",
    summary: "A small repo for an AI agent to do machine-learning research alone. The agent changes one training file and runs a short experiment. It keeps the change only if the result is better. Then it does this again.",
    points: [
      "It uses a simple single-GPU version of nanochat.",
      "You do not edit the Python files. You edit program.md, the instructions for the agent.",
      "The repo has no agent inside. You use your own, for example Claude Code.",
      "People later called this pattern 'the Karpathy loop'. The terms 'loop engineering' and 'graph engineering' came from the community in mid-2026. Karpathy did not use them."
    ],
    links: [
      { label: "Repo", url: "https://github.com/karpathy/autoresearch" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=47291123" }
    ]
  },
  {
    id: "claws",
    date: "2026-02-21",
    type: "x",
    title: "Claws: a new layer on top of agents",
    summary: "Karpathy describes 'Claws' as a new layer in the AI stack. Agents sit on top of LLMs. Claws sit on top of agents. They add more scheduling, context, tools and memory over time.",
    points: [
      "He bought a Mac Mini to try them.",
      "He does not want to run OpenClaw itself. He likes smaller versions, such as NanoClaw (about 4,000 lines, runs in containers)."
    ],
    tweet: "https://x.com/karpathy/status/2024987174077432126",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2024987174077432126" },
      { label: "Simon Willison's notes", url: "https://simonwillison.net/2026/Feb/21/claws/" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=47096253" }
    ]
  },
  {
    id: "microgpt",
    date: "2026-02-12",
    type: "blog",
    title: "microgpt: a whole GPT in one small Python file",
    summary: "microgpt trains and runs a GPT in pure Python, with no libraries. Karpathy calls it the most atomic form of the algorithm. He says everything else is only about efficiency.",
    points: [
      "The blog post walks through the file step by step.",
      "It is a good first read before nanoGPT or nanochat."
    ],
    links: [
      { label: "Blog post", url: "https://karpathy.github.io/2026/02/12/microgpt/" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=47202708" }
    ]
  },
  {
    id: "claude-coding-notes",
    date: "2026-01-26",
    type: "x",
    title: "Notes from some weeks of coding with Claude",
    summary: "Karpathy now writes most of his code in English, by giving instructions to agents. Three months before, he said agents did not work well enough yet.",
    points: [
      "He says that review skill and writing skill are different. If you only review code, you can lose the skill to write it.",
      "He expects a 'slopacolypse' of low-quality AI content in 2026."
    ],
    tweet: "https://x.com/karpathy/status/2015883857489522876",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2015883857489522876" },
      { label: "HN discussion", url: "https://news.ycombinator.com/item?id=46771564" }
    ]
  },
  {
    id: "behind",
    date: "2025-12-26",
    type: "x",
    title: "“I've never felt this much behind as a programmer”",
    summary: "Karpathy says the programming job is being rebuilt. Programmers now add only small parts. There is a new layer to learn: agents, subagents, prompts, context, memory, tools, plugins, skills, hooks and MCP.",
    points: [
      "He thinks he could be 10x more powerful if he connected the new tools well.",
      "His advice: roll up your sleeves, so that you do not fall behind."
    ],
    tweet: "https://x.com/karpathy/status/2004607146781278521",
    links: [
      { label: "Post on X", url: "https://x.com/karpathy/status/2004607146781278521" }
    ]
  },
  {
    id: "year-review-2025",
    date: "2025-12-19",
    type: "blog",
    title: "2025 LLM Year in Review",
    summary: "Karpathy lists the changes of 2025 that surprised him most. His main point: LLMs are a new kind of intelligence. They are much smarter than he expected, and also much more stupid.",
    points: [],
    links: [
      { label: "Blog post", url: "https://karpathy.bearblog.dev/year-in-review-2025/" }
    ]
  },
  {
    id: "verifiability",
    date: "2025-11-17",
    type: "blog",
    title: "Verifiability",
    summary: "Models improve fastest on tasks with an automatic check of success, like code, maths and tests. Labs choose what to train on. This is why model skill is 'jagged': very strong in some areas and weak in others.",
    points: [],
    links: [
      { label: "Blog post", url: "https://karpathy.bearblog.dev/verifiability/" }
    ]
  },
  {
    id: "dwarkesh",
    date: "2025-10-17",
    type: "podcast",
    title: "Dwarkesh Podcast: “AGI is still a decade away”",
    summary: "A long interview with Dwarkesh Patel. Karpathy says this is the 'decade of agents', not the 'year of agents'. Agents cannot yet work like an employee or an intern.",
    points: [
      "Missing parts: continual learning, enough intelligence, multimodality and computer use.",
      "A small 'cognitive core' that only reasons could perhaps fit in about 1 billion parameters.",
      "He sees education as the problem of 'building ramps to knowledge'."
    ],
    video: "lXUZvyajciY",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=lXUZvyajciY" },
      { label: "Transcript page", url: "https://www.dwarkesh.com/p/andrej-karpathy" }
    ]
  },
  {
    id: "nanochat",
    date: "2025-10-13",
    type: "repo",
    title: "nanochat: build your own small ChatGPT",
    summary: "A full pipeline to train and run a simple ChatGPT-style model. It is about 8,000 lines of PyTorch. Karpathy wrote it by hand, because AI coding tools could not do what he needed.",
    points: [
      "It is the final project for LLM101n, the course that Eureka Labs planned."
    ],
    links: [
      { label: "Repo", url: "https://github.com/karpathy/nanochat" }
    ]
  },
  {
    id: "animals-ghosts",
    date: "2025-10-01",
    type: "blog",
    title: "Animals vs Ghosts",
    summary: "A reply to Richard Sutton's ideas about learning like animals. Karpathy agrees in part. But he says frontier LLMs are not animals. They are 'ghosts' made from human data. Ghosts may relate to animals as planes relate to birds.",
    points: [],
    links: [
      { label: "Blog post", url: "https://karpathy.bearblog.dev/animals-vs-ghosts/" }
    ]
  },
  {
    id: "yc-2025",
    date: "2025-06-17",
    type: "talk",
    title: "YC AI Startup School: Software is changing (again)",
    summary: "Software 1.0 is code. Software 2.0 is neural network weights. Software 3.0 is prompts to LLMs, written in English. Karpathy says all three will live together.",
    points: [],
    video: "LCEmiRjPEtQ",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=LCEmiRjPEtQ" },
      { label: "YC summary", url: "https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again" }
    ]
  },
  {
    id: "how-i-use-llms",
    date: "2025-02-28",
    type: "video",
    title: "How I use LLMs",
    summary: "A practical tour of how Karpathy uses LLMs in his own life, with many real examples. For a general audience.",
    points: [],
    video: "EWvNQjAaOHw",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=EWvNQjAaOHw" }
    ]
  },
  {
    id: "deep-dive",
    date: "2025-02-05",
    type: "video",
    title: "Deep Dive into LLMs like ChatGPT",
    summary: "A 3.5-hour explanation of how LLMs work, from the training data to the finished assistant. No maths or code is necessary.",
    points: [],
    video: "7xTGNNLPyMI",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=7xTGNNLPyMI" }
    ]
  }
];

/* ---------- Back catalogue, 2020–2025 (added 12 Nov 2026). The site sorts all posts by date. ---------- */
window.POSTS = window.POSTS.concat([
  {
    id: "auto-grade-hn", date: "2025-12-10", type: "blog",
    title: "Auto-grading decade-old Hacker News discussions with hindsight",
    summary: "Karpathy asked an LLM to grade old Hacker News comments. The model read 930 front-page threads from December 2015. Then it judged which comments were right about the future and which were wrong.",
    points: [
      "He built it with an AI coding agent in a few hours. The analysis cost about $60.",
      "A 'Hall of Fame' ranks the most far-sighted commenters.",
      "Example threads: Swift going open source, the launch of Figma, and the first announcement of OpenAI."
    ],
    links: [
      { label: "Blog post", url: "https://karpathy.bearblog.dev/auto-grade-hn/" },
      { label: "HN time capsule", url: "https://karpathy.ai/hncapsule/" }
    ]
  },
  {
    id: "llm-council", date: "2025-11-22", type: "repo",
    title: "LLM Council: ask several models, then let them review each other",
    summary: "A small web app. You ask one question to several frontier models. Each model then reviews the other answers. A 'chairman' model writes the final answer.",
    points: [
      "He calls it a weekend hack. He says he will not maintain it.",
      "He used it while reading books together with LLMs."
    ],
    links: [ { label: "Repo", url: "https://github.com/karpathy/llm-council" } ]
  },
  {
    id: "context-engineering", date: "2025-06-25", type: "x",
    title: "'Context engineering', not 'prompt engineering'",
    summary: "Karpathy agreed with Shopify CEO Tobi Lütke: 'context engineering' is a better name than 'prompt engineering'. A prompt sounds like a short question. Real LLM apps must fill the whole context window with the right information for the next step.",
    points: [
      "The term spread fast after his post.",
      "It connects to his 'LLM OS' idea: the context window is like the computer's working memory."
    ],
    links: [ { label: "Simon Willison's notes", url: "https://simonwillison.net/2025/Jun/27/context-engineering/" } ]
  },
  {
    id: "menugen", date: "2025-04-27", type: "blog",
    title: "Vibe coding MenuGen",
    summary: "MenuGen turns a photo of a restaurant menu into pictures of each dish. Karpathy vibe coded it with almost no web experience. The first local demo was fast and fun. Making it a real app was a slow, painful job.",
    points: [
      "The hard parts were not the code. They were hosting, the domain name, logins, payments and many service dashboards.",
      "He asks services to become easier for LLMs to use, for example with clear docs and command-line tools."
    ],
    links: [
      { label: "Blog post", url: "https://karpathy.bearblog.dev/vibe-coding-menugen/" },
      { label: "MenuGen", url: "https://www.menugen.app/" }
    ]
  },
  {
    id: "power-to-the-people", date: "2025-04-07", type: "blog",
    title: "Power to the people: how LLMs flip technology diffusion",
    summary: "New technology usually goes from governments to companies, and only then to normal people. Electricity, computers, the internet and GPS all followed this path. Karpathy says LLMs went the other way. Normal people got the biggest benefit first.",
    points: [ "He thinks the future is here and, for once, it is spread very widely." ],
    links: [ { label: "Blog post", url: "https://karpathy.bearblog.dev/power-to-the-people/" } ]
  },
  {
    id: "append-and-review", date: "2025-03-19", type: "blog",
    title: "The append-and-review note",
    summary: "Karpathy keeps one single note in Apple Notes, called 'notes'. He adds every new idea or to-do at the top, as plain text. Old items sink down over time. He reviews the note and moves important items back to the top.",
    points: [
      "One note means no folders and simple search.",
      "It is an early form of his later 'LLM Wiki' idea (April 2026)."
    ],
    links: [ { label: "Blog post", url: "https://karpathy.bearblog.dev/the-append-and-review-note/" } ]
  },
  {
    id: "vibe-coding", date: "2025-02-02", type: "x",
    title: "The post that named 'vibe coding'",
    summary: "Karpathy described a new way to code: you talk to an AI tool, accept what it writes, and stop reading the code. He called it 'vibe coding'. The term spread around the world in weeks.",
    points: [
      "He said it is good for quick weekend projects, not serious software.",
      "In 2026 he said 'agentic engineering' is the next step: agents with professional standards."
    ],
    tweet: "https://x.com/karpathy/status/1886192184808149383",
    links: [ { label: "Post on X", url: "https://x.com/karpathy/status/1886192184808149383" } ]
  },
  {
    id: "jagged-intelligence", date: "2024-07-25", type: "x",
    title: "Jagged intelligence",
    summary: "Karpathy gave a name to a strange fact. Top LLMs can solve very hard maths problems. But they can fail at very easy tasks, for example saying 9.11 is bigger than 9.9.",
    points: [
      "Their skill is not smooth like a human's. It is 'jagged'.",
      "He says this is not a fatal flaw, but you must know where the gaps are."
    ],
    tweet: "https://x.com/karpathy/status/1816531576228053133",
    links: [ { label: "Post on X", url: "https://x.com/karpathy/status/1816531576228053133" } ]
  },
  {
    id: "eureka-labs", date: "2024-07-16", type: "x",
    title: "Karpathy starts Eureka Labs",
    summary: "Karpathy announced Eureka Labs, 'a new kind of school that is AI native'. Human teachers design the course. AI teaching assistants help each student work through it.",
    points: [ "The first planned course is LLM101n: build your own small LLM, step by step." ],
    links: [
      { label: "Eureka Labs", url: "https://eurekalabs.ai/" },
      { label: "LLM101n outline", url: "https://github.com/karpathy/LLM101n" },
      { label: "TechCrunch", url: "https://techcrunch.com/2024/07/16/after-tesla-and-openai-andrej-karpathys-startup-aims-to-apply-ai-assistants-to-education" }
    ]
  },
  {
    id: "reproduce-gpt2", date: "2024-06-09", type: "video",
    title: "Let's reproduce GPT-2 (124M)",
    summary: "A 4-hour lecture. Karpathy starts with an empty file and ends with a trained GPT-2 (124M). First he builds the network. Then he makes training fast. Then he runs it and checks the results.",
    points: [ "He says the run takes about an hour on cloud GPUs and costs about $10." ],
    video: "l8pRSuU81PU",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=l8pRSuU81PU" },
      { label: "Code", url: "https://github.com/karpathy/build-nanogpt" }
    ]
  },
  {
    id: "llm-c", date: "2024-04-08", type: "repo",
    title: "llm.c: train GPT-2 in plain C and CUDA",
    summary: "llm.c trains GPT-2 without PyTorch or Python. The first version was about 1,000 lines of C. Later he moved it to CUDA so that it runs fast on GPUs.",
    points: [ "Later the team reproduced the full GPT-2 (1.5B) on one 8-GPU node in 24 hours, for about $672." ],
    links: [ { label: "Repo", url: "https://github.com/karpathy/llm.c" } ]
  },
  {
    id: "tokenizer", date: "2024-02-20", type: "video",
    title: "Let's build the GPT Tokenizer",
    summary: "A 2-hour lecture on tokenizers: the part that turns text into numbers for an LLM. Karpathy builds the GPT tokenizer from scratch with Byte Pair Encoding.",
    points: [ "He shows that many strange LLM mistakes come from tokenization, for example with spelling, numbers and non-English text." ],
    video: "zduSFxRajkE",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=zduSFxRajkE" },
      { label: "minbpe code", url: "https://github.com/karpathy/minbpe" }
    ]
  },
  {
    id: "left-openai", date: "2024-02-14", type: "x",
    title: "Karpathy leaves OpenAI for the second time",
    summary: "One year after he returned, Karpathy left OpenAI again. He said there was no drama. He wanted to work on personal projects.",
    points: [],
    links: [ { label: "TechCrunch", url: "https://techcrunch.com/2024/02/13/andrej-karpathy-is-leaving-openai-again-but-he-says-there-was-no-drama" } ]
  },
  {
    id: "dream-machines", date: "2023-12-09", type: "x",
    title: "LLMs are 'dream machines'",
    summary: "Karpathy says that, in a way, hallucination is all LLMs do. Prompts start a 'dream'. Usually the dream goes somewhere useful. We only call it a hallucination when it goes somewhere false.",
    points: [ "His point: the LLM itself has no hallucination problem. The LLM assistant does, and we should fix that." ],
    tweet: "https://x.com/karpathy/status/1733299213503787018",
    links: [ { label: "Post on X", url: "https://x.com/karpathy/status/1733299213503787018" } ]
  },
  {
    id: "intro-llms", date: "2023-11-23", type: "video",
    title: "Intro to Large Language Models (1-hour talk)",
    summary: "A general-audience talk. An LLM is just two files: the weights and a small program that runs them. Karpathy explains training, fine-tuning, the future of LLMs and their security risks.",
    points: [
      "Here he explains the 'LLM OS' idea: the LLM is like the kernel of a new operating system.",
      "The context window is like RAM. Tools and other models are like devices."
    ],
    video: "zjkBMFhNj_g",
    links: [ { label: "Video", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" } ]
  },
  {
    id: "llama2c", date: "2023-07-23", type: "repo",
    title: "llama2.c: run a Llama 2 model in one file of C",
    summary: "A weekend project. Karpathy took nanoGPT and changed it to the Llama 2 design. Then he wrote one 700-line C file that runs the model, with no dependencies.",
    points: [ "Small models run at interactive speed, even on a normal CPU." ],
    links: [ { label: "Repo", url: "https://github.com/karpathy/llama2.c" } ]
  },
  {
    id: "state-of-gpt", date: "2023-05-23", type: "talk",
    title: "State of GPT (Microsoft Build)",
    summary: "Karpathy explains how a ChatGPT-style assistant is trained, in four steps: pretraining, supervised fine-tuning, reward modelling and reinforcement learning. Then he explains how to use these models well.",
    points: [
      "Almost all of the compute goes into pretraining.",
      "His advice in 2023: use LLMs for low-stakes tasks, with a human checking the work."
    ],
    video: "bZQun8Y4L2A",
    links: [ { label: "Video", url: "https://www.youtube.com/watch?v=bZQun8Y4L2A" } ]
  },
  {
    id: "rejoins-openai", date: "2023-02-09", type: "x",
    title: "Karpathy returns to OpenAI",
    summary: "Karpathy announced that he was going back to OpenAI, where he was a founding member. He said the work there and its future potential excited him.",
    points: [],
    links: [ { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Andrej_Karpathy" } ]
  },
  {
    id: "english-language", date: "2023-01-24", type: "x",
    title: "'The hottest new programming language is English'",
    summary: "A very famous six-word post. Karpathy said that people can now program computers in plain English, by giving instructions to LLMs.",
    points: [ "In a follow-up he said this could grow the number of programmers to about 1.5 billion people." ],
    tweet: "https://x.com/karpathy/status/1617979122625712128",
    links: [ { label: "Post on X", url: "https://x.com/karpathy/status/1617979122625712128" } ]
  },
  {
    id: "lets-build-gpt", date: "2023-01-17", type: "video",
    title: "Let's build GPT: from scratch, in code, spelled out",
    summary: "His most famous lecture. Karpathy builds a small GPT from an empty file, following the 'Attention is All You Need' paper. He trains it on Shakespeare.",
    points: [ "It is lecture 7 of Neural Networks: Zero to Hero." ],
    video: "kCc8FmEb1nY",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      { label: "Code", url: "https://github.com/karpathy/ng-video-lecture" }
    ]
  },
  {
    id: "nanogpt", date: "2023-01-11", type: "repo",
    title: "nanoGPT: the simplest, fastest repo to train medium-sized GPTs",
    summary: "A rewrite of minGPT that puts speed first. It has two main files of about 300 lines each. It reproduced GPT-2 (124M) on OpenWebText.",
    points: [ "It became a standard base for many research projects." ],
    links: [ { label: "Repo", url: "https://github.com/karpathy/nanoGPT" } ]
  },
  {
    id: "lex-333", date: "2022-10-29", type: "podcast",
    title: "Lex Fridman Podcast #333",
    summary: "A 3.5-hour talk after Karpathy left Tesla. Topics: neural networks, Tesla Autopilot, Software 2.0, transformers, robots, aliens and AGI.",
    points: [ "He calls the transformer a general-purpose computer that you can train." ],
    video: "cdiD-9MMpb0",
    links: [ { label: "Video", url: "https://www.youtube.com/watch?v=cdiD-9MMpb0" } ]
  },
  {
    id: "makemore", date: "2022-09-07", type: "video",
    title: "The makemore series (5 lectures)",
    summary: "A series of lectures that builds a character-level language model. It starts with simple counting and grows step by step into a deeper network.",
    points: [
      "Part 1 (7 Sep 2022): a bigram model.",
      "Part 2 (12 Sep): an MLP. Part 3 (4 Oct): activations, gradients and BatchNorm.",
      "Part 4 (11 Oct): backprop by hand. Part 5 (21 Nov): a WaveNet."
    ],
    video: "PaCmpygFfXo",
    links: [
      { label: "Part 1", url: "https://www.youtube.com/watch?v=PaCmpygFfXo" },
      { label: "Code", url: "https://github.com/karpathy/makemore" }
    ]
  },
  {
    id: "micrograd-video", date: "2022-08-16", type: "video",
    title: "Building micrograd: neural networks and backpropagation",
    summary: "The first Zero to Hero lecture. Karpathy builds a tiny autograd engine from nothing. He shows that a neural network is only a big maths expression, trained with backpropagation.",
    points: [ "You need only basic Python and a little calculus." ],
    video: "VMj-3S1tku0",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=VMj-3S1tku0" },
      { label: "micrograd", url: "https://github.com/karpathy/micrograd" }
    ]
  },
  {
    id: "left-tesla", date: "2022-07-13", type: "x",
    title: "Karpathy leaves Tesla",
    summary: "After five years and a few months on sabbatical, Karpathy left Tesla. He said Autopilot had grown from lane keeping to city streets. He had no concrete plans. He wanted more time for technical work in AI, open source and education.",
    points: [],
    links: [ { label: "CNBC", url: "https://www.cnbc.com/2022/07/13/tesla-ai-leader-andrej-karpathy-announces-hes-leaving-the-company.html" } ]
  },
  {
    id: "lecun1989", date: "2022-03-14", type: "blog",
    title: "Deep Neural Nets: 33 years ago and 33 years from now",
    summary: "Karpathy reproduced LeCun's 1989 paper on reading handwritten zip codes. It is perhaps the first real use of a network trained end to end with backpropagation. Then he used modern tricks to cut its errors by about 60%.",
    points: [
      "Training that took days in 1989 took about 90 seconds on his laptop.",
      "He predicts that in 2055 people will rarely train networks from zero. They will adapt large foundation models."
    ],
    links: [
      { label: "Blog post", url: "https://karpathy.github.io/2022/03/14/lecun1989/" },
      { label: "Code", url: "https://github.com/karpathy/lecun1989-repro" }
    ]
  },
  {
    id: "tesla-ai-day", date: "2021-08-19", type: "talk",
    title: "Tesla AI Day: how Autopilot sees",
    summary: "Karpathy explained Tesla's vision system. Eight cameras feed one large network. It builds a 3D 'bird's-eye view' of the road. Many task 'heads' share one backbone. Tesla calls this design 'HydraNet'.",
    points: [ "The talk also covered how Tesla labels huge amounts of video data." ],
    links: [ { label: "Video (Karpathy's part)", url: "https://youtu.be/j0z4FweCy4M?t=2900" } ]
  },
  {
    id: "bitcoin-python", date: "2021-06-21", type: "blog",
    title: "A from-scratch tour of Bitcoin in Python",
    summary: "Karpathy makes, signs and sends a real Bitcoin transaction in pure Python, with no libraries. On the way he writes the maths of elliptic curves, the SHA-256 hash and the transaction format himself.",
    points: [
      "The idea: 'what I cannot create, I do not understand'.",
      "The full code is in his 'cryptos' repo."
    ],
    links: [
      { label: "Blog post", url: "https://karpathy.github.io/2021/06/21/blockchain/" },
      { label: "cryptos repo", url: "https://github.com/karpathy/cryptos" }
    ]
  },
  {
    id: "forward-pass", date: "2021-03-27", type: "blog",
    title: "Short Story on AI: Forward Pass",
    summary: "A short fiction story. A language model becomes aware of itself during one forward pass, and has an existential crisis. A GPT-3 'Turing test' article gave him the idea.",
    points: [],
    links: [ { label: "Story", url: "https://karpathy.github.io/2021/03/27/forward-pass/" } ]
  },
  {
    id: "mingpt", date: "2020-08-17", type: "repo",
    title: "minGPT: a GPT in about 300 lines of PyTorch",
    summary: "A small, clean, educational version of GPT. Karpathy says GPT is not a complicated model. Most of the complexity is clever batching for speed.",
    points: [ "In 2023 he replaced it with nanoGPT." ],
    links: [ { label: "Repo", url: "https://github.com/karpathy/minGPT" } ]
  },
  {
    id: "biohacking-lite", date: "2020-06-11", type: "blog",
    title: "Biohacking Lite",
    summary: "Karpathy explores the biochemistry of energy and weight. He explains how the body stores and burns energy. He also describes his own small experiments with weight, diet and measurements.",
    points: [],
    links: [ { label: "Blog post", url: "https://karpathy.github.io/2020/06/11/biohacking-lite/" } ]
  }
]);

/* Blog posts we list but have not summarised yet. */
window.ARCHIVE = [
  { date: "2025-12-18", title: "Chemical hygiene", url: "https://karpathy.bearblog.dev/chemical-hygiene/" },
  { date: "2025-11-29", title: "The space of minds", url: "https://karpathy.bearblog.dev/the-space-of-minds/" },
  { date: "2025-03-24", title: "Finding the Best Sleep Tracker", url: "https://karpathy.bearblog.dev/finding-the-best-sleep-tracker/" },
  { date: "2025-03-17", title: "Digital hygiene", url: "https://karpathy.bearblog.dev/digital-hygiene/" },
  { date: "2024-09-08", title: "I love calculator", url: "https://karpathy.bearblog.dev/i-love-calculator/" }
];

window.RESOURCES = [
  {
    title: "Neural Networks: Zero to Hero",
    intro: "His main free course. You build neural networks from nothing, in code. It starts with backpropagation and ends with GPT. You need good Python and basic maths (derivatives, Gaussians). Do the lectures in order.",
    links: [
      { label: "Course page", url: "https://karpathy.ai/zero-to-hero.html" },
      { label: "Notebooks", url: "https://github.com/karpathy/nn-zero-to-hero" }
    ],
    numbered: true,
    items: [
      { title: "Building micrograd: neural networks and backpropagation", meta: "2h 25m", video: "VMj-3S1tku0" },
      { title: "Building makemore: an intro to language modelling", meta: "1h 57m", video: "PaCmpygFfXo" },
      { title: "makemore Part 2: MLP", meta: "1h 15m", video: "TCH_1BHY58I" },
      { title: "makemore Part 3: activations, gradients, BatchNorm", meta: "1h 55m", video: "P6sfmUTpUmc" },
      { title: "makemore Part 4: becoming a backprop ninja", meta: "1h 55m", video: "q8SA3rM6ckI" },
      { title: "makemore Part 5: building a WaveNet", meta: "56m", video: "t3YJ5hKiMQ0" },
      { title: "Let's build GPT: from scratch, in code", meta: "1h 56m", video: "kCc8FmEb1nY" },
      { title: "Let's build the GPT Tokenizer", meta: "2h 13m", video: "zduSFxRajkE" },
      { title: "Let's reproduce GPT-2 (124M)", meta: "~4h", video: "l8pRSuU81PU" }
    ]
  },
  {
    title: "Start here: LLMs for everyone",
    intro: "Talks for a general audience. No code is necessary.",
    items: [
      { title: "Intro to Large Language Models", meta: "2023 · 1h", video: "zjkBMFhNj_g" },
      { title: "Deep Dive into LLMs like ChatGPT", meta: "2025 · 3h 31m", video: "7xTGNNLPyMI" },
      { title: "How I use LLMs", meta: "2025 · 2h", video: "EWvNQjAaOHw" },
      { title: "State of GPT (Microsoft Build)", meta: "2023 · 42m", video: "bZQun8Y4L2A" }
    ]
  },
  {
    title: "Code to read",
    intro: "Small, clean repos made to teach. Read them roughly in this order.",
    items: [
      { title: "microgpt", meta: "A whole GPT in one dependency-free Python file", url: "https://karpathy.github.io/2026/02/12/microgpt/" },
      { title: "micrograd", meta: "A tiny autograd engine and neural net library", url: "https://github.com/karpathy/micrograd" },
      { title: "makemore", meta: "Character-level language models, from bigrams to transformers", url: "https://github.com/karpathy/makemore" },
      { title: "minbpe", meta: "Minimal byte-pair encoding tokenizer", url: "https://github.com/karpathy/minbpe" },
      { title: "nanoGPT", meta: "Simple, fast repo to train medium-sized GPTs", url: "https://github.com/karpathy/nanoGPT" },
      { title: "build-nanogpt", meta: "The GPT-2 reproduction, one commit at a time", url: "https://github.com/karpathy/build-nanogpt" },
      { title: "llm.c", meta: "LLM training in plain C and CUDA", url: "https://github.com/karpathy/llm.c" },
      { title: "nanochat", meta: "Full pipeline for a small ChatGPT-style model", url: "https://github.com/karpathy/nanochat" },
      { title: "autoresearch", meta: "An agent runs ML experiments overnight", url: "https://github.com/karpathy/autoresearch" },
      { title: "minGPT", meta: "His 2020 GPT in about 300 lines (now replaced by nanoGPT)", url: "https://github.com/karpathy/minGPT" },
      { title: "llama2.c", meta: "Run a Llama 2 model in one C file", url: "https://github.com/karpathy/llama2.c" },
      { title: "cryptos", meta: "Bitcoin from scratch in pure Python", url: "https://github.com/karpathy/cryptos" },
      { title: "llm-council", meta: "Several LLMs answer, review each other, then agree", url: "https://github.com/karpathy/llm-council" }
    ]
  },
  {
    title: "Stanford CS231n",
    intro: "The first deep learning course at Stanford. He designed it and was its main teacher. It grew from 150 students in 2015 to 750 in 2017.",
    items: [
      { title: "Course website", meta: "Convolutional Neural Networks for Visual Recognition", url: "http://cs231n.stanford.edu/" },
      { title: "Course notes", meta: "Written notes, still widely used", url: "https://cs231n.github.io/" }
    ]
  },
  {
    title: "Classic essays",
    intro: "Older writing that people still share.",
    items: [
      { title: "A Recipe for Training Neural Networks", meta: "2019", url: "https://karpathy.github.io/2019/04/25/recipe/" },
      { title: "Software 2.0", meta: "2017", url: "https://karpathy.medium.com/software-2-0-a64152b37c35" },
      { title: "A Survival Guide to a PhD", meta: "2016", url: "https://karpathy.github.io/2016/09/07/phd/" },
      { title: "The Unreasonable Effectiveness of Recurrent Neural Networks", meta: "2015", url: "https://karpathy.github.io/2015/05/21/rnn-effectiveness/" },
      { title: "Short Story on AI: Forward Pass", meta: "2021", url: "https://karpathy.github.io/2021/03/27/forward-pass/" },
      { title: "Deep Neural Nets: 33 years ago and 33 years from now", meta: "2022", url: "https://karpathy.github.io/2022/03/14/lecun1989/" },
      { title: "A from-scratch tour of Bitcoin in Python", meta: "2021", url: "https://karpathy.github.io/2021/06/21/blockchain/" },
      { title: "Biohacking Lite", meta: "2020", url: "https://karpathy.github.io/2020/06/11/biohacking-lite/" },
      { title: "What I learned from competing against a ConvNet on ImageNet", meta: "2014", url: "https://karpathy.github.io/2014/09/02/what-i-learned-from-competing-against-a-convnet-on-imagenet/" }
    ]
  },
  {
    title: "Talks and podcasts",
    intro: "Long conversations. Good for his views on where AI is going.",
    items: [
      { title: "Sequoia AI Ascent: from vibe coding to agentic engineering", meta: "2026", video: "96jN2OCOfLs" },
      { title: "No Priors: code agents and autoresearch", meta: "2026", video: "kwSVtQ7dziU" },
      { title: "Dwarkesh Podcast: AGI is still a decade away", meta: "2025", video: "lXUZvyajciY" },
      { title: "YC AI Startup School: Software is changing (again)", meta: "2025", video: "LCEmiRjPEtQ" },
      { title: "GPU Mode: llm.c", meta: "2024", url: "https://www.youtube.com/watch?v=FH5wiwOyPX4&t=3246s" },
      { title: "No Priors", meta: "2024", video: "hM_h0UA7upI" },
      { title: "Lex Fridman Podcast #333", meta: "2022", video: "cdiD-9MMpb0" },
      { title: "Tesla AI Day", meta: "2021", url: "https://youtu.be/j0z4FweCy4M?t=2900" }
    ]
  },
  {
    title: "His own pages",
    intro: "Go to the source.",
    items: [
      { title: "karpathy.ai", meta: "Home page, bio and projects", url: "https://karpathy.ai/" },
      { title: "Bear blog", meta: "His current blog", url: "https://karpathy.bearblog.dev/blog/" },
      { title: "GitHub blog", meta: "His oldest blog", url: "https://karpathy.github.io/" },
      { title: "Favourite tweets wall", meta: "Tweets he chose himself", url: "https://karpathy.ai/tweets.html" },
      { title: "YouTube", meta: "@AndrejKarpathy", url: "https://www.youtube.com/@AndrejKarpathy" },
      { title: "X", meta: "@karpathy", url: "https://x.com/karpathy" },
      { title: "GitHub", meta: "github.com/karpathy", url: "https://github.com/karpathy" }
    ]
  },
  {
    title: "Explore further: fan-made knowledge bases",
    intro: "Other people collect and study his work too. These are not by Karpathy.",
    items: [
      { title: "Karpathy Thinking Partner", meta: "A knowledge graph of his tweets, posts, transcripts and repos", url: "https://deep-insights.pages.dev/karpathy/" },
      { title: "JC AI Wiki — Karpathy", meta: "Talks, essays and projects with walkthroughs", url: "https://jc-aiwiki.pages.dev/karpathy/" },
      { title: "Latent Space wiki", meta: "A sourced profile page", url: "https://latent.space/wiki/andrej-karpathy/" },
      { title: "The Man Who Summoned Ghosts", meta: "A chapter series about his ideas, by Lei Hua", url: "https://dev.to/lhua0420/the-man-who-summoned-ghosts-andrej-karpathy-in-the-ai-era-prologue-i-met-nanogpt-before-i-met-26d8" },
      { title: "Simon Willison's Karpathy tag", meta: "Notes on his posts since 2023", url: "https://simonwillison.net/tags/andrejkarpathy" },
      { title: "Knowledge", meta: "Browse researchers' tweets, stars and papers, Karpathy included", url: "https://knowledge-web.org/" }
    ]
  }
];

window.ABOUT = {
  short: "Andrej Karpathy is an AI researcher and teacher. He was a founding member of OpenAI and led AI at Tesla. He makes free courses that teach neural networks from zero. Since May 2026 he works on pre-training research at Anthropic.",
  paragraphs: [
    "Andrej Karpathy was born in 1986 in Bratislava, in what is now Slovakia. His family moved to Toronto when he was 15.",
    "He studied computer science and physics at the University of Toronto. He did a master's degree at the University of British Columbia, then a PhD at Stanford with Fei-Fei Li. His PhD connected images and natural language.",
    "Many people know him first as a teacher. At Stanford he designed CS231n, the first deep learning course there. Later he made Neural Networks: Zero to Hero on YouTube. He likes to build things from scratch, in small and clear code, so that people can see how they work.",
    "He also gives names to new ideas. 'Software 2.0', 'vibe coding' and 'jagged intelligence' all came from him or became popular through him."
  ],
  timeline: [
    { when: "2005–2009", what: "BSc in Computer Science and Physics, University of Toronto." },
    { when: "2009–2011", what: "MSc, University of British Columbia. Learning controllers for simulated figures." },
    { when: "2011–2015", what: "PhD, Stanford, with Fei-Fei Li. Internships at Google Brain, Google Research and DeepMind." },
    { when: "2015", what: "Designs and teaches CS231n at Stanford." },
    { when: "2015–2017", what: "Founding member and research scientist at OpenAI." },
    { when: "2017–2022", what: "Director of AI at Tesla. Leads the computer vision team for Autopilot." },
    { when: "2020", what: "Named in MIT Technology Review's Innovators Under 35." },
    { when: "2022", what: "Starts Neural Networks: Zero to Hero on YouTube." },
    { when: "2023–2024", what: "Returns to OpenAI. Builds a team on midtraining and synthetic data." },
    { when: "Jul 2024", what: "Starts Eureka Labs, an 'AI-native' school. Its first planned course is LLM101n." },
    { when: "2024", what: "Named in the TIME100 most influential people in AI." },
    { when: "Feb 2025", what: "Names 'vibe coding'." },
    { when: "Oct 2025", what: "Releases nanochat." },
    { when: "Mar 2026", what: "Releases autoresearch." },
    { when: "May 2026", what: "Joins Anthropic's pre-training team." }
  ],
  ideas: [
    { name: "Software 2.0 and 3.0", text: "1.0 is code that people write. 2.0 is neural network weights. 3.0 is prompts to LLMs, in English." },
    { name: "Vibe coding", text: "Building software by describing it to an AI and accepting what it makes, without reading every line." },
    { name: "Agentic engineering", text: "Using agents with professional standards: specs, review, security and tests." },
    { name: "Jagged intelligence", text: "LLMs are very strong at some tasks and weak at others, often in surprising ways." },
    { name: "Ghosts, not animals", text: "LLMs are not like animal minds. They are statistical copies of human data." },
    { name: "Verifiability", text: "AI improves fastest where success is easy to check automatically." },
    { name: "Decade of agents", text: "Agents will take years of work to become reliable, not one year." },
    { name: "Idea files", text: "In the agent era, share the idea as text. Each person's agent builds their own version." },
    { name: "LLM OS", text: "The LLM is like the kernel of a new operating system. The context window is its memory, and tools are its devices." },
    { name: "Context engineering", text: "Fill the context window with exactly the right information for the next step. A prompt is only a small part of it." },
    { name: "Dream machines", text: "LLMs always 'dream'. We call it hallucination only when the dream is false." },
    { name: "The hottest new programming language is English", text: "People can now program computers by giving LLMs instructions in plain language." }
  ]
};
