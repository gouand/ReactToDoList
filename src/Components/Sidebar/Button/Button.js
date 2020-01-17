import React from 'react';
import './Button.css';

function Button(props) {
  return (
      <button className="btn sideBarButton">{props.text}</button>
  );
}

export default Button;