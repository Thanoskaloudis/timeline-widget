'use client'
import { useState } from 'react';
import { IMilestoneProps } from '../utils/models'
import { updateTimelineAction } from '../_actions';

export const PointDate = ({ point } :IMilestoneProps) => {
  const [isHovered, setIsHovered] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isoDate = new Date(e.target.value).toISOString();
    updateTimelineAction(point.id, { date: new Date(isoDate)});
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
    >
    {isHovered && !isEditing ? (
      <span
        className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 cursor-pointer"
        onClick={() => setIsEditing(true)}
      >
        {point.date.toLocaleDateString()}
      </span>
    ) : (
      <input
        type="date"
        className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        value={point.date.toISOString()}
        onChange={handleTimeChange}
        onBlur={() => setIsEditing(false)}
      />
    )}
    </div>
  )
}
