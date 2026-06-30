import { useState } from 'react';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiRequest } from '../../Pages/utils/api';
import './email.css';

function EmailSend() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      subject,
      desc: message,
      clientEmail: email,
    };

    apiRequest({ url: '/messages', method: 'POST', data: formData })
      .then(() => {
        setLoading(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        toast.success('Message sent successfully.');
      })
      .catch(() => {
        setLoading(false);
        toast.error('Unable to send message right now.');
      });
  };

  const links = [
    { href: 'https://www.instagram.com/robiussanirazu/', icon: faInstagram, label: 'Instagram' },
    { href: 'https://twitter.com/RobiulHasanRazu', icon: faTwitter, label: 'Twitter' },
    { href: 'https://www.facebook.com/profile.php?id=100072162730034', icon: faFacebook, label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/robius-sani-raju-2944a2240/', icon: faLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/Raju1-Ahmed', icon: faGithub, label: 'GitHub' },
    { href: 'tel:+8801733624622', icon: faWhatsapp, label: '+88 01733624622' },
  ];

  return (
    <section id='contact' className="section-shell section-block">
      <ToastContainer position="bottom-center" limit={1} />
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Let&apos;s talk about a portfolio site, client work, or a full-stack product idea.</h2>
        <p>Use the form or any of the direct links. Messages are stored through the backend so they can also be reviewed from the admin dashboard.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-panel">
          <form className="emailForm" onSubmit={submitHandler}>
            <h3>Send a message</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold text-gray-300">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold text-gray-300">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-bold text-gray-300">Subject</label>
              <input
                value={subject}
                type="text"
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold text-gray-300">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                disabled={loading}
                type="submit"
                className={`w-full ${loading ? 'opacity-70 cursor-wait' : ''}`}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>

        <div className="contact-panel contact-panel--links">
          <h3>Direct links</h3>
          <ul className="socialLink">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <FontAwesomeIcon icon={link.icon} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="contact-note">
            <strong>Best for:</strong>
            <p>Portfolio redesigns, CRUD dashboards, React interfaces, and Express or Mongo-backed app work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailSend;
