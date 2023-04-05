import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import About from './pages/About';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AdminPage from "./pages/AdminPage";
import Error from './pages/Error';
import Profile from './pages/Profile';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="y">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Error setUserLoggedIn={setUserLoggedIn} />} />
          <Route path="/Admin" element={userLoggedIn ? <AdminPage /> : <Error setUserLoggedIn={setUserLoggedIn} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <nav>
          <NavLink className="n" to={"/Home"}>
            Home
          </NavLink>
          <NavLink className="n" to={"/About"}>
            About
          </NavLink>
          <NavLink className="n" to={"/Contact"}>
            Contact
          </NavLink>
          <NavLink className="n" to={"/Profile/226"}>
            Profile
          </NavLink>
          <NavLink className="n" to={"/Admin"}>
            For Admin!!
          </NavLink>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
