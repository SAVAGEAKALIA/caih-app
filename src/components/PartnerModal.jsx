import { useState } from 'react';

export default function PartnerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    organisation: '',
    type: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    alert(
      "Thank you for your partnership enquiry!\n\nThe CAIH team will be in touch within 48 hours.\nEmail: chidimairene@gmail.com"
    );
    setFormData({ organisation: '', type: '', email: '', description: '' });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      id="partnerModal"
      onClick={handleOverlayClick}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="label label--gold">Collaborate</div>
        <h3>Partner With CAIH</h3>
        <p>
          We welcome implementing partnerships, research collaborations, government integration, and
          donor funding for our programmes across Southeast Nigeria.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="partner-org">Organisation Name</label>
            <input
              id="partner-org"
              type="text"
              name="organisation"
              placeholder="Your organisation"
              value={formData.organisation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="partner-type">Partnership Type</label>
            <select
              id="partner-type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select partnership type</option>
              <option>Donor / Grant Funder</option>
              <option>Global Fund Principal Recipient (Sub-Recipient)</option>
              <option>Research / Academic Collaboration</option>
              <option>Government Programme Integration</option>
              <option>NGO Network / Consortium</option>
              <option>Technical Assistance Provider</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="partner-email">Contact Email</label>
            <input
              id="partner-email"
              type="email"
              name="email"
              placeholder="your@organisation.org"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="partner-desc">Brief Description</label>
            <textarea
              id="partner-desc"
              name="description"
              placeholder="Describe how you would like to collaborate with CAIH..."
              style={{ minHeight: '80px' }}
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="form-submit">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
