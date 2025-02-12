import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-10 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          {/* Contact Information */}
          <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl mb-8 lg:mb-0">
            <div className="card-body">
              <h3 className="text-2xl font-semibold mb-4">Nikhila T</h3>
              <p className="mb-2">
                <strong>Address:</strong> Thiruvaloor Illam, Pulpatta (P.O), Manjeri, Malappuram
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> <a href="tel:+919744948912" className="text-blue-500">+91 97449 48912</a>
              </p>
              <p className="mb-2">
                <strong>Email:</strong> <a href="mailto:nikhilat028@gmail.com" className="text-blue-500">nikhilat028@gmail.com</a>
              </p>
              <p className="mb-2">
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nikhila-t-910266227" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/nikhila-t-910266227</a>
              </p>
              <p>
                <strong>GitHub:</strong> <a href="https://github.com/nikhila975" className="text-blue-500" target="_blank" rel="noopener noreferrer">github.com/nikhila975</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <form>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input type="text" placeholder="Enter your name" className="input input-bordered" />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input type="email" placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered" placeholder="Enter your message"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
