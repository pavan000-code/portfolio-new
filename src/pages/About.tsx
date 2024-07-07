import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Navbar from '../components/Navbar';
import './About.css';

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Navbar />
      <CSSTransition
        in={true}
        timeout={2000}
        classNames="about-title"
        unmountOnExit
        onExited={() => setShowContent(true)}
      >
        <h1 className="about-title">About</h1>
      </CSSTransition>
      {showContent && (
        <div>
          {/* Rest of your About page content */}
          <p>This is the rest of the About page content.</p>
        </div>
      )}
    </div>
  );
};

export default About;
