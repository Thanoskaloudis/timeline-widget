'use server'

import { createTimeline } from "@/lib/widgets"
import { revalidatePath } from "next/cache";

export async function createTimelineAction() {
  await createTimeline();
  revalidatePath('/');
}