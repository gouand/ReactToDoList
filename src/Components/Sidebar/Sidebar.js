import React from 'react';
import './Sidebar.css';
import Button from './Button/Button';
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Task from './Task/Task';

function Sidebar(props) {
  return (
      <div className="sidebarContainer">

<Task icon={faEllipsisV} text="all tasks" />
            {props.tasks.map((task, i) => {
              return( <Task colors={props.colorsId} key={i} color={task.color} text={task.title} />);
            }) }
            <Button text="Hello" />
      </div>
  );
}

export default Sidebar;