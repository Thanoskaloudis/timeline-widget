import { getTimelines } from "@/lib/widgets";
import { Timeline } from "./components/Timeline";
import { AddTimeline } from "./components/AddTimeline"

export default async function Home() {
  const { timelines } = await getTimelines();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AddTimeline />
      <section id="Widgets" className="flex flex-col mt-10">
        {timelines?.map((timeline) => (
          <Timeline key={timeline.id} timeline={timeline} />
        ))}
      </section>
    </main>
  );
}
