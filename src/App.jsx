import Home from "./components/landingPage/Navbar"
import Herosection from "./components/landingPage/HeroSection"
import Login from "./components/login/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App(){

  return(

    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* ✅ This route exists */}
      </Routes>
    </Router>
    
    

    
    
    </>
  )
}export default App