import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from './components/About';
import Home from "./components/Home";
import Contact from "./components/Contact"

function App() {
  return (
    <div className='y'>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<h1 className='name'>Hello World</h1>}></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
  
      <nav>
        <NavLink className="n" to ={"/Home"}>Home</NavLink>
        <NavLink className="n" to ={"/About"}>About</NavLink>
        <NavLink className="n" to ={"/Contact"}>Contact</NavLink>
      </nav>

    </BrowserRouter>
    </div>
  );
}

export default App;
