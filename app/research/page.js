export default function Research() {
  return (
    <section className="space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">Research & Publications</h1>

      <Publication
        title="Sustainable transport and urban mobility. Kazakhstan's car-dependent urban design contrasts with Denmark's investment in bicycle and public transport infrastructure"
        meta="Published (2025) — ResearchGate"
        link="https://www.researchgate.net/publication/389476766"
      >
        A comparative public policy analysis examining how transport infrastructure
        choices influence sustainability outcomes, urban livability, and SDG-aligned
        urban development.
      </Publication>

      <Publication
        title="Ban on Electronic Cigarettes in Kazakhstan in 2024"
        meta="Published (2024) — SSRN"
        link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5161266"
      >
        An analysis of Kazakhstan’s regulatory approach to electronic cigarettes,
        assessing public health policy effectiveness, governance challenges, and
        regulatory design.
      </Publication>

      <Publication
        title="Examining the Internal and External Environments of the Ministry of Foreign Affairs of Kazakhstan: An Organizational Theory Perspective"
        meta="Published (2025) — SSRN"
        link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5978714"
      >
        In this research paper, the Ministry of Foreign Affairs of the Republic of Kazakhstan (MFA KZ) is analyzed in terms of the organizational theory and the design of a public organization. The paper examines the congruence of the mission, goals, structure, and internal processes of the Ministry with theoretical frameworks of service technologies, framework of Perrow, interdependence of Thompson, sociotechnical systems and contingency theory.
      </Publication>
    </section>
  );
}

function Publication({ title, meta, link, children }) {
  return (
    <div className="border p-5 space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{meta}</p>
      <p className="text-sm text-gray-700">{children}</p>
      <a
        href={link}
        target="_blank"
        className="underline text-sm"
      >
        View publication
      </a>
    </div>
  );
}
