
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'

//importing pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path ="/about" element = {<About/>} />
      <Route path = "/projects" element = {<Projects />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
