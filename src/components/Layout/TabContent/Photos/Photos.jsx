import React from 'react';
import Photo from './Photo/Photo';
import './Photos.css';

export default function Photos(props) {
  console.log("props.photos: " + JSON.stringify(props.photos, null, 4));
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
