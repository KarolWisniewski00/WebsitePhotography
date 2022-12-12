import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Porfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Porfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
