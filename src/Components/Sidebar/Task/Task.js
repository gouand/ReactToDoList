import React from 'react';
import { useInitTasks } from '../../../Hooks/useInitTasks';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Task(props) {
    // useEffect(() => {
    //     console.log(props);
    // });

    const withIcon = () => {
        return (
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={props.icon} /> <a href={"/tasks"} className="task__button">{props.text.toUpperCase()}</a>
            </div>
        );
    }

    const withColor = () => {
        return (
            <div className="d-flex align-items-center">
                <div className={"color " + colors.map((color) => {
                    return color.color;
                })}></div> <a href={"/tasks/" + props.taskId} className="task__button">{props.text.toUpperCase()}</a>
            </div>
        )
    }
    const { colors } = useInitTasks(props, props.color);
    return (<div className="task d-flex">
        {props.icon ? withIcon() : props.color ?
            withColor() : ''}

    </div>);
}

export default Task;