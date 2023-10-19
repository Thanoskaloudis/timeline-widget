'use client'  
import { useState } from 'react';
import { IMilestoneProps } from '../utils/models'
import { updateTimelineAction } from '../_actions';

export const PointDescription = ({ point } :IMilestoneProps) => {
  const [isHovered, setIsHovered] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(point.text);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleInputBlur = () => {
    console.log(editedText);
    updateTimelineAction(point.id, { text: editedText});
    setIsEditing(false);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
    >
      {isHovered && !isEditing ? (
        <h3
          className="text-lg mt-4 font-semibold text-gray-900 dark:text-white cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          {editedText}
        </h3>
      ) : (
        <input
          type="text"
          className="block mt-4 text-sm font-normal leading-none text-gray-600 dark:text-gray-500"
          value={editedText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      )}
    </div>
  )
}
