import React from 'react';
import Photo from './Photo/Photo';
import './Portfolio.css';

export default function Photos(props) {
  return (
    <section>
      <div className="buffer" />
      <ul>
        {props.photos && (
          props.photos.map ((photo, index) =>
            <li>
              <Photo 
                key={index}
                url={photo.url}
              />
            </li>
          )
        )}
      </ul>
      <div className="buffer" />
    </section>
  )
}
