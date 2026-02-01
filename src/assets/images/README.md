# App Grid Images

Place your custom images here to replace the default Pexels stock photos.

## Required Images

You need to add these 6 images with the exact filenames:

1. **`rhythm-weaver.jpg`** - For the Rhythm Weaver app (metronome/timing tool)
2. **`practice-timer.png`** - For the Practice Timer app (work-break timer)
3. **`practice-copilot.jpg`** - For the Practice Copilot app (repetition tool)
4. **`practice-schedule.jpg`** - For the Practice Schedule app (weekly planner)
5. **`bright-sight.png`** - For the Bright Sight app (sight reading exercises)
6. **`scaled.png`** - For the Scaled app (scale practice)

## Image Format Requirements

- **Format**: JPG, JPEG, PNG, WebP, or SVG
- **Recommended size**: 800x600 pixels or larger (16:9 aspect ratio works well)
- **File size**: Keep under 500KB for optimal loading
- **Quality**: High quality, clear images that represent each tool's purpose

## Image Suggestions

- **Rhythm Weaver**: Images of metronomes, drum kits, or musical timing
- **Practice Mate**: Images of timers, clocks, or focused practice sessions
- **Practice Copilot**: Images of musical instruments, sheet music, or practice repetition
- **Practice Schedule**: Images of calendars, planners, or organized practice spaces

## How It Works

The images are imported in `src/components/AppGrid.tsx` and used as thumbnails with gradient overlays. They will automatically scale and crop to fit the card design.
