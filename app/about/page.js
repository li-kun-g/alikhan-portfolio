export default function About() {
  return (
    <section className="space-y-10 max-w-3xl">
      <h1 className="text-3xl font-bold">About Me</h1>

      {/* Identity snapshot */}
      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          I am a Bachelor student in Public and Municipal Administration at KIMEP
          University, majoring in International Development and Public Policy,
          with a minor in International Relations.
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-medium">Academic performance:</span> GPA 4.24 / 4.33
        </p>
      </div>

      {/* Academic exposure */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Academic & International Exposure</h2>

        <p className="text-sm text-gray-700">
          My academic journey has been shaped by international study experiences
          in Kazakhstan, Denmark, and South Korea, where I explored governance
          systems, public administration, and sustainability-oriented policy
          approaches in diverse institutional contexts.
        </p>
      </div>

      {/* Leadership & practice */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Leadership & Practical Engagement</h2>

        <p className="text-sm text-gray-700">
          Alongside my academic work, I have been actively engaged in student
          governance, research, and civic initiatives. These experiences have
          strengthened my interest in how youth leadership and public
          institutions can contribute to inclusive and sustainable development.
        </p>
      </div>

      {/* Focus */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Current Focus</h2>

        <p className="text-sm text-gray-700">
          My primary interests lie at the intersection of governance, sustainable
          development, and international cooperation, with a focus on translating
          policy frameworks into practical, locally grounded impact in Central
          Asia and comparable regions.
        </p>
      </div>
    </section>
  );
}
