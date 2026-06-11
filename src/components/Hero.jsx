import { LOGO_SRC } from '../assets/logoData';

export default function Hero({ onOpenPartner }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="container">
        <div className="hero-content">
          <img src={LOGO_SRC} alt="CAIH" className="hero-logo" />
          <div className="hero-formerly">
            <span>Formerly known as &nbsp;</span>
            <strong>Irene International Relief Foundation</strong>
          </div>
          <div className="hero-tag">
            <div className="hero-tag-dot"></div>
            <span>Registered NGO &nbsp;·&nbsp; Southeast Nigeria &nbsp;·&nbsp; Est. 2024</span>
          </div>
          <h1>Achieving Health<br />for <em>Every Community</em></h1>
          <p className="hero-sub">
            An integrated community health organisation delivering HIV prevention, NCD screening,
            maternal care, and health systems strengthening across Southeast Nigeria — where no
            community is too remote and no person left behind.
          </p>
          <div className="hero-actions">
            <a href="#programmes" className="btn btn-primary">Our Programmes</a>
            <a href="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); onOpenPartner(); }}>
              Partner With Us
            </a>
          </div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stats-inner">
          <div className="hero-stat">
            <div className="hero-stat-val">&gt;100<span>%</span></div>
            <div className="hero-stat-lbl">HIV Case Finding Increase<br />Awka North LGA</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">94<span>%</span></div>
            <div className="hero-stat-lbl">ART Retention Rate<br />Hard-to-Reach Communities</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">3</div>
            <div className="hero-stat-lbl">International Research<br />Abstracts Accepted</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">6<span>+</span></div>
            <div className="hero-stat-lbl">Years Global Fund<br />Implementation Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
