import React from 'react';
import { faCheckSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from './logo.svg';
import './List.css';
import { useGetAllTasks } from '../../../Hooks/useGetAllTasks';
import SideBarButton from '../../Sidebar/Button/SideBarButton'

function List(props) {
    const {data} = useGetAllTasks(props);
//console.log(data)

    const showTask = () => {
        return (
            <div>
            <h2 className="list__taskTitle" style={{textTransform: "uppercase"}}>{props.title}</h2>
              { props.lists.map((list,i) => (
                <div className="list__item" key={i}>{!list.cheked ?<FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faCheckSquare} />}<li>{list.text}</li></div>
              ))
              }
              <SideBarButton text="Add list" />
            </div>
        )
    }
    const showLists = (task) => {
       return task.lists.map((list) => (
          <div className="list__item" key={list.id}>{!list.cheked ?<FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faCheckSquare} />}<li>{list.text}</li></div>
        ))
    }
    const showAllTasks = () => data.map((task) => 
        <div className="task__item">
            <h2 key={task.id} className="list__taskTitle" style={{textTransform: "uppercase"}}>{task.title}</h2> 
            {showLists(task)}
            <SideBarButton text="Add list" />
        </div>
        )


  return (
      <div className="list">
      {props.allTasks ?
       showAllTasks() : (showTask())
      }
      </div>
  );
}

export default List;
