import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Aboutme from "./pages/aboutme";
import Users from "./pages/users";
import Navbar from './components/Navbar';
import Dyn from "./pages/dyn";
import Errors from "./pages/error";

function App(){
  return(
    <BrowserRouter>
          <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/user" element={<Users/>}></Route>
      <Route path="/user:username" element={<Dyn/>}></Route>
      <Route path="/aboutme" element={<Aboutme/>}></Route>
      <Route path="*" element={<Errors/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}
export default App;