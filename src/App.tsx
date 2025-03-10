import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router"

import Home from "./pages/Home"
import Layout from "./layouts/Layout"
import About from "./pages/About"
import Projects from "./pages/Projects"
import TechStack from "./pages/TechStack"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
