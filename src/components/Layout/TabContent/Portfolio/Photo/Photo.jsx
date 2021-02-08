import React from 'react';
import './Photo.css';

export default function Photo(props) {
  return (
    <figure>
      <img 
        src={props.url} 
        alt={props.description}
        loading="lazy"
      />
      <figcaption>
        {props.description}
      </figcaption>
    </figure>
  )
}
