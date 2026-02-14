import AppCard from './AppCard';
import { Timer, CalendarClock, Repeat2, Calendar, BookOpen, Music2 } from 'lucide-react';

// Import local images
import rhythmWeaverImage from '../assets/images/rhythm-weaver.jpg';
import practiceTimerImage from '../assets/images/practice-timer.png';
import practiceCopilotImage from '../assets/images/koh-pilot.jpg';
import practiceScheduleImage from '../assets/images/practice-schedule.jpg';
import brightSightImage from '../assets/images/bright-sight.png';
import scaledImage from '../assets/images/scaled.png';

const AppGrid = () => {
  const apps = [
    {
      title: "Bright Sight",
      description: "AI-powered classical guitar sight reading exercises with grade-appropriate sight reading exercises (Grades 1-8) and shared exercise storage.",
      icon: BookOpen,
      thumbnail: brightSightImage,
      features: ["AI-generated exercises", "Public domain music scores", "Graded exercises", "Progress tracking"],
      url: "https://bright-sight.app/",
      badge: "beta"
    },
    {
      title: "Scaled",
      description: "Music practice app for learning and practicing scales with finger pattern drills and metronome support.",
      icon: Music2,
      thumbnail: scaledImage,
      features: ["Personalized scale sractice", "Finger patterns", "Metronome", "Progress tracking"],
      url: "https://practice-scales.netlify.app/"
    },
    {
      title: "Practice Mate",
      description: "Work-break session timer designed for focused practice sessions. Optimize your practice time with structured intervals and rest periods. Create a practice pan and log your practice time",
      icon: CalendarClock,
      thumbnail: practiceTimerImage,
      features: ["Pomodoro technique", "Custom work-break intervals and alarms", "Practice Plan", "Daily and weekly tracking"],
      url: "https://practicemate.netlify.app/" // Replace with your actual URL
    },
    {
      title: "Practice Koh-Pilot",
      description: "Practice repetition tool that helps you master difficult passages through structured repetition with the option of using a metronome.",
      icon: Repeat2,
      thumbnail: practiceCopilotImage,
      features: ["Set the number of repetitions", "Track successful repetitions", "Metronome"],
      url: "https://koh-pilot.netlify.app/" // Replace with your actual URL
    },
    {
      title: "Practice Planner",
      description: "Weekly practice planner that helps you organize leaning and maintining repertoire on a limited scheudle. Data is stored in the browser for now. You can export and import data from settings.",
      icon: Calendar,
      thumbnail: practiceScheduleImage,
      features: ["Weekly planning", "Manage repertoire"],
      url: "https://planning-mate.netlify.app/" // Replace with your actual URL
    },
    {
      title: "Rhythm Weaver",
      description: "This metronome is custumized to meet my needs with everything on one screen and advanced options to find the least annoying ticking sound.",
      icon: Timer,
      thumbnail: rhythmWeaverImage,
      features: ["Complex rhythms", "Visual beats", "Timer", "Customizable sounds"],
      url: "https://clickbot.netlify.app/" // Replace with your actual URL
    },
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