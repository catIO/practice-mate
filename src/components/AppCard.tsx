import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AppCardProps {
  app: {
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    thumbnail: string;
    features: string[];
    color: string;
    url: string;
  };
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const { title, description, icon: Icon, thumbnail, features, color, url } = app;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-[600px] flex flex-col cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-700 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* Icon overlay */}
        <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
          <Icon sx={{ fontSize: 32 }} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h4>
        
        <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Features */}
        <div className="mb-6 flex-shrink-0">
          <h5 className="text-white font-semibold mb-3">Key Features:</h5>
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="w-full bg-gradient-to-r from-blue-500 to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-500 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center space-x-2 flex-shrink-0">
          <span>Launch App</span>
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </a>
  );
};

export default AppCard;