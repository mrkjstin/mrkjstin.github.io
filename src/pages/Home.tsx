import { useState, useEffect } from "react"

const Home = () => {
  const fullName = "Mark Justin Dinglasan"

  const titles = [
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "Software Engineer",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <div className="flex flex-col gap-5">
      <div className="text-start w-auto sm:w-xl md:w-4xl">
        <div className="sm:text-5xl text-3xl font-semibold">{fullName}</div>
        <div className="sm:text-2xl text-xl py-2 ">
          <div className="flex items-center mt-2">
            {titles.map((title, index) => (
              <span
                key={index}
                className={`transition-opacity duration-1000 font-semibold italic absolute ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <a
          href="https://www.linkedin.com/in/mrkjstin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/mrkjstin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a
          href="src/assets/MJ_DINGLASAN_2_11_25.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          download={"MJ_DINGLASAN_CV"}
        >
          <span className="text-xl">📄</span>Download CV
        </a>
      </div>
    </div>
  )
}

export default Home
