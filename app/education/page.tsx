export default function Education() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6 max-w-3xl text-center">
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
  );
}
