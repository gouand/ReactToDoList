


import {useState, useEffect} from 'react';

export const useGetAllTasks = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
         props.api.loadAllTasks().then(resp => {
            setData(resp.data);
                });
    }, [props.api]);
  
  
    return {data};
  }