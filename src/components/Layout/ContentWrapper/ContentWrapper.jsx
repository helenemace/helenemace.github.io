import React from 'react';
import './ContentWrapper.css';


export default function ContentWrapper(props) {
  return (
    <main>
      { props.children }
    </main>
  )
}
