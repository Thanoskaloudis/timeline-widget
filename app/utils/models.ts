export interface ITimelinesProps {
  timeline: ITimelines;
}

export interface IMilestoneProps {
  point: IMilestone;
}

export interface ITimelines {
  id: string
  points: IMilestone[]
  color: string
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

