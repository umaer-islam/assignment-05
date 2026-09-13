import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"

function App(){


  return(
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  )

}

export default App