import React from "react";
import { Heebo } from "next/font/google";
const heebo = Heebo({subsets:['latin']})

const ContactForm: React.FC = () => {
  return (
    <section className={`${heebo.className} py-12`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s work together</h2>
            <p className="text-gray-700 mb-6">
            I&apos;m always excited to collaborate on meaningful projects. Whether you have a unique idea, need assistance with development, or just want to connect, feel free to reach out. Let&apos;s create something amazing together!
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-md">
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type your message here"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-myButton text-white py-2 px-4 rounded-md hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
