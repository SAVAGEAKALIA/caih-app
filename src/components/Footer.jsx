import { LOGO_SRC } from '../assets/logoData';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src={LOGO_SRC} alt="CAIH Logo" className="footer-logo" />
            <div className="footer-brand-name">Centre for Achieving Integrated Healthcare</div>
            <div className="footer-formerly">Formerly Irene International Relief Foundation</div>
            <div className="footer-brand-tag">
              CAIH · Registered NGO · Est. 2024 · Southeast Nigeria
            </div>
            <p className="footer-desc">
              An integrated community health organisation delivering HIV prevention, NCD screening,
              maternal and child health, and health systems strengthening across Southeast Nigeria.
            </p>
          </div>
          <div className="footer-col">
            <h4>Programmes</h4>
            <ul>
              <li>
                <a href="#programmes">HIV/AIDS Prevention &amp; Care</a>
              </li>
              <li>
                <a href="#programmes">NCD Screening</a>
              </li>
              <li>
                <a href="#programmes">Maternal &amp; Child Health</a>
              </li>
              <li>
                <a href="#programmes">Health Systems</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Organisation</h4>
            <ul>
              <li>
                <a href="#about">About CAIH</a>
              </li>
              <li>
                <a href="#research">Research</a>
              </li>
              <li>
                <a href="#impact">Our Impact</a>
              </li>
              <li>
                <a href="#partner">Partner With Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2024–2026 Centre for Achieving Integrated Healthcare (CAIH). All rights reserved.
          </div>
          <div className="footer-reg">
            Registered NGO · Corporate Affairs Commission · Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
}
