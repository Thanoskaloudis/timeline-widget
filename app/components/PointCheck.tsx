'use client'
import { useTransition } from 'react';
import { updateTimelineAction } from '../_actions';
import { IMilestoneProps } from '../utils/models';

export const PointCheck = ({ point } :IMilestoneProps) => {
  const [isPending, startTransition] = useTransition();

  const checkTimelinePoint = (id: string, checked: boolean) => {
    startTransition(()=> {
      updateTimelineAction(id, !checked);
    })
  };
  
  return (
    <div className="flex items-center">
    <div className={`z-10 flex items-center justify-center w-6 h-6 ${point.checked ? 'bg-green-300' : 'bg-blue-100'} rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 cursor-pointer`}
     onClick={()=> checkTimelinePoint(point.id, point.checked)}
    >
      {
        point.checked ? (
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
          </svg>
        ) : (
          <svg className={'w-2.5 h-2.5 text-blue-800 dark:text-blue-300'} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        )
      }
    </div>
    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
  </div>
  )
}
