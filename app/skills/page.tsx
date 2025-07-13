export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <ul className="list-disc list-inside max-w-3xl text-lg text-center">
        <li>Programming: Python, JavaScript, TypeScript</li>
        <li>Frameworks: Next.js, Node.js, Express</li>
        <li>Tools: MATLAB, TensorFlow, Git</li>
        <li>Databases: MongoDB, MySQL</li>
        <li>Other: Machine Learning, Signal Processing, Embedded Systems</li>
      </ul>
    </div>
  );
}