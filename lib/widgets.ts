import prisma from './prisma'

export async function getTimelines() {
  try {
    const timeLines = await prisma.timeLine.findMany()
    return { timeLines }
  } catch (error) {
    return { error }
  }
}

