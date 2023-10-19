import { IMilestone,ITimelinesProps } from '../utils/models';
import { AddPoint } from './AddPoint';
import { PointCheck } from './PointCheck';
import { PointDate } from './PointDate';
import { PointDescription } from './PointDescription';

export const Timeline = ({ timeline }: ITimelinesProps) => {
  return (
    <div className="w-fit bg-white rounded-lg shadow-lg p-7 m-5 transition-opacity opacity-100 duration-300">
      <ol className="items-center sm:flex">
        {timeline.points.map((point: IMilestone) => (
          <li
            key={point.id}
            className="relative mb-6 sm:mb-0"
          >
            <div className="mt-3 w-40">
              <PointDate point={point} />
              <PointCheck point={point} />
              <PointDescription point={point} />
            </div>
          </li>
        ))}
        <AddPoint timeline={timeline} />
      </ol>
    </div>
  );
};
