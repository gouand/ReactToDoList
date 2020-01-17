import React from 'react';
import { faCheckSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from './logo.svg';
import './List.css';

function List(props) {
  return (
      <div className="list">
         <h2 className="list__taskTitle">{props.title}</h2>
            {props.lists.map((list,i) => (
                <div className="list__item" key={i}>{!list.cheked ?<FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faCheckSquare} />}<li>{list.text}</li></div>
         ))}
      </div>
  );
}

export default List;
