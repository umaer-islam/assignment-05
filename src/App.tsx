import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import { ToastContainer } from "react-toastify"

function App(){


  return(
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <ToastContainer position="bottom-right" />
    </>
  )

}

export default App