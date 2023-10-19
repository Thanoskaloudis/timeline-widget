import { IMilestone, IUpdateFields } from '@/app/utils/models';
import prisma from './prisma';

export async function getTimelines() {
  try {
    const timelines = await prisma.timeline.findMany({
      include: {
        points: true,
      },
    })
    return { timelines }
  } catch (error) {
    return { error }
  }
}

export async function createTimeline() {
  try {
    const timeline = await prisma.timeline.create({ data: { color: '#f25b50',
    points: {
      createMany: {
        data: [{
          checked: false,
          text: "lorem ipsum",
          color: "#f25b50",
          date: new Date('2023-01-15T12:00:00Z'),
        },
        {
          checked: false,
          text: "lorem ipsum",
          color: "#f25b50",
          date: new Date('2023-05-15T12:00:00Z'),
        },
        {
          checked: false,
          text: "lorem ipsum",
          color: "#f25b50",
          date: new Date('2023-09-15T12:00:00Z'),
        }]
      },
    }}})
    return { timeline }
  } catch (error) {
    return { error }
  }
}

export async function updateTimeline(milestoneId: string, updatedFields: IUpdateFields) {
  try {
    const checkMilestone = await prisma.milestone.update({
      where: {
        id: milestoneId, 
      },
      data: updatedFields as IMilestone,
    });
    return { checkMilestone }
  } catch (error) {
    return { error }
  }
}

export async function addNewTimelinePoint(timelineId: string) {
  try {
    const newMilestone = await prisma.milestone.create({
      data: {
        ... {
          checked: false,
          text: "lorem ipsum",
          color: "#f25b50",
          date: new Date('2023-05-15T12:00:00Z'),
        },
        timeline: { connect: { id: timelineId } }, 
      },
    });

    console.log('New Milestone created:', newMilestone);
    return newMilestone;
  } catch (error) {
    console.error('Error creating milestone:', error);
    throw error;
  }
}

export async function deleteTimelineById(timelineId: string) {
  try {
    await prisma.milestone.deleteMany({
      where: {
        timelineId: timelineId,
      }
    });

    const deletedTimeline = await prisma.timeline.delete({
      where: {
        id: timelineId,
      },
    });

    console.log('Timeline deleted:', deletedTimeline);
  } catch (error) {
    console.error('Error deleting timeline:', error);
    throw error;
  }
}
