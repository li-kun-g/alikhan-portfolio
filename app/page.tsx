import Image from "next/image";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* TEXT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold">
            Public Policy & Sustainable Development
          </h1>

          <p className="text-lg text-gray-700 max-w-xl">
            Bachelor student in Public and Municipal Administration with international
            academic experience in Denmark and South Korea. My work focuses on
            Sustainable Development Goals implementation, public policy research,
            and youth leadership, with a regional focus on Central Asia.
          </p>

          <div className="flex gap-4">
            <a href="/research" className="px-5 py-2 border border-black">
              View Research
            </a>
            <a href="/initiative" className="px-5 py-2 border border-gray-400">
              SDG Initiative
            </a>
            <a href="/leadership" className="px-5 py-2 border border-gray-400">
              Leadership & Volunteering
            </a>
          </div>
        </div>

        {/* PHOTO */}
        <div className="flex-shrink-0">
          <Image
            src="/alikhan.jpg"
            alt="Alikhan Tuganbayev portrait"
            width={260}
            height={260}
            className="rounded-xl object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
