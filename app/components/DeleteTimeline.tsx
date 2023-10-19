'use client'
import { useTransition } from "react";
import { deleteTimelineAction } from "../_actions";
import { ITimelinesProps } from "../utils/models";
 
export const DeleteTimeline = ({timeline}: ITimelinesProps) => {
  const [isPending, startTransition] = useTransition();

  const deleteTimeline = () => {
    startTransition(async ()=> {
      await deleteTimelineAction(timeline.id);
    })
  };

  return (
    <div
    className='z-10 flex items-center justify-center w-6 h-6 bg-red-100 rounded-full dark:bg-red-900 dark:ring-gray-900 shrink-0 cursor-pointer'
    onClick={()=> deleteTimeline()}
    >
    <svg className="w-2.5 h-2.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </div>
  )
}
