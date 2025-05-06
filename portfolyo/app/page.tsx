"use client";

import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "AI-Powered Product Support Chat Platform",
      description: "A user-friendly application built entirely on the AWS ecosystem, enabling seamless interaction with an AI to ask questions about purchased products and receive accurate, real-time responses.",
      images: [
        { id: 1, url: "/images/project1-1.jpg", alt: "Project Image 1" },
        { id: 2, url: "/images/project1-2.jpg", alt: "Project Image 2" },
        { id: 3, url: "/images/project1-3.jpg", alt: "Project Image 3" },
        { id: 4, url: "/images/project1-4.jpg", alt: "Project Image 4" }
      ],

    }
  ];

  return (
    <>
      <style jsx global>{`
        :root {
          --background: #F2EFE7 !important;
          --foreground: #006A71 !important;
          --background-secondary: #9ACBD0 !important;
          --accent-light: #9ACBD0 !important;
          --accent: #48A6A7 !important;
        }
        
        body {
          background-color: #F2EFE7 !important;
          color: #006A71 !important;
        }
        
        .bg-secondary {
          background-color: #9ACBD0 !important;
        }
        
        .text-accent {
          color: #48A6A7 !important;
        }
        
        .text-main {
          color: #006A71 !important;
        }
        
        .border-accent-light\/30 {
          border-color: rgba(154, 203, 208, 0.3) !important;
        }
        
        /* Karanlık tema için değişkenler - html.dark seçicisi ile */
        html.dark {
          --background: #0f172a !important;
          --foreground: #f8fafc !important;
          --background-secondary: #1e293b !important;
          --accent-light: #94a3b8 !important;
          --accent: #60a5fa !important;
        }
        
        /* Karanlık tema için stil geçersiz kılmaları */
        html.dark body {
          background-color: #0f172a !important;
          color: #f8fafc !important;
        }
        
        html.dark .bg-secondary {
          background-color: #1e293b !important;
        }
        
        html.dark .text-main {
          color: #f8fafc !important;
        }
        
        html.dark .text-accent {
          color: #60a5fa !important;
        }
        
        html.dark .border-accent-light\/30 {
          border-color: rgba(148, 163, 184, 0.3) !important;
        }
      `}</style>
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent-light dark:border-gray-800">
                {/* Profile photo */}
                <Image
                  src="/images/profile/profile.jpg"
                  alt="Ismail Bakır Profile"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Fallback if image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-light to-accent flex items-center justify-center text-white text-3xl font-bold opacity-0 hover:opacity-100 transition-opacity">
                  IB
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-main">
                I&apos;m <span className="text-accent dark:text-blue-400">Ismail Bakir</span>
              </h1>
              <p className="text-xl text-main">
                I am a third-year student at Erciyes University, focused on cloud computing and backend development. I have actively engaged in projects within these domains and am committed to furthering my expertise and advancing confidently in this field.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-secondary dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-accent dark:text-blue-400 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-main dark:text-white">Location</h3>
                  <p className="text-main dark:text-gray-300">Kayseri, Turkey</p>
                </div>

                <div className="bg-secondary dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-accent dark:text-blue-400 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-main dark:text-white">Education</h3>
                  <p className="text-main dark:text-gray-300">Erciyes University<br />Computer Engineering, 2026</p>
                </div>

                <div className="bg-secondary dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-accent dark:text-blue-400 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-main dark:text-white">Interests</h3>
                  <p className="text-main dark:text-gray-300">AWS, Node.js, Python, Linux, Jenkins
                    GitHub Actions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 mt-20 border-t border-accent-light/30 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center text-main">My Projects</h2>
          <p className="text-xl text-main mb-12 text-center max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills and interests.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t border-accent-light/30 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center text-main">Contact</h2>
          <p className="text-xl text-main mb-8 text-center">
            Feel free to reach out using any of the methods below.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-main">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-accent dark:text-blue-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-main dark:text-white">Email</h4>
                    <a href="mailto:ismailbkr@icloud.com" className="text-main hover:text-accent dark:text-gray-300 dark:hover:text-blue-400">
                      derdabkr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent dark:text-blue-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-main dark:text-white">LinkedIn</h4>
                    <a href="https://linkedin.com/in/ismail-bakir/" target="_blank" rel="noopener noreferrer" className="text-main hover:text-accent dark:text-gray-300 dark:hover:text-blue-400">
                      linkedin.com/ismailbakir
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent dark:text-blue-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-main dark:text-white">GitHub</h4>
                    <a href="https://github.com/ismailbkr" target="_blank" rel="noopener noreferrer" className="text-main hover:text-accent dark:text-gray-300 dark:hover:text-blue-400">
                      github.com/ismailbkr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
