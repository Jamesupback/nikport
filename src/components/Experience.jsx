import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Bachelor of Technology in Computer Science',
      company: 'College of Engineering, Cherthala, Alappuzha',
      duration: '2021 – 2025 (Expected Graduation)',
      details: [
        'Current CGPA: 6.99',
        'Relevant Coursework: Software Engineering, Data Structures, Algorithms, Mobile App Development, Database Management Systems',
      ],
    },
    {
      title: '12th Standard',
      company: 'Govt Boys Higher Secondary School, Manjeri',
      duration: '2019 – 2021',
      details: [
        'Kerala Board of Secondary Education',
        'Percentage: 95.6%',
      ],
    },
    {
      title: '10th Standard',
      company: 'Govt Boys Higher Secondary School, Manjeri',
      duration: '2019',
      details: [
        'Kerala Board of Public Examination',
        'Percentage: 93.2%',
      ],
    },
    {
      title: 'Flutter Developer Intern',
      company: 'Edureka, Kochi, Ernakulam',
      duration: 'May 17, 2023 – May 31, 2023',
      details: [
        'Developed and maintained mobile applications using Flutter.',
        'Collaborated with a team of developers to design and implement new features.',
        'Conducted testing and debugging to ensure app functionality and performance.',
        'Participated in code reviews and contributed to improving code quality.',
      ],
    },
    {
      title: 'Data Science and Machine Learning Intern',
      company: 'Techmaghi, Bangalore',
      duration: 'May 13, 2023 – May 19, 2023',
      details: [
        'Studied data collection from various resources.',
        'Enhanced knowledge in the field of data science and machine learning.',
        'Developed and tested data implementations on platforms like Jupyter.',
      ],
    },
  ];

  return (
    <section className="p-8 bg-base-200">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="card shadow-md bg-base-100">
            <div className="card-body">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="italic">{exp.company}</p>
              <p className="text-sm">{exp.duration}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
