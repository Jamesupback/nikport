import { useEffect } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    document.title = "Nikhila T | Portfolio";
  }, []);

  return (
    <div data-theme="halloween" className="min-h-screen">
      {/* Navigation */}
      <div className="navbar fixed top-0 z-50 bg-base-100 shadow-lg">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
      </div>

      <main className="container mx-auto px-4 pt-20">
        {/* Header Section */}
        <Header />

        <div className="divider"></div>

        {/* Education Section */}
        <Education />

        <div className="divider"></div>

        {/* Skills Section */}
        <Skills />

        <div className="divider"></div>

        {/* Projects Section */}
        <Projects />

        <div className="divider"></div>

        {/* Experience Section */}
        <Experience />

        <div className="divider"></div>

        {/* Contact Section */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}