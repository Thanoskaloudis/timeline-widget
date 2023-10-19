'use client'
import { useTransition } from 'react'
import { ITimelinesProps } from '../utils/models';
import { addNewPointAction } from '../_actions';

export const AddPoint = ({timeline}: ITimelinesProps) => {
  const [isPending, startTransition] = useTransition();

  const addNewPoint = () => {
    startTransition(()=> {
      addNewPointAction(timeline.id);
    })
  };
  
  return (
    <div className="mb-3">
    <div className="flex items-center">
      <div
        className='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 cursor-pointer'
        onClick={()=> addNewPoint()}
      >
        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
      </div>
    </div>
  </div>
  )
}
