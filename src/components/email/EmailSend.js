// import './App.css';
import { useState } from 'react';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faSoccerBall, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './email.css'
import { FaGithub } from 'react-icons/fa';

function EmailSend() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error('Please fill email, subject and message');
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`http://localhost:8080/api/email`, {
        email,
        subject,
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };
  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="min-h-screen py-8 px-4 flex flex-col items-center justify-around md:flex-row md:justify-center">
      <div className="email-div-bg md:mr-4 md:w-[400px] rounded-lg shadow-lg p-6">
        <form className="emailForm" onSubmit={submitHandler}>
          <h1 className="text-3xl font-bold text-white mb-4">Send Email</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-gray-300">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-white border border-gray-300 focus:ring focus:ring-blue-200 transition duration-300 ease-in-out text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-bold text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full rounded-md bg-white border border-gray-300 focus:ring focus:ring-blue-200 transition duration-300 ease-in-out text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold text-gray-300">Message</label>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md bg-white border border-gray-300 focus:ring focus:ring-blue-200 transition duration-300 ease-in-out text-gray-800"
              required
            />
          </div>
          <div>
            <button
              disabled={loading}
              type="submit"
              className={`w-full bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 ${loading ? 'opacity-70 cursor-wait' : ''}`}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      <div className="socialLink email-wrap-bg mt-4 md:mt-0 md:w-[400px] rounded-lg shadow-lg flex flex-wrap justify-center items-center gap-3 p-4">
        <li>
          <a href="#" className="text-2xl text-blue-600 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="ml-2">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-2xl text-blue-400 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="ml-2">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-2xl text-blue-800 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faFacebook} />
            <span className="ml-2">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-2xl text-blue-500 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="ml-2">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-2xl text-gray-800 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faGithub} />
            <span className="ml-2">GitHub</span>
          </a>
        </li>
        <li>
          <a href="tel:+8801733624622" className="text-2xl text-green-600 transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faPhone} />
            <span className="ml-2">+88 01733624622</span>
          </a>
        </li>
      </div>
    </div>
  );
      <br />
      <br />
    </div>
  );
}

export default EmailSend;