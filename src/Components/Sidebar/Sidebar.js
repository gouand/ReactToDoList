import React from 'react';
import './Sidebar.css';
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Task from './Task/Task';
import SideBarButton from './Button/SideBarButton';
import TaskAddForm from './TaskAddForm/TaskAddForm';

function Sidebar(props) {
    return (
        <div className="sidebarContainer">

            <Task api={props.api} icon={faEllipsisV} text="all tasks" />
            {props.tasks.map((task, i) => {
                return (
                    <Task api={props.api} colors={props.colorsId} taskId={task.id} key={task.id} color={task.color} text={task.title} />);
            })}
            <SideBarButton text="Add task" />
            <TaskAddForm api={props.api} />
        </div>
    );
}

export default Sidebar;