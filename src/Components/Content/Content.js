import React from 'react';
import {
    useParams
  } from "react-router-dom";
// import logo from './logo.svg';
import List from './List/List';
import { useGetLists } from '../../Hooks/useGetLists';
import './Content.css';
import { useGetTask } from '../../Hooks/useGetTask';





function Content(props) {
    let {id} = useParams();
    const {lists} = useGetLists(props, id);
    const {task} = useGetTask(props,id);
  return (
    <div className="contentContainer">
            <List allTasks={props.allTasks} api={props.api} title={task.title} lists={lists} />
    </div>
  );
}

export default Content;
