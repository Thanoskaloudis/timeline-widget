import { IMilestoneProps } from '../utils/models'

export const PointDescription = ({ point } :IMilestoneProps) => {
  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {point.text}
    </h3>
  )
}
