import React, {useState, useEffect} from 'react';
import axios from 'axios';


const ClientEmail = () => {
    const [emails, setEmails] = useState([]);

    const fetchEmails = () => {
      axios.get('https://myportfolioserver-0ekq.onrender.com/api/v1/file/email')
        .then((res) => {
          setEmails(res.data);
        })
        .catch((err) => {
          console.error('Error fetching emails:', err);
        });
    };
  
    useEffect(() => {
      fetchEmails();
    }, []);
    return (
        <div className="container">
        <h2 className="text-3xl font-bold text-gray-800 mt-8">Emails</h2>
        <table className="email-table w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 font-bold text-gray-800">Name</th>
              <th className="px-4 py-2 bg-gray-200 font-bold text-gray-800">Subject</th>
              <th className="px-4 py-2 bg-gray-200 font-bold text-gray-800">Description</th>
              <th className="px-4 py-2 bg-gray-200 font-bold text-gray-800">Client Email</th>
              <th className="px-4 py-2 bg-gray-200 font-bold text-gray-800">Date</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <tr key={email._id}>
                <td className="border px-4 py-2">{email.name}</td>
                <td className="border px-4 py-2">{email.subject}</td>
                <td className="border px-4 py-2">{email.desc}</td>
                <td className="border px-4 py-2">{email.clientEmail}</td>
                <td className="border px-4 py-2">{new Date(email.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ClientEmail;