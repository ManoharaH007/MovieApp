import { Routes,Route, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Room from "./pages/Room";
import Singleroom from "./pages/Singleroom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Mybooking from "./pages/Mybooking"
import Navbar from "./components/Navbar"





function App() {
    const ownerPath = useLocation().pathname.includes("owner");

  return (
    <div>
     {!ownerPath && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/room/:id" element={<Room/>}/>
        <Route path="/singel-room" element={<Singleroom/>}/>
         <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
           <Route path="/about" element={<About/>}/>
            <Route path="/my-booking" element={<Mybooking/>}/>
         
        



      </Routes>
    </div>
  )
}

export default App
