const programmes = [
  {
    icon: '🦠',
    iconBg: '#fdf0f7',
    label: 'Programme 01',
    title: 'HIV/AIDS Prevention & Care',
    description:
      'Camp-based community HIV testing using our proven PHC-integrated screening model. ART retention through differentiated service delivery, PrEP scale-up, PMTCT strengthening, and key population outreach.',
    tags: ['Case Finding', 'ART Retention', 'PrEP', 'PMTCT', 'Key Populations'],
  },
  {
    icon: '❤️',
    iconBg: '#fdf6e3',
    label: 'Programme 02',
    title: 'NCD Screening & Integrated Care',
    description:
      'Community NCD camps for hypertension, diabetes, and cardiovascular risk screening. Treatment linkage, integrated HIV-NCD care, and community health education informed by active PhD research.',
    tags: ['Hypertension', 'Diabetes', 'Screening', 'HIV-NCD Link'],
  },
  {
    icon: '👶',
    iconBg: '#fdf6e3',
    label: 'Programme 03',
    title: 'Maternal & Child Health',
    description:
      'Antenatal supplementation, ORS and zinc distribution, Vitamin A during MNCHW campaigns, safe motherhood referral through TBA networks, and HIV-exposed infant prophylaxis support.',
    tags: ['Antenatal Care', 'TBA Networks', 'Child Nutrition', 'PMTCT'],
  },
  {
    icon: '🏥',
    iconBg: '#f0e8f8',
    label: 'Programme 04',
    title: 'Health Systems Strengthening',
    description:
      'Capacity building of PHC staff, PPMVs, CHEWs, and community volunteers. Community Health Agent network across 21 LGAs. Multi-stakeholder coordination and health information platform.',
    tags: ['Training', 'CHAs', 'PHC Integration', 'RSSH'],
  },
  {
    icon: '🌍',
    iconBg: 'rgba(255,255,255,0.1)',
    label: 'Our Geography',
    title: 'Southeast Nigeria',
    description:
      'Priority: Awka North, Awka South, Oyi, and Njikoka LGAs — with established community networks scaling to all 21 LGAs and across Southeast Nigeria.',
    tags: ['Awka North', 'Awka South', 'Oyi LGA', 'Njikoka'],
    dark: true,
  },
];

export default function Programmes() {
  return (
    <section className="programmes" id="programmes">
      <div className="container">
        <div className="section-header fade-up">
          <div className="label label--gold">What We Do</div>
          <h2>Integrated Programme Areas</h2>
          <p>
            Four interconnected health areas delivered simultaneously — because the most vulnerable
            communities face overlapping challenges that single-disease programmes cannot solve.
          </p>
        </div>
        <div className="prog-grid">
          {programmes.map((prog, i) => (
            <div
              className="prog-card fade-up"
              key={i}
              style={
                prog.dark
                  ? { background: 'var(--deep)', borderColor: 'var(--deep)' }
                  : undefined
              }
            >
              <div className="prog-icon" style={{ background: prog.iconBg }}>
                {prog.icon}
              </div>
              <div
                className="label"
                style={prog.dark ? { color: 'rgba(255,255,255,0.5)' } : undefined}
              >
                {prog.label}
              </div>
              <h3 style={prog.dark ? { color: 'white' } : undefined}>{prog.title}</h3>
              <p style={prog.dark ? { color: 'rgba(255,255,255,0.7)' } : undefined}>
                {prog.description}
              </p>
              <div className="prog-tags">
                {prog.tags.map((tag, j) => (
                  <span
                    className="prog-tag"
                    key={j}
                    style={
                      prog.dark
                        ? {
                          borderColor: 'rgba(255,255,255,0.2)',
                          background: 'rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.6)',
                        }
                        : undefined
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
