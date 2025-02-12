import niga from '../../public/niga.jpg';
export default function Header() {
    return (
      <section id="about" className="py-12">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img 
              src={niga}
              alt="Profile" 
              className="rounded-xl w-64 h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-4xl mb-4">Nikhila T</h1>
            <p className="text-lg mb-4">
              Motivated and detail-oriented final year BTech Computer Science student. 
              Skilled in machine learning model creation, software development basics, 
              problem-solving, and teamwork.
            </p>
            <div className="space-y-2">
              <p>📞 9744948912</p>
              <p>📧 nikhilat028@gmail.com</p>
              <p>📍 Pulpatta (p.o), Manjeri, Malappuram</p>
              <div className="flex gap-4 mt-4">
                <a href="https://linkedin.com/in/nikhila-t-910266227" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  LinkedIn
                </a>
                <a href="https://github.com/nikhila975" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }