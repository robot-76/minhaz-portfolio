export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <img src="/profile.jpg" alt="Profile" className="w-8 h-28 rounded-full mb-4" />
      <p className="text-lg max-w-2xl text-center">
        I am Md Minhazur Rahman, a graduate student in Electronics Engineering at Kookmin University, Seoul, South Korea. My research focuses on Optical Wireless Communication, Machine Learning, and Smart Energy Management.
      </p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="mailto:minhaz.eee.97@gmail.com" className="text-blue-600 hover:underline">Email</a>
        <a href="https://scholar.google.com/citations?user=LnAi7u4AAAAJ&hl=en" target="_blank" className="text-blue-600 hover:underline">Google Scholar</a>
        <a href="https://www.researchgate.net/profile/Md-Minhazur-Rahman-5?ev=hdr_xprf" target="_blank" className="text-blue-600 hover:underline">ResearchGate</a>
        <a href="https://www.linkedin.com/in/md-minhazur-rahman-468b60177/" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </div>
  );
}
