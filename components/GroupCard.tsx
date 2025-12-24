import React from 'react';
import { Group } from './Types';

interface GroupCardProps {
  group: Group;
  onInterestClick: (group: Group) => void;
}

export const GroupCard: React.FC<GroupCardProps> = ({ group, onInterestClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={group.imageUrl} alt={group.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{group.name}</h3>
        <p className="text-md text-gray-600 italic mb-3">{group.tagline}</p>
        <p className="text-sm text-gray-700 mb-4">{group.description}</p>
        
        <div className="text-sm text-gray-500 space-y-2 mb-6">
          <p><strong>Meeting Schedule:</strong> {group.meetingSchedule}</p>
          <p><strong>Location:</strong> {group.location}</p>
        </div>

        <button
          onClick={() => onInterestClick(group)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          I'm Interested
        </button>
      </div>
    </div>
  );
};
