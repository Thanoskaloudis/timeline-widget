'use server'

import { createTimeline, updateTimeline } from "@/lib/widgets"
import { revalidatePath } from "next/cache";

export async function createTimelineAction() {
  await createTimeline();
  revalidatePath('/');
}

export async function updateTimelineAction(id: string, checked: boolean) {
  const updatedFields = { checked: checked}
  await updateTimeline(id, updatedFields);
  revalidatePath('/');
}