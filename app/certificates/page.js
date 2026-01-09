export default function Certificates() {
  return (
    <section className="space-y-12 max-w-4xl">
      <h1 className="text-3xl font-bold">
        Certificates & Academic Records
      </h1>

      <p className="text-sm text-gray-700 max-w-3xl">
        This page presents selected academic transcripts and certificates
        demonstrating academic excellence, international engagement, leadership,
        and professional skills.
      </p>

    {/* Academic Transcripts */}
<Section title="Academic Transcripts">
  <Item
    title="Bachelor of Public and Municipal Administration"
    description="Major: International Development & Public Policy · Minor: International Relations · GPA: 4.24 / 4.33 · KIMEP University"
    file="/certificates/transcript2026.pdf"
  />

  <Item
    title="University of Copenhagen — International Relations"
    description="Academic coursework with a strong focus on the Sustainable Development Goals and the Danish model of sustainable development."
    file="/certificates/UCPH-transcript.pdf"
  />

  <Item
    title="Sungkyunkwan University — Public Administration (GKS Scholar)"
    description="Academic coursework in Public Administration completed under the Global Korea Scholarship (GKS), awarded for academic excellence."
    file="/certificates/SKKU transcript.pdf"
  />
</Section>

      {/* International & Policy */}
      <Section title="International & Policy Certificates">
        <Item
          title="OSCE Central Asia Youth Dialogue Forum"
          description="Certificate of participation as a selected national representative of Kazakhstan."
          file="/certificates/OSCE-Certificate.pdf"
        />
        <Item
          title="Human Rights Program"
          description="Certified course on human rights supported by international partners."
          file="/certificates/human-rights.pdf"
        />
        <Item
          title="Model United Nations Conference"
          description="Certificate recognizing service as an organizer and contributor to an international Model United Nations (MUN) conference."
          file="/certificates/Certificate-MUN.pdf"
        />
        <Item
          title="TEDxKIMEP"
          description="Certificate confirming organizational and leadership contribution to TEDxKIMEP."
          file="/certificates/TEDX KIMEP.pdf"
        />
      </Section>

      {/* Technical */}
      <Section title="Technical & Professional Certificates">
        <Item
          title="Front-End Development Certificate"
          description="Certified training in front-end web development."
          file="/certificates/Front-end-certificate.pdf"
        />
        <Item
          title="Back-End Development Certificate"
          description="Certified training in back-end systems and application logic."
          file="/certificates/Back-end-certificate.pdf"
        />
      </Section>

      {/* Competitions */}
      <Section title="Academic & Intellectual Competitions">
        <Item
          title="Republican Intellectual Olympiad"
          description="Winner of a national intellectual Olympiad and recipient of a merit-based scholarship."
          file="/certificates/Certiciate-Olympiad-Intellectual.png"
        />
        <Item
          title="International Math Challenge"
          description="Bronze Award, Online International Math Challenge (Category IV), with participants from 96 countries — Bangkok, Thailand."
          file="/certificates/International-Math-Challenge.pdf"
        />
      </Section>

      {/* Cultural */}
      <Section title="Cultural & Creative Contributions">
        <Item
          title="Poetry Night Participation"
          description="Certificate recognizing participation in a cultural and literary event."
          file="/certificates/Certificate-Poetry-Night.pdf"
        />
        <Item
          title="Poetry Night Participation (Edition II)"
          description="Certificate recognizing continued cultural contribution."
          file="/certificates/Certificate-Poetry-Night-2.pdf"
        />
        <Item
          title="Poetry Night Participation (Edition III)"
          description="Certificate recognizing continued cultural contribution."
          file="/certificates/Certificate-Poetry-Night-3.pdf"
        />
        <Item
          title="Chess Tournament &quot;Elo Elevate&quot;"
          description="1st place of 29 participants in the international chess tournament."
          file="/certificates/Certificate Elo Elevate Express L.pdf"
        />
      </Section>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function Item({ title, description, file }) {
  return (
    <div className="border p-5 space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
      <a
        href={file}
        target="_blank"
        className="inline-block text-sm underline"
      >
        View / Download
      </a>
    </div>
  );
}
