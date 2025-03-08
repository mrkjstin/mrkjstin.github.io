import "./App.css"
import { useState, useEffect } from "react"

const fullName = "Mark Justin Dinglasan"

const titles = [
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "Software Engineer",
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="h-screen dark:bg-zinc-900 bg-zinc-200 dark:text-zinc-200 text-zinc-900">
      {/* <Navbar /> */}
      <div className="flex w-9xl justify-center">
        <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-2 md:w-5xl sm:w-2xl w-sm p-5 gap-2">
          <div className="col-span-2  p-2 rounded">
            <div className="sm:text-5xl text-xl mt-5 font-semibold">
              {fullName}
            </div>
            <div className="sm:text-2xl p-2 dark:bg-zinc-800 rounded">
              <div className="flex items-center">
                <span className="text-green-700">❭</span>
                {titles.map((title, index) => (
                  <span
                    key={index}
                    className={`transition-opacity duration-1000 font-semibold ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {index === currentIndex && title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
