export default function Education() {
    const education = [
      {
        degree: "BTech Computer Science",
        institution: "College of Engineering, Cherthala",
        duration: "2021 – 2025",
        details: ["Current CGPA: 6.99", "Relevant Coursework: Software Engineering, Data Structures, Algorithms"]
      },
      {
        degree: "12th Standard",
        institution: "Govt Boys HSS, Manjeri",
        duration: "2019 – 2021",
        details: ["Percentage: 95.6%"]
      }
    ];
  
    return (
      <section id="education" className="py-12">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">{edu.degree}</h3>
                <p className="text-lg font-semibold">{edu.institution}</p>
                <p className="text-sm opacity-75">{edu.duration}</p>
                <div className="divider my-2"></div>
                <ul className="list-disc pl-6">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="mb-2">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }