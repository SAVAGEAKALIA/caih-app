export default function Research() {
  return (
    <section className="research" id="research">
      <div className="container">
        <div className="research-inner">
          <div className="research-text fade-up">
            <div className="label label--light">Evidence &amp; Research</div>
            <h2>
              Implementation That <em>Generates Evidence</em>
            </h2>
            <p>
              CAIH generates peer-reviewed evidence from its own field work. Three research
              abstracts from implementation work in Anambra State have been accepted by leading
              global health conferences.
            </p>
            <p>
              Our Executive Director is a current PhD candidate at the School of Public Health,
              University of Port Harcourt — ensuring every CAIH programme is continuously informed
              by the latest evidence.
            </p>
            <a href="#contact" className="btn btn-outline" style={{ marginTop: '16px' }}>
              Collaborate on Research
            </a>
          </div>
          <div className="abstract-list fade-up">
            <div className="abstract-item">
              <div className="abstract-badge">International AIDS Society (IAS) · Accepted</div>
              <div className="abstract-title">
                Optimizing HIV Case Finding Through PHC Integration and Camp-Based Multi-Disease
                Screening in Hard-to-Reach Communities of Awka North LGA, Anambra State
              </div>
            </div>
            <div className="abstract-item">
              <div className="abstract-badge">Interest Conference · Accepted</div>
              <div className="abstract-title">
                Strengthening PHC and Community Structures to Improve ART Retention and Reduce
                HIV-Related Mortality in Remote Communities in Awka North, Anambra State
              </div>
            </div>
            <div className="abstract-item">
              <div className="abstract-badge">ICASA · Accepted</div>
              <div className="abstract-title">
                Identifying Implementation Gaps in HIV Pre-Exposure Prophylaxis Scale-Up in
                Anambra, South-East Region of Nigeria
              </div>
            </div>
            <div className="abstract-item" style={{ borderLeftColor: 'var(--xgold)' }}>
              <div className="abstract-badge" style={{ color: 'var(--xgold)' }}>
                PhD Research · University of Port Harcourt · Current
              </div>
              <div className="abstract-title">
                Prevalence and Determinants of Common Non-Communicable Diseases: A Comparative Study
                of HIV-Positive and HIV-Negative Adults in Anambra State, Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
