import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import './App.css';

const App = (props) => {
  const [tasks, setTask] = useState([]);
  const [colors, setColor] = useState([]);
  let newData = []; 
  let newColor = [];
  useEffect(() => {
    props.api.loadTasks().then(resp => {
      newData = resp.data;
      //console.log(tasks);
      setTask(resp.data);
    });
    props.api.loadColor().then(resp => {
      newColor = resp.data;
    })
  })

  //setTask(newData);
  return (
    <div setColor={() => {setColor(newColor)}} setTask={() => {setTask(newData)}} className="toDoContainer d-flex col-12">
        <div className="toDoContainer__sidebar col-3">
            <Sidebar colorsId={colors} tasks={tasks}/>
        </div>
        <div className="toDoContainer__content col-9">
            <Content />
        </div>
    </div>
  );
}

export default App;
