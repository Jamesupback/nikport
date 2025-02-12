import React from 'react';

function Skills() {
  const skills = [
    'Java',
    'Python',
    'C Programming',
    'HTML',
    'MS Office (PowerPoint, Word)',
    'Google Drive (Docs, Sheets)',
    'MySQL',
    'Machine Learning',
    'Problem-solving',
    'Teamwork',
    'Communication',
  ];

  return (
    <section className="p-8 bg-base-100">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="card shadow-md bg-base-200">
            <div className="card-body">
              <p>{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
