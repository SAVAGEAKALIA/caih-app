export default function Partner({ onOpenDonate, onOpenPartner }) {
  return (
    <section className="partner" id="partner">
      <div className="container">
        <div className="section-header fade-up">
          <div className="label label--gold">Get Involved</div>
          <h2>Support CAIH's Work</h2>
          <p>
            Whether you are a donor, a research partner, or a government agency — there is a place
            for you in CAIH's mission across Southeast Nigeria.
          </p>
        </div>
        <div className="partner-grid">
          <div className="partner-card partner-card--donate fade-up">
            <div className="label label--light">Donate</div>
            <h3>Fund Community Health</h3>
            <p>
              Your support directly funds community health camps, Community Health Agent stipends,
              essential medicine distribution, and provider training across Southeast Nigeria.
            </p>
            <div className="partner-options">
              <div className="partner-option">
                Fund one community health camp — reaching 200 people
              </div>
              <div className="partner-option">
                Sponsor a Community Health Agent for one year
              </div>
              <div className="partner-option">
                Fund HIV self-test kits for 100 community members
              </div>
              <div className="partner-option">
                Support NCD screening equipment for one LGA
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={onOpenDonate}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Make a Donation
            </button>
            <div className="bank-details">
              <div className="label" style={{ marginBottom: '10px', color: 'var(--muted)' }}>
                Bank Transfer Details
              </div>
              <div className="bank-row">
                <span className="key">Account Name</span>
                <span className="val">Centre for Achieving Integrated Healthcare</span>
              </div>
              <div className="bank-row">
                <span className="key">Bank</span>
                <span className="val">[Your Bank Name]</span>
              </div>
              <div className="bank-row">
                <span className="key">Account No.</span>
                <span className="val">[Your Account Number]</span>
              </div>
              <div className="bank-row">
                <span className="key">Contact After Transfer</span>
                <span className="val">chidimairene@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="partner-card partner-card--collab fade-up">
            <div className="label label--gold">Partner</div>
            <h3>Collaborate With Us</h3>
            <p>
              CAIH welcomes implementing partnerships, research collaborations, government programme
              integration, and donor funding partnerships across Southeast Nigeria.
            </p>
            <div className="collab-tags">
              <span className="collab-tag">Donor / Funder</span>
              <span className="collab-tag">Research Partner</span>
              <span className="collab-tag">Government Agency</span>
              <span className="collab-tag">Global Fund PR / SR</span>
              <span className="collab-tag">NGO Network</span>
              <span className="collab-tag">Academic Institution</span>
            </div>
            <button
              className="btn"
              onClick={onOpenPartner}
              style={{
                background: 'var(--deep)',
                color: 'white',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
