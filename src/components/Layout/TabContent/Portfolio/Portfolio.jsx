import React, { useState, useRef, useEffect } from 'react'; 
import Photo from './Photo/Photo';
import './Portfolio.css';

export default function Photos(props) {

  function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
      let domRefCurrent = domRef.current;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRefCurrent);
    }, []);
 
    return (
      <div
        className={`fade-in-section ${isVisible && 'is-visible'}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <section>
      <div className="buffer" />
      <ul>
        {props.photos && (
          props.photos.map ((photo, index) =>
            <FadeInSection key={index}>
              <li className="photo">
                <Photo 
                  key={index}
                  url={photo.url}
                  description={photo.description}
                />
              </li>
            </FadeInSection>
          )
        )}
      </ul>
      <div className="buffer" />
    </section>
  )
}
