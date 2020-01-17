import React from 'react';
// import logo from './logo.svg';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useInitTasks } from '../../Hooks/useInitTasks';
import './App.css';
import { useGetAllTasks } from '../../Hooks/useGetAllTasks';



const App = (props) => {
  const {tasks, colors} = useInitTasks(props);
  const {data} = useGetAllTasks(props);
  //setTask(newData);
  return (
    <Router>
    <div className="toDoContainer d-flex col-12">
        <div className="toDoContainer__sidebar col-3">
            <Sidebar api={props.api} colorsId={colors} tasks={tasks}/>
        </div>
        <div className="toDoContainer__content col-9">
        <Switch>
        {console.log(data)}
        <Route exact path="/">
              <Content api={props.api} />
          </Route>
          <Switch>
          <Route path="/tasks/:id">
              <Content api={props.api} />
          </Route> 
          <Route path="*">
              <Content api={props.api} />
          </Route>
          </Switch>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
