
export interface ITimelinesProps {
  timeline: ITimelines;
}

export interface IMilestoneProps {
  point: IMilestone;
}

export interface ITimelines {
  id: String
  points: IMilestone[]
  color: String
}

export interface IMilestone {
  id: string;
  checked: boolean;
  text: string;
  color: string;
  date: Date;
  timelineId: string;
}

export interface IUpdateFields {
  text?: string;
  color?: string;
  date?: Date;
  checked?: boolean;
}

