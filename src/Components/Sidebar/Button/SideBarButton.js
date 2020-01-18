import React from 'react';
import './SideBarButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function SideBarButton(props) {
  return (
      <button className="btn sideBarButton">
          {props.text.toUpperCase()} 
          <FontAwesomeIcon icon={faPlusCircle} />
      </button>
  );
}

export default SideBarButton;