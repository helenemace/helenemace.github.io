import React from 'react';
import './Photo.css';

export default function Photo(props) {
  return (
    <img 
      src={props.url} 
      alt={props.description}
      loading="lazy"
    />
  )
}
