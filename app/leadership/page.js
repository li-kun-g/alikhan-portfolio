import Image from "next/image";

export default function Leadership() {
  return (
    <section className="space-y-10 max-w-5xl">
      <h1 className="text-3xl font-bold">Leadership & Volunteering</h1>

      {/* TEDxKIMEP */}
      <div className="border rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-xl font-semibold">
          Head of Department of Production — TEDxKIMEP
        </h2>

        <p className="text-sm text-gray-700 max-w-3xl">
          As Head of Production at TEDxKIMEP, I was responsible for planning and
          overseeing on-site operations, coordinating production teams, and
          ensuring the smooth execution of the event in line with TEDx standards.
        </p>

        <p className="text-sm text-gray-700 max-w-3xl">
          My responsibilities included managing logistics, stage setup, technical
          coordination, and time-sensitive workflows during the event. I worked
          closely with organizers, speakers, and volunteers to ensure effective
          communication and problem-solving in a high-pressure environment.
        </p>

        {/* LINKS */}
        <div className="flex flex-col gap-2 text-sm">
          <a
            href="https://www.ted.com/tedx/events/55103"
            target="_blank"
            className="underline"
          >
            Official TEDx Event Page (TED.com)
          </a>

          <a
            href="https://www.instagram.com/tedxkimepu/"
            target="_blank"
            className="underline"
          >
            TEDxKIMEP Team Instagram
          </a>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="relative h-[250px] overflow-hidden rounded-lg">
            <Image
              src="/tedx/tedx-3.jpg"
              alt="TEDxKIMEP team on stage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div> {/* ✅ THIS WAS MISSING */}

      {/* MUN */}
<div className="border rounded-2xl p-6 space-y-4 shadow-sm">
  <h2 className="text-xl font-semibold">
    Head of Department of Public Information — Model UN Conference
  </h2>

  <p className="text-sm text-gray-700 max-w-3xl">
    As Head of the Department of Public Information, I was responsible for managing
    public communications, social media strategy, and delegate engagement during
    an international Model United Nations conference.
  </p>

  <p className="text-sm text-gray-700 max-w-3xl">
    My role involved coordinating information flow between organizers and
    participants, supporting event logistics, and enhancing the visibility of
    the conference through digital communication channels.
  </p>

  {/* MUN Instagram link */}
  <div className="text-sm">
    <a
      href="https://www.instagram.com/munkimep/"
      target="_blank"
      className="underline"
    >
      MUN KIMEP Official Instagram
    </a>
  </div>

  {/* MUN image gallery */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
    <div className="relative h-[250px] overflow-hidden rounded-lg">
      <Image
        src="/mun/mun-1.jpg"
        alt="MUN KIMEP conference session"
        fill
        className="object-cover"
      />
    </div>

    <div className="relative h-[250px] overflow-hidden rounded-lg">
      <Image
        src="/mun/mun-2.jpg"
        alt="MUN KIMEP delegates"
        fill
        className="object-cover"
      />
    </div>
     <div className="relative h-[250px] overflow-hidden rounded-lg">
      <Image
        src="/mun/mun-4.jpg"
        alt="MUN KIMEP organizing team"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>

{/* OSCE */}
<div className="border rounded-2xl p-6 space-y-4 shadow-sm">
  <h2 className="text-xl font-semibold">
    Participant & National Representative — OSCE Central Asia Youth Dialogue Forum
  </h2>

  <p className="text-sm text-gray-700 max-w-3xl">
    Selected as one of 20 participants from over 2,000 applicants across Central
    Asia to represent Kazakhstan at the OSCE Central Asia Youth Dialogue Forum.
  </p>

  <p className="text-sm text-gray-700 max-w-3xl">
    The forum focused on youth engagement in the prevention of organized crime and
    corruption, governance challenges, and regional cooperation. I participated
    in expert-led workshops, policy discussions, and training sessions delivered
    by OSCE professionals and international speakers.
  </p>

  <p className="text-sm text-gray-700 max-w-3xl">
    This experience strengthened my understanding of multilateral policy
    processes, regional security challenges, and the role of youth in advancing
    transparency and good governance.
  </p>

  {/* Links & Downloads */}
 <div className="flex flex-col gap-3 pt-2">
    <a
      href="https://tntd.osce.org/secretariat/600338"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-sm underline"
    >
      Official OSCE Program Page
    </a>

    <a
      href="/documents/OSCE-Participant-Booklet.pdf"
      download
      className="inline-block text-sm px-4 py-2 border rounded-md hover:bg-gray-50 transition"
    >
      Download Participant Booklet (PDF)
    </a>
  </div>

  {/* OSCE image gallery */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
    <div className="relative h-[250px] overflow-hidden rounded-lg">
      <Image
        src="/osce/osce-1.jpg"
        alt="OSCE Central Asia Youth Dialogue Forum session"
        fill
        className="object-cover"
      />
    </div>

    <div className="relative h-[250px] overflow-hidden rounded-lg">
      <Image
        src="/osce/osce-2.jpg"
        alt="OSCE youth dialogue workshop"
        fill
        className="object-cover"
      />
    </div>

    <div className="relative h-[250px] overflow-hidden rounded-lg">
      <Image
        src="/osce/osce-3.jpg"
        alt="OSCE forum participants group photo"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>




    </section>
  );
}
