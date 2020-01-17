import {useState, useEffect} from 'react';


export const useInitTasks = (props, id = null) => {
    const [tasks, setTask] = useState([])
    const [colors, setColor] = useState([])
  
  
    useEffect(() => {
      props.api.loadTasks().then(resp => {
            const data = [...resp.data, {
              color: props.api.loadColor(resp.data[1].color_id).then(res => {
                return res.data;
              })
            }]
            setTask(resp.data);
          });
          props.api.loadColor(id).then(resp => {
            setColor(resp.data);
          })
    }, []);
  
  
    return {tasks,colors};
  }
