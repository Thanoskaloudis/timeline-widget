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

export async function updateTimeline(milestoneId: string, checked: boolean) {
  try {
    const checkMilestone = await prisma.milestone.update({
      where: {
        id: milestoneId, 
      },
      data: {
        checked: checked, 
      },
    });
    return { checkMilestone }
  } catch (error) {
    return { error }
  }
}