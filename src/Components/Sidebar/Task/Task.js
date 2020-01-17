import React, {useState, useEffect} from 'react';
import {useInitTasks} from '../../../Hooks/useInitTasks';
import './Task.css';
import apis from '../../Apis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Button(props) {
    // useEffect(() => {
    //     console.log(props);
    // });
    const {colors} = useInitTasks(props, props.color);
  return (<div className="task d-flex">
                 {(props.icon) ?
                    <FontAwesomeIcon icon={props.icon} /> : props.color ? 
                    <div className={"color " + colors.map((color) => {
                                                    return color.color;
                                         }) }></div>: ''} 
                    <a href="#hell" className="task__button">{props.text.toUpperCase()}</a>
         </div>);
}

export default Button;