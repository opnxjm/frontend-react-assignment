import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import About from './components/About';
import Home from "./components/Home";
import Contact from "./components/Contact";
import AdminPage from "./components/AdminPage";
import Error from './components/Error';
import Profile from './components/Profile';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='y'>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<h1 className='name'>Hello World</h1>}></Route>  */}
        <Route path="/" element={<Error setUserLoggedIn={setUserLoggedIn} />} /> 
        <Route path="/Admin" element={userLoggedIn ? <AdminPage /> : <Error setUserLoggedIn={setUserLoggedIn} />} />      
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/admin" element={isLoggedIn ? (<AdminPage />) : (
            <h1>You must be logged in to access this page</h1>
            )
          }
        /> */}
      </Routes>
      <nav>
        <NavLink className="n" to ={"/Home"}>Home</NavLink>
        <NavLink className="n" to ={"/About"}>About</NavLink>
        <NavLink className="n" to ={"/Contact"}>Contact</NavLink>
        <NavLink className="n" to ={"/Profile"}>Profile</NavLink>
        <NavLink className="n" to ={"/Admin"}>For Admin!!</NavLink>
      </nav>

    </BrowserRouter>
    </div>
  );
}

export default App;