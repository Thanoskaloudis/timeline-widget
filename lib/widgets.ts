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
          color: "#f25b50"
        },
        {
          checked: false,
          text: "lorem ipsum",
          color: "#f25b50"
        },
        {
          checked: false,
          text: "lorem ipsum",
          color: "#f25b50"
        }]
      },
    }}})
    return { timeline }
  } catch (error) {
    return { error }
  }
}