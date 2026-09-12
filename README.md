# Practice Lab

A suite of focused web tools for musicians, hosted at [practice-lab.net](https://practice-lab.net).

## Included Tools

- **Bright Sight** – Sight-reading practice for classical guitar ([bright-sight.app](https://bright-sight.app/))
- **Practice Mate** – Practice session timer and repertoire planner ([timer.practice-mate.app](https://timer.practice-mate.app/))
- **Score Tone** – Sheet music reader designed for practice and performance ([score.practice-mate.app](https://score.practice-mate.app/))
- **Practice Mirror** – Video practice mirror with recording and YouTube upload ([mirror.practice-mate.app](https://mirror.practice-mate.app/))
- **Spot Practice** – Methodical practice for difficult passages in MusicXML ([spot.practice-mate.app](https://spot.practice-mate.app/))
- **Click Up** – Interleaved burst tempo practice inspired by Dr. Molly Gebrian ([clickup.practice-mate.app](https://clickup.practice-mate.app/))
- **Practice Koh-Pilot** – Repetition tool for clean, consistent practice runs ([koh.practice-mate.app](https://koh.practice-mate.app/))
- **Rhythm Weaver** – Metronome with custom subdivisions and rhythms ([rhythm.practice-mate.app](https://rhythm.practice-mate.app/))
- **Scaled** – Daily scale practice randomizer and tracker ([scaled.practice-mate.app](https://scaled.practice-mate.app/))
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
