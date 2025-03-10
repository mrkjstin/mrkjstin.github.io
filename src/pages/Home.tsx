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
    <div className="flex flex-col justify-center items-center h-screen -mt-16">
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
    </div>
  )
}

export default Home
