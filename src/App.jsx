import About from "./components/About"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Projects from "./components/Projects/Projects"


function App() {
 

  return (
  

    <div className=" bg-[#171d32] h-auto w-full overflow-hidden">

      <Nav/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
