'use client';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setSubmitStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('Failed to send message.');
      }
    } catch (err) {
      setSubmitStatus('Error sending message.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
        <div>
          <label htmlFor="name" className="block text-center">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-center">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-center">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
          Send Message
        </button>
        {submitStatus && <p className="text-center">{submitStatus}</p>}
      </form>
    </div>
  );
}