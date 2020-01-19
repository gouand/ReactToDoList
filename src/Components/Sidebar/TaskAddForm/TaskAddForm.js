import React, {useState} from 'react';
import './TaskAddForm.css';
import {useGetColors} from '../../../Hooks/useGetColors';
import {useAddTask} from '../../../Hooks/useAddTask';
import { useInitTasks } from '../../../Hooks/useInitTasks';
function TaskAddForm(props) {
    const {colors} = useGetColors(props)
    const {tasks} = useInitTasks(props)
    const [addData, setAddData] = useState({
        "id": 1,
        "title": '',
        "color": ''
    });
    const [addTaskHook] = useAddTask();
    const [input, setInput] = useState({});
    const setColor = (id) => {
        setAddData(state => {
            const newObj = [];
            newObj['id'] = state.id;
            newObj['title'] = state.title;
            newObj['color'] = id
            return newObj;
                });
                console.log(addData);
    }

    const setText = (e) => {
        let returnObj = {}
        returnObj[e.target.name] = e.target.value

        //setInput(returnObj);
        setAddData((state) => {
            const newObj = {};
            newObj.id = state.id;
            newObj.title = returnObj['addTask'];
            newObj.color = state.color
            return newObj;
                })
        console.log(addData);
    }

    const addTask = (e) => {
        console.log(addData.id);
        setAddData((state) => {
            console.log(colors.length)
            const newObj = {};
            newObj.id = tasks.length + 1;
            newObj.title = state.title;
            newObj.color = state.color;
            addTaskHook(props,newObj);
            return newObj;
                });
                //console.log(addData)
    }
    return (
        <div className="taskAddForm col-8 d-flex align-items-center flex-column">
            <div className="taskAddForm__close">x</div>
            <input onChange={(e) => setText(e)} className="taskAddForm__input" type="text" name="addTask" />
            <div className="d-flex align-items-center">
            {
                colors.map(color => 
                    (<input key={color.id} ids={color.id} onClick={() => setColor(color.id)} className={"inputColor color " + color.color}></input>)
                )
            }
            </div>
            <div className="taskAddForm__btnConntainer d-flex flex-row align-items-start">
                <button className="btnContainer__button" name="addButton" >CLOSE</button>
                <button onClick={(e) => {addTask(e)}} className="btnContainer__button" name="addButton" >ADD</button>
            </div>
        </div>
    );
}

export default TaskAddForm;