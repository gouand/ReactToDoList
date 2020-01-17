import React, {useEffect} from 'react';

import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Button(props) {
    // useEffect(() => {
    //     console.log(props);
    // });

  return (<div className="task d-flex">
                 {(props.icon) ?
                    <FontAwesomeIcon icon={props.icon} /> : props.color ? 
                    <div className={"color " + "red"} ></div>: ''} 
                    <a href="#hell" className="task__button">{props.text.toUpperCase()}</a>
         </div>);
}

export default Button;