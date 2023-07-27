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
      <div className="dark:bg-black bg-white flex justify-center items-center gap-2" >
        <div className=" w-2/4 h-[500px]  bg-teal-700 mx-auto rounded shadow-orange-400">
          <form className='emailForm' onSubmit={submitHandler}>
            <h1>Send Email</h1>
            <div>
              <label for="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              ></input>
            </div>
            <div>
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
              ></input>
            </div>
            <div>
              <label for="message">Message</label>
              <textarea
                id="message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button disabled={loading} type="submit">
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
        <div className="socialLink w-1/3 h-[200px] bg-teal-800 mx-auto rounded shadow-orange-400 grid grid-cols-2 place-items-center items-center justify-items-center py-2 gap-3">
          <li>
            <FontAwesomeIcon icon={faInstagram} class="icon link-accent" />
            <a class="link link-accent" href="">Instagram</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} class="icon link-accent" />
            <a class="link link-accent" href="">Twitter</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} class="icon link-accent" />
            <a class="link link-accent" href="">Facebook</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} class="icon link-accent" />
            <a class="link link-accent" href="">Linkedin</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} class="icon link-accent" />
            <a class="link link-accent" href="">GitHub</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} class="icon link-accent" />
            <a class="link link-accent" href="">+88 01733624622</a>
          </li>
        </div>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default EmailSend;