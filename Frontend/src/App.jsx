
import './App.css'
import Navbar from "./views/includes/Navbar"
import Home from "./components/Home/home"
import Cards from "./components/Cards/Cards"
import Footer from './views/includes/Footer'
import { Routes, Route } from "react-router-dom";
import IdeasPage from "./components/IdeasPage/Ideaspage"; // ✅ import
import PostIdea from './components/PostIdea/PostIdea'
import Explore from './components/Explore/Explore'
import MyIdea from './components/MyIdeas/myIdea'
import Login from './components/user/Login'


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
        <Route path="/post" element={<PostIdea />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myIdeas" element={<MyIdea />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
     

  )
}


export default App
