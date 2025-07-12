'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  url?: string;
}

export default function Home() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filterYear, setFilterYear] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  // Fetch publications from backend
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/publications`)
      .then(res => res.json())
      .then(data => setPublications(data))
      .catch(err => console.error('Error fetching publications:', err));
  }, []);

  // Handle contact form submission
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

  // Filter publications by year and keyword
  const filteredPublications = publications.filter(pub => {
    const matchesYear = filterYear === 'all' || pub.year === filterYear;
    const matchesKeyword = searchKeyword === '' || 
      pub.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesYear && matchesKeyword;
  });

  return (
    <div className="bg-gray-100 min-h-screen font-sans">

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <p className="text-lg max-w-2xl mx-auto text-center">
            I am Md Minhazur Rahman, a graduate student in Electronics Engineering at Kookmin University, Seoul, South Korea. My research focuses on Optical Wireless Communication, Machine Learning, and Smart Energy Management.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="mailto:minhaz.eee.97@gmail.com" className="text-blue-600 hover:underline">Email</a>
            <a href="https://scholar.google.com/citations?user=LnAi7u4AAAAJ&hl=en" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Md-Minhazur-Rahman-5?ev=hdr_xprf" target="_blank" rel="noopener" className="text-blue-600 hover:underline">ResearchGate</a>
            <a href="www.linkedin.com/in/md-minhazur-rahman-468b60177/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold">Kookmin University</h3>
              <p>Masters of Science in Electronics Engineering</p>
              <p>Current CGPA: 4.31/4.5</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Khulna University of Engineering & Technology</h3>
              <p>Bachelor of Science in Electrical and Electronic Engineering</p>
              <p>CGPA: 3.67/4.00</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sirajganj Government College</h3>
              <p>Higher Secondary Certificate</p>
              <p>CGPA: 5.00/5.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Research Interests</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg">
            <li>Optical Wireless Communication (OWC)</li>
            <li>Optical Camera Communication (OCC)</li>
            <li>Orthogonal Frequency Division Multiplexing (OFDM)</li>
            <li>MIMO in Wireless Communication</li>
            <li>On-chip Antenna System</li>
            <li>Deep Learning</li>
            <li>Machine Learning</li>
            <li>Smart Energy Management</li>
            <li>Energy Efficiency</li>
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Achievements & Certifications</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg">
            <li>Graduate Scholarship: Excellent Researcher Scholarship, Kookmin University</li>
            <li>Research Assistantship: WIComAI Lab, Seoul, South Korea</li>
            <li>Education Board Scholarship: Rajshahi board for H.S.C-2017, S.S.C-2015, J.S.C-2012</li>
          </ul>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Publications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <div>
                <label htmlFor="yearFilter" className="block text-white">Filter by Year:</label>
                <select
                  id="yearFilter"
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="p-2 border rounded bg-white text-black"
                >
                  <option value="all">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              <div>
                <label htmlFor="searchKeyword" className="block text-white">Search by Keyword:</label>
                <input
                  id="searchKeyword"
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Search title, authors, or journal"
                  className="w-full p-2 border rounded bg-white text-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPublications.length > 0 ? (
                filteredPublications.map(pub => (
                  <div key={pub.id} className="p-4 bg-gray-100 rounded-lg shadow-lg">
                    <p>{pub.authors}, "{pub.title}," <i>{pub.journal}</i>, {pub.year}.</p>
                    {pub.url && (
                      <a href={pub.url} target="_blank" className="text-blue-600 hover:underline">Read More</a>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-center">No publications found.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Research Experience</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold">Graduate Research Assistant, WIComAI Lab</h3>
              <p>2023 - Present</p>
              <ul className="list-disc list-inside">
                <li>Developed an OCC system with OFDM modulation and UNet-based equalizer.</li>
                <li>Implemented a secure HIT framework with TCN-GRU-Attention model.</li>
                <li>Designed an IoT platform for environmental monitoring.</li>
                <li>Proposed a hybrid RNN-CNN model for battery SoC estimation.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Undergraduate Project and Thesis, KUET</h3>
              <p>2018 - 2023</p>
              <ul className="list-disc list-inside">
                <li>Developed a webcam-based OCC system using Manchester modulation.</li>
                <li>Designed an MPPT solar charge controller with Arduino Nano.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="max-w-3xl mx-auto">
            <p><strong>Project & Leadership:</strong> Led a group of students research team for a Military drone OCC project.</p>
            <p><strong>Programming Languages:</strong> Python, C, C++</p>
            <p><strong>Machine Learning Frameworks:</strong> Tensorflow, Keras, Scikit-learn, PyTorch</p>
            <p><strong>Tools:</strong> Jupyter Notebook, VS Code, Google Colab, GitHub</p>
            <p><strong>Design and Simulation:</strong> CST Studio Suite, Cadence Virtuoso, Matlab, Simulink, NI Labview, Proteus, Visio, Arduino IDE, EasyEDA, ModelSim, PSpice, AutoCAD Basic</p>
            <p><strong>Development Kits:</strong> Arduino Mega/Uno/Nano, Raspberry Pi, Jetson Nano</p>
            <p><strong>Languages:</strong> English, Bangla</p>
            <p><strong>Additional Skills:</strong> Project Management, Public Speaking, LaTeX, MS Office, Google Docs, Security</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block">Name</label>
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
              <label htmlFor="email" className="block">Email</label>
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
              <label htmlFor="message" className="block">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-2 border rounded"
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
            {submitStatus && <p className="text-center">{submitStatus}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4">
        <p>© 2025 Md Minhazur Rahman. All rights reserved.</p>
      </footer>
    </div>
  );
}
