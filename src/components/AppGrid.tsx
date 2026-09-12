import AppCard, { AppCardProps } from './AppCard';
import { Timer, CalendarClock, Repeat2, BookOpen, Music2, Video, Search, TrendingUp, FileMusic, Gauge } from 'lucide-react';

// Import local images
import rhythmWeaverImage from '../assets/images/rhythm-weaver-icon.svg';
import practiceTimerImage from '../assets/images/practice-timer.png';
import practiceCopilotImage from '../assets/images/koh-pilot-icon.svg';
import brightSightImage from '../assets/images/bright-sight.png';
import scaledImage from '../assets/images/scaled.png';
import practiceMirrorImage from '../assets/images/practice-mirror.png';
import spotPracticeImage from '../assets/images/spot-practice-icon.svg';
import clickUpImage from '../assets/images/click-up-icon.svg';
import scoreToneImage from '../assets/images/score-tone-icon.svg';
import pitchMateImage from '../assets/images/pitch-mate-icon.svg';

const AppGrid = () => {
  const apps: AppCardProps['app'][] = [
    {
      title: "Bright Sight",
      tagline: "Fresh sight-reading practice for classical guitar.",
      description: "Build real sight-reading skills with new exercises whenever you practice. Choose your level and get material designed specifically for classical guitar, so you can focus on reading rather than remembering exercises you've already played.",
      icon: BookOpen,
      thumbnail: brightSightImage,
      features: [
        "Sight-reading exercises for Grades 1–8",
        "New exercises whenever you practice",
        "Written specifically for classical guitar",
        "Play exercises with built-in score playback and tempo control",
        "Save exercises you want to revisit",
        "Set daily sight-reading goals"
      ],
      url: "https://bright-sight.app/",
      badge: "beta"
    },
    {
      title: "Practice Mate",
      tagline: "Give your practice session some structure.",
      description: "Plan what you want to work on, give each piece or exercise its own time, and keep track of the repertoire you're studying. Practice Mate helps you spend your time intentionally without turning practice into a productivity exercise.",
      icon: CalendarClock,
      thumbnail: practiceTimerImage,
      features: [
        "Build practice routines around your repertoire",
        "Set a target time for each piece or exercise",
        "Keep practicing past the timer when you need to",
        "Store notes, score links, and reference videos with each piece",
        "Track practice time and consistency",
        "Keep lesson plans and goals together",
        "Share practice summaries with a teacher",
        "Keeps your screen awake during a session"
      ],
      url: "https://timer.practice-lab.net/"
    },
    {
      title: "Score Tone",
      tagline: "A sheet music reader designed for practice and performance",
      description: "Read PDFs and digital scores in a comfortable, eye-friendly format. Customize the score tint with options such as sepia to reduce eye strain, organize your scores, and bookmark pages for quick access. For XML scores, use synthesized playback and create loops to practice difficult passages. Share scores through connected cloud storage, including Google Drive.",
      icon: FileMusic,
      thumbnail: scoreToneImage,
      features: [
        "Comfortable display modes for long practice sessions",
        "Darken faint or washed-out sheet music",
        "Single-page, two-page, scrolling, and full-screen views",
        "Bookmark sections and rehearsal points",
        "Play and loop measures in MusicXML scores",
        "Share links that open directly to a specific score or page",
        "Keeps your screen awake while you play",
        "Works offline with saved scores"
      ],
      url: "https://score.practice-lab.net/",
      badge: "new"
    },
    {
      title: "Practice Mirror",
      tagline: "See, review, and evaluate your playing while you practice.",
      description: "Use your phone, tablet, or computer as a practice mirror to check posture, hand position, movement, and technique. Record a take when you want a closer look, trim it, and download or share it via direct YouTube upload.",
      icon: Video,
      thumbnail: practiceMirrorImage,
      features: [
        "Live visual feedback while you play",
        "Record practice takes",
        "Trim clips directly after recording",
        "Choose your camera and microphone",
        "Countdown before recording starts",
        "Upload clips to YouTube as unlisted videos",
        "Your recordings stay on your device unless you choose to share them"
      ],
      url: "https://mirror.practice-lab.net/"
    },
    {
      title: "Spot Practice",
      tagline: "Focused spot practice for difficult passages.",
      description: "Practice the whole piece methodically without playing it from beginning to end every time. Spot Practice helps you divide a score into manageable sections, focus on one passage at a time, and work through different spots systematically. By rotating through sections and returning to difficult passages, you can build reliable technique and musical memory while avoiding the habit of simply running through the entire piece during the early stages of learning.",
      icon: Search,
      thumbnail: spotPracticeImage,
      features: [
        "Isolate specific measures from a MusicXML score",
        "Practice short passages without the rest of the page",
        "Switch between the isolated passage and full-score context",
        "Zoom notation for comfortable reading",
        "Randomize trouble spots for more varied practice"
      ],
      url: "https://spot.practice-lab.net/"
    },
    {
      title: "Click Up",
      tagline: "A different way to build speed and accuracy.",
      description: "Work toward faster tempos by moving between comfortable playing, faster bursts, and recovery tempos instead of simply increasing the metronome a few beats at a time.\n\nInspired by Dr. Molly Gebrian’s neuroscience-based methodology on interleaved practice in music learning and performance training.",
      icon: TrendingUp,
      thumbnail: clickUpImage,
      features: [
        "Automatically varies your practice tempo",
        "Alternate between comfortable and faster tempos",
        "Practice short high-speed bursts",
        "Control repetitions and subdivisions",
        "Isolate passages from MusicXML scores",
        "Simple controls designed for use while playing"
      ],
      url: "https://clickup.practice-lab.net/"
    },
    {
      title: "Practice Koh-Pilot",
      tagline: "Real accountability for clean, consistent repetitions.",
      description: "Choose how many clean repetitions you want in a row. Each successful attempt moves you closer to your goal; a mistake resets the count. It's a simple way to turn “I think I know this” into consistent playing you can trust.",
      icon: Repeat2,
      thumbnail: practiceCopilotImage,
      features: [
        "Set a consecutive clean-repetition goal",
        "Reset the count when a repetition isn't clean",
        "Built-in metronome",
        "Large controls that are easy to use from a music stand",
        "Clear progress toward your goal",
        "Useful for difficult passages, auditions, and performance preparation"
      ],
      url: "https://koh.practice-lab.net/"
    },
    {
      title: "Rhythm Weaver",
      tagline: "A metronome made for long practice sessions.",
      description: "Get the timing tools you need without digging through menus. Rhythm Weaver combines a comfortable click sound with tempo, meter, subdivisions, rhythmic patterns, and practice controls on one screen.",
      icon: Timer,
      thumbnail: rhythmWeaverImage,
      features: [
        "Warm, less intrusive metronome sounds",
        "Tempo and tap tempo",
        "Subdivisions and accents",
        "Odd meters and more complex rhythmic patterns",
        "Visual beat indicators",
        "Practice timer",
        "Share rhythm setups with a link",
        "Keeps your screen awake while you practice"
      ],
      url: "https://rhythm.practice-lab.net/"
    },
    {
      title: "Scaled",
      tagline: "Make scale practice less automatic.",
      description: "Scaled varies what you practice so scales don't become the same mechanical routine every day. Move through different keys and right-hand finger combinations while keeping track of your practice goals.",
      icon: Music2,
      thumbnail: scaledImage,
      features: [
        "Randomizes the order of scales",
        "Cycles through classical guitar right-hand finger combinations",
        "View notation for each scale",
        "Built-in metronome",
        "Set weekly practice goals",
        "Automatically works out a daily target",
        "Track practice streaks",
        "Customize the scales included in your routine"
      ],
      url: "https://scaled.practice-lab.net/"
    },
    {
      title: "Pitch Mate",
      tagline: "A clear, stable tuner for musicians.",
      description: "Tune quickly with a bold circular dial that clearly shows how sharp or flat you are with smooth visual feedback. Pitch Mate gives you a large, high-contrast display that is easy to read from a music stand, with custom A4 calibration for playing at reference pitches other than 440 Hz.",
      icon: Gauge,
      thumbnail: pitchMateImage,
      features: [
        "Stable chromatic pitch detection with smooth, jitter-free filtering",
        "High-visibility tuning dial with precise cents-sharp and cents-flat readouts",
        "Large display designed for easy reading from a music stand",
        "Adjustable A4 reference frequency with custom Hz calibration",
        "Built-in presets for alternate tunings",
        "Realistic acoustic reference tones for tuning by ear",
        "Chromatic mode for guitar and other acoustic instruments"
      ],
      badge: "Android"
    }
  ];

  return (
    <section id="apps" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppGrid;