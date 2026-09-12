# Practice Lab

A suite of focused web tools for musicians, hosted at [practice-lab.net](https://practice-lab.net).

## Included Tools

- **Bright Sight** – Sight-reading practice for classical guitar ([bright-sight.app](https://bright-sight.app/))
- **Practice Mate** – Practice session timer and repertoire planner ([timer.practice-lab.net](https://timer.practice-lab.net/))
- **Score Tone** – Sheet music reader designed for practice and performance ([score.practice-lab.net](https://score.practice-lab.net/))
- **Practice Mirror** – Video practice mirror with recording and YouTube upload ([mirror.practice-lab.net](https://mirror.practice-lab.net/))
- **Spot Practice** – Methodical practice for difficult passages in MusicXML ([spot.practice-lab.net](https://spot.practice-lab.net/))
- **Click Up** – Interleaved burst tempo practice inspired by Dr. Molly Gebrian ([clickup.practice-lab.net](https://clickup.practice-lab.net/))
- **Practice Koh-Pilot** – Repetition tool for clean, consistent practice runs ([koh.practice-lab.net](https://koh.practice-lab.net/))
- **Rhythm Weaver** – Metronome with custom subdivisions and rhythms ([rhythm.practice-lab.net](https://rhythm.practice-lab.net/))
- **Scaled** – Daily scale practice randomizer and tracker ([scaled.practice-lab.net](https://scaled.practice-lab.net/))
- **Pitch Mate** – Chromatic tuner with high-visibility dial

## Hosting & Development

This site is completely static (no build step required).

### Local Preview
Open `index.html` directly in any web browser, or use any local static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (npx)
npx serve .
```

### Deployment
Deploy the root directory to any static hosting service (Netlify, Cloudflare Pages, GitHub Pages) without any build commands:
- **Build command**: None
- **Publish directory**: `.` (or root)
