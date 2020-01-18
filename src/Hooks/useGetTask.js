


import { useState, useEffect } from 'react';


export const useGetTask = (props, id = null) => {
    const [task, setTask] = useState([]);


    useEffect(() => {
        props.api.loadTask(id).then(resp => {
            setTask(resp.data);
        });
    }, [id, props.api]);


    return { task };
}