import { useState, useEffect } from 'react';


export const useInitTasks = (props, id = null) => {
  const [tasks, setTask] = useState([])
  const [colors, setColor] = useState([])


  useEffect(() => {
    props.api.loadTasks().then(resp => {
      setTask(resp.data);
    });
    props.api.loadColor(id).then(resp => {
      setColor(resp.data);
    })
  }, [props.api, id]);


  return { tasks, colors };
}
