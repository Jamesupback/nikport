export default function Projects() {
    const projects = [
      {
        title: "Public Service Assistance Portal",
        duration: "2 months",
        description: "Developed a fitness database management system for public service information management.",
        tech: ["MySQL"],
        image: "https://cdn.unicreds.com/blog/wp-content/uploads/2021/07/09192719/Untitled-design-26.png"
      },
      {
        title: "Intrusion Detection System",
        duration: "1 month",
        description: "Machine learning model to detect input data infusion.",
        tech: ["Python"],
        image: "https://www.csoonline.com/wp-content/uploads/2023/06/eye-binary-abstract-100749562-orig.jpg?quality=50&strip=all&w=1024"
      },
      {
        title: "Hand Gesture Control System",
        duration: "2 months",
        description: "OpenCV-based volume and brightness control using hand gestures.",
        tech: ["Python", "OpenCV"],
        image: "https://static.vecteezy.com/system/resources/previews/000/206/049/non_2x/hand-gestures-vector.jpg"
      }
    ];
  
    return (
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-4 pt-4">
                <img src={project.image} alt="Project" className="rounded-xl h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="text-sm opacity-75">{project.duration}</p>
                <p>{project.description}</p>
                <div className="card-actions justify-end mt-4">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="badge badge-outline">{tech}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }