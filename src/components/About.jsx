export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-up">
            <div className="label label--gold">About CAIH</div>
            <h2>New Structure.<br /><em>Proven Experience.</em></h2>
            <div className="formerly-box">
              <p>
                <strong>Formerly Irene International Relief Foundation</strong> — renamed to Centre
                for Achieving Integrated Healthcare (CAIH) on 14th October 2024. Our mission, our
                community networks, and our commitment to Southeast Nigeria remain unchanged.
              </p>
            </div>
            <p>
              CAIH is a registered Nigerian NGO headquartered in Ewet Housing Estate, Uyo, Akwa
              Ibom State, implementing integrated community health programmes across Southeast
              Nigeria. We combine HIV prevention, non-communicable disease management, maternal and
              child health, and health systems strengthening into a single, efficient,
              community-embedded model.
            </p>
            <p>
              Our founder brings over 20 years of progressive public health experience, including 6
              years of direct Global Fund programme implementation in Anambra State — leading
              multi-disciplinary cross-sectional teams to achieve results accepted by three
              international research conferences.
            </p>
            <div className="about-highlight">
              <p>
                <strong>Current PhD Research:</strong>{' '}
                <em>
                  "Prevalence and Determinants of Common Non-Communicable Diseases: A Comparative
                  Study of HIV-Positive and HIV-Negative Adults in Anambra State, Nigeria"
                </em>{' '}
                — University of Port Harcourt, School of Public Health.
              </p>
            </div>
          </div>
          <div className="about-cards">
            <MissionVisionValues />
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  return (
    <div className="mvv-grid fade-up">
      <div className="mvv-card mvv-card--mission">
        <div className="mvv-label">Mission</div>
        <h3>Our Mission</h3>
        <p>
          To improve health outcomes by delivering integrated, evidence-based community health
          programs that are accessible, affordable and sustainable for every population — especially
          those hardest to reach.
        </p>
      </div>
      <div className="mvv-card mvv-card--vision">
        <div className="mvv-label">Vision</div>
        <h3>Our Vision</h3>
        <p>
          To be the leading community-embedded integrated health organization in Nigeria where no
          community is too remote, no condition too neglected and no person is left behind.
        </p>
      </div>
      <div className="mvv-card mvv-card--values">
        <div className="mvv-label">Values</div>
        <h3>Our Values</h3>
        <div className="values-list">
          <span>Evidence-Driven</span>
          <span>Community-First</span>
          <span>Accountable</span>
          <span>Inclusive</span>
          <span>Sustainable</span>
          <span>Collaborative</span>
        </div>
      </div>
    </div>
  );
}
