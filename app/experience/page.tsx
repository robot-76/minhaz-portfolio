export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6 max-w-3xl text-center">
        <div>
          <h3 className="text-xl font-semibold">Research Assistant, Kookmin University</h3>
          <p>2023 - Present</p>
          <p>Conducted research on Optical Wireless Communication and Machine Learning applications.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Intern, Grameenphone Ltd.</h3>
          <p>2021 - 2022</p>
          <p>Assisted in network optimization and data analysis for telecommunications systems.</p>
        </div>
      </div>
    </div>
  );
}