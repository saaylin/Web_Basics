import React from 'react';
 
interface MatchstickProps {
  rotate?: number;
  className?: string;
  hidden?: boolean;
}
 
export const Matchstick: React.FC<MatchstickProps> = ({ rotate = 0, className = "", hidden = false }) => {
  if (hidden) return <div className="w-2 h-16 m-1 opacity-0" />;
  return (
    <div
      className={`relative w-2 h-14 bg-amber-200 rounded-full shadow-lg transition-all duration-700 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Der rote Kopf des Zündholzes */}
      <div className="absolute top-0 left-0 w-full h-4 bg-red-600 rounded-t-full shadow-sm" />
    </div>
  );
};
 
 
export default Matchstick;