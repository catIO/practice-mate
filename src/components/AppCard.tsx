import { ElementType } from 'react';
import { ExternalLink } from 'lucide-react';

export interface AppCardProps {
  app: {
    title: string;
    tagline?: string;
    description: string;
    icon: ElementType;
    thumbnail: string;
    features: string[];
    url?: string;
    badge?: string;
  };
}

const AppCard = ({ app }: AppCardProps) => {
  const { title, tagline, description, icon: Icon, thumbnail, features, url, badge } = app;

  const cardContent = (
    <>
      {/* Thumbnail */}
      <div className="relative h-64 flex-shrink-0 overflow-hidden flex items-center justify-center">
        <img 
          src={thumbnail} 
          alt={title}
          className={`h-full aspect-square object-contain rounded-[15.6%] transition-transform duration-500 ${url ? 'group-hover:scale-110' : ''}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-700 opacity-20 transition-opacity duration-300 ${url ? 'group-hover:opacity-30' : ''}`}></div>
        
        {/* Icon overlay */}
        <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-[15.6%]">
          <Icon size={32} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h4 className={`text-2xl font-bold text-white mb-2 transition-all duration-300 flex items-center gap-2 ${url ? 'group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text' : ''}`}>
          {title}
          {badge && (
            <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300 border border-amber-500/50">
              {badge}
            </span>
          )}
        </h4>

        {tagline && (
          <p className="text-white font-bold italic text-base py-1 mb-4 leading-snug">
            {tagline}
          </p>
        )}
        
        <p className="text-gray-300 text-base leading-relaxed mb-4 whitespace-pre-line">
          {description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h5 className="text-white font-semibold mb-3">Key Features:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        {url ? (
          <div className="w-full mt-auto bg-gradient-to-r from-blue-500 to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-500 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center space-x-2 flex-shrink-0">
            <span>Launch App</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        ) : (
          <div className="w-full mt-auto bg-gray-800/80 border border-gray-700/60 text-gray-400 py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 flex-shrink-0 cursor-default">
            <span>Coming Soon to Android</span>
          </div>
        )}
      </div>
    </>
  );

  if (url) {
    return (
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col cursor-pointer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300 h-full flex flex-col">
      {cardContent}
    </div>
  );
};

export default AppCard;