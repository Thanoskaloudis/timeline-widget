'use server'

import { addNewTimelinePoint, createTimeline, updateTimeline } from "@/lib/widgets"
import { revalidatePath } from "next/cache";
import { IUpdateFields } from "./utils/models";

export async function createTimelineAction() {
  await createTimeline();
  revalidatePath('/');
}

export async function updateTimelineAction(id: string, updatedFields: IUpdateFields) {
  await updateTimeline(id, updatedFields);
  revalidatePath('/');
}

export async function addNewPointAction(id: string) {
  await addNewTimelinePoint(id);
  revalidatePath('/');
}