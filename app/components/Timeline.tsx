import { IMilestone,ITimelinesProps } from '../utils/models';
import { PointCheck } from './PointCheck';

export const Timeline = ({ timeline }: ITimelinesProps) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-7 m-5 transition-opacity opacity-100 duration-300">
      <ol className="items-center sm:flex">
        {timeline.points.map((point: IMilestone) => (
          <li key={point.id} className="relative mb-6 sm:mb-0">
            <div className="mt-3 w-40">
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                {point.date.toLocaleDateString()}
              </time>
              <PointCheck point={point}/>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {point.text}
              </h3>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
