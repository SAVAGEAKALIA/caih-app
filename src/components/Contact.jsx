import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "7325a99d-7eae-43df-a82f-e9c64a651b97",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', category: '', message: '' });
        // Automatically hide success message after 6 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 6000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info fade-up">
            <div className="label label--gold">Contact</div>
            <h2>Get in Touch With CAIH</h2>
            <p>
              We welcome enquiries from donors, government partners, research institutions,
              implementing organisations, and community stakeholders across Southeast Nigeria and
              beyond.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Headquarters</div>
                  <div className="contact-item-val">
                    Ewet Housing Estate, Uyo
                    <br />
                    Akwa Ibom State, Nigeria
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🌍</div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Implementation Area</div>
                  <div className="contact-item-val">Southeast Nigeria</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-val">
                    +234 802 579 9448
                    <br />
                    +234 906 753 9509
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-val">chidimairene@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">👤</div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Executive Director</div>
                  <div className="contact-item-val">
                    Chidinma Irene Onyeibor
                    <br />
                    <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 400 }}>
                      PhD Candidate · MSc · B.Pharm · PSN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form fade-up" onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="form-success-banner">
                <span>✓</span> Message sent successfully! We will respond within 48 hours.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-error-banner">
                <span>⚠️</span> Could not send message. Please fill all fields and try again, or email chidimairene@gmail.com
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-category">I am a...</label>
              <select
                id="contact-category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select your category</option>
                <option>Donor / Funder</option>
                <option>Government Agency</option>
                <option>Research / Academic Partner</option>
                <option>Implementing Organisation / NGO</option>
                <option>Global Fund Principal Recipient</option>
                <option>Community Member</option>
                <option>Media / Press</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us how you would like to work with CAIH..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className="form-note">We respond within 48 hours on business days.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
