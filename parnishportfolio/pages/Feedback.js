import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your Email.js service ID
    const serviceId = 'service_vb0kd4x';
    // Your Email.js template ID
    const templateId = 'template_3y3tuib';
    // Your Email.js user ID
    const userId = '-dejrnA49pwgNCDQM';

    // Send the form data as an email
    emailjs.send(serviceId, templateId, {
      from_name: name,
      from_email: email,
      message,
    }, userId)
      .then(() => {
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email. Please try again later.');
      });
  };

  return (
<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
  <div className="mb-4">
  <label className="block mb-2 text-gray-800">
    Name:
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mt-1 rounded-md border border-green-300 focus:outline-none focus:ring focus:ring-blue-200" />
  </label>
</div>
<div className="mb-4">
  <label className="block mb-2 text-gray-800">
    Your Email:
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mt-1 rounded-md border border-green-300 focus:outline-none focus:ring focus:ring-blue-200" />
  </label>
</div>

  <div className="mb-4">
    <label className="block mb-2 text-gray-800">
      Message:
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 mt-1 rounded-md border border-green-300 focus:outline-none focus:ring focus:ring-blue-200 resize-none" />
    </label>
  </div>
  <div className="flex justify-center">
    <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200">Submit</button>
  </div>
</form>


  );
}
