import "./App.css";
import Navbar from "./views/includes/Navbar";
import Home from "./components/Home/home";
import Cards from "./components/Cards/Cards";
import Footer from "./views/includes/Footer";
import { Routes, Route } from "react-router-dom";//without this in react routes doesnt work
import IdeasPage from "./components/IdeasPage/Ideaspage"; 
import PostIdea from "./components/PostIdea/PostIdea";
import Explore from "./components/Explore/Explore";
import myIdea from "./components/MyIdeas/myIdea";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import Profile from "./components/user/Profile";
import EditProfile from "./components/user/EditProfile";

function App() {
  return (
     <>  {/* fragments -> it doesnt create an extra html elemnt */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Cards />
            </>
          }
        />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/post" element={<PostIdea />} />
        <Route path="/explore/:id" element={<Explore />} />
        <Route path="/myIdeas" element={<myIdea />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
