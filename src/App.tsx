import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

// Importing pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="page" unmountOnExit>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  );
}

export default App;
