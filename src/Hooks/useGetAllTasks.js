


import {useState, useEffect} from 'react';


export const useGetAllTasks = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
         props.api.loadTasks().then(resp => {
            var newData = [];
             newData = resp.data.map((task) => {
                newData.push(task);
                props.api.loadLists(task.id).then((res) => {
                    const arr = res.data;
                     newData.push(arr);
                     return newData;
                });
                return newData;
            })
            setData(newData);
        });
    }, [props.api]);
  
  
    return {data};
  }