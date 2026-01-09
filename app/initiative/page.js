import Image from "next/image";

export default function Initiative() {
  return (
    <section className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          Initiative — Establishing an Echo Change Local Chapter
        </h1>
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Youth Leadership · SDGs · Community-Based Action
        </p>
      </div>

      {/* Main narrative */}
      <div className="space-y-4">
        <p className="text-sm text-gray-700">
          I am working toward initiating a local chapter of Echo Change in
          Kazakhstan, following the organization’s model of youth-led chapters
          that serve as local hubs for SDG-oriented engagement, leadership
          development, and community-driven action.
        </p>

        <p className="text-sm text-gray-700">
          Echo Change local chapters are designed to empower young people to
          translate global development goals into locally relevant initiatives
          through dialogue, collaboration, and practical projects. The chapter I
          envision would focus on governance, sustainable development, and youth
          participation in Kazakhstan and the wider Central Asian region.
        </p>

        <p className="text-sm text-gray-700">
          I already have a preliminary implementation plan and a committed core
          team. The planned activities include youth discussions, SDG-aligned
          projects, community engagement initiatives, and collaboration with
          academic, civil society, and policy stakeholders.
        </p>

        <p className="text-sm text-gray-700">
          Participation in the Future Action Summit will directly support this
          initiative by strengthening my capacity in project design, long-term
          sustainability, and stakeholder engagement, contributing to a
          structured and impactful chapter launch following the summit.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="relative h-[200px] overflow-hidden rounded-xl">
          <Image
            src="/initiative/initiative-1.jpg"
            alt="Youth-led dialogue and collaboration"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-[200px] overflow-hidden rounded-xl">
          <Image
            src="/initiative/initiative-2.jpg"
            alt="SDG-oriented planning and teamwork"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-[200px] overflow-hidden rounded-xl">
          <Image
            src="/initiative/initiative-3.jpg"
            alt="Community engagement and leadership development"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
