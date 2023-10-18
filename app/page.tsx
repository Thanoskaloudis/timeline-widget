import { getTimelines } from "@/lib/widgets";

export default async function Home() {
  const { timeLines } = await getTimelines();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="bg-white border-2 border-blue-700 rounded-full p-3 hover:bg-blue-100 hover:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Add Widget">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
      </button>
      <section id="Widgets">
        {timeLines?.map(timeline => (
          <div key={timeline.id}>{timeline.id}</div>
        ))}
      </section>
    </main>
  );
}
