import { useState, useEffect } from 'react'
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './css/App.css'
import {Services,About,Work,Blog,Contact} from './pages'
import {Navigation} from './components/Navigation'

function App() {
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let previous = 0
      if (window.scrollY > previous) {
        console.log('yes');
        setIsHidden(true);
      } else {
        console.log('no');
        setIsHidden(false);
      }
      previous = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: any) => {
    console.log(to);
  };
  return (
    <>
      <Navigation hidden={isHidden} />

      <Element name="services" className="element">
        <Services />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="work" className="element">
        <Work />
      </Element>
      <Element name="blog" className="element">
        <Blog />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </>
  )
}

export default App

