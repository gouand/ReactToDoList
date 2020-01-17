import React from 'react';
// import logo from './logo.svg';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import {useInitTasks } from '../../Hooks/useInitTasks';
import './App.css';



const App = (props) => {
  const {tasks, colors} = useInitTasks(props);

  //setTask(newData);
  return (
    <div className="toDoContainer d-flex col-12">
        <div className="toDoContainer__sidebar col-3">
            <Sidebar api={props.api} colorsId={colors} tasks={tasks}/>
        </div>
        <div className="toDoContainer__content col-9">
            <Content />
        </div>
    </div>
  );
}

export default App;
