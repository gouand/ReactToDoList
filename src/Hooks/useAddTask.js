


import { useState, useEffect } from 'react';

export const useAddTask = () => {
    const [dbData, setData] = useState([]);

   function addTaskHook(props, data){
        if(data.color != '' && data.title != ''){
            console.log(data)
        props.api.createTask(data).then((resp) => {
            setData("Success" + resp.data);
        });
    }else{
        console.log('error')
    }
   }


    return [addTaskHook];
}