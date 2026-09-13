import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import TechCatalogSection from "./Components/TechCatalogSection"
import Footer from "./Components/Footer"
import { ToastContainer } from "react-toastify"

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TechCatalogSection></TechCatalogSection>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
