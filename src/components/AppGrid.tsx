import React from 'react';
import AppCard from './AppCard';
import { Timer, Schedule, Repeat, CalendarToday } from '@mui/icons-material';

// Import local images
import rhythmWeaverImage from '../assets/images/rhythm-weaver.jpg';
import practiceMateImage from '../assets/images/practice-mate.jpg';
import practiceCopilotImage from '../assets/images/koh-pilot.jpg';
import practiceScheduleImage from '../assets/images/practice-schedule.jpg';

const AppGrid = () => {
  const apps = [
   
    {
      title: "Practice Mate",
      description: "Work-break session timer designed for focused practice sessions. Optimize your practice time with structured intervals and rest periods.",
      icon: Schedule,
      thumbnail: practiceMateImage,
      features: ["Pomodoro technique", "Custom intervals", "Break reminders"],
      color: "from-green-500 to-teal-600",
      url: "https://practicemate.netlify.app/" // Replace with your actual URL
    },
    {
      title: "Practice Koh-Pilot",
      description: "Practice repetition tool that helps you master difficult passages through structured repetition with the option of using a metronome.",
      icon: Repeat,
      thumbnail: practiceCopilotImage,
      features: ["Set the number of repetitions", "Track successful repetitions", "Metronome"],
      color: "from-purple-500 to-pink-600",
      url: "https://koh-pilot.netlify.app/" // Replace with your actual URL
    },
    {
      title: "Practice Schedule",
      description: "Weekly practice planner that helps you organize leaning and maintining repertoire on a limited scheudle. Data is stored in the browser for now. You can export and import data from settings.",
      icon: CalendarToday,
      thumbnail: practiceScheduleImage,
      features: ["Weekly planning", "Manage repertoire"],
      color: "from-orange-500 to-red-600",
      url: "https://planning-mate.netlify.app/" // Replace with your actual URL
    },
    {
      title: "Rhythm Weaver",
      description: "This metronome is custumized to meet my needs with everything on one screen and advanced options to find the least annoying ticking sound.",
      icon: Timer,
      thumbnail: rhythmWeaverImage,
      features: ["Complex rhythms", "Visual beats", "Timer", "Customizable sounds"],
      color: "from-blue-500 to-purple-600",
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