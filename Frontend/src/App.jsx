
import './App.css'
import Navbar from "./views/includes/Navbar"
import Home from "./components/Home/home"
import Cards from "./components/Cards/Cards"
import Footer from './views/includes/Footer'
import { Routes, Route } from "react-router-dom";
import IdeasPage from "./components/IdeasPage/Ideaspage"; // ✅ import


function App() {
  return (

    <> 
         <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Cards />
          </>
        } />
        <Route path="/ideas" element={<IdeasPage />} />
      </Routes>
      <Footer />
    </>
     

  )
}


export default App
