


import { useState, useEffect } from 'react';


export const useGetLists = (props, id = null) => {
    const [lists, setLists] = useState([]);


    useEffect(() => {
        props.api.loadLists(id).then(resp => {
            setLists(resp.data);
        });
    }, [id, props.api]);


    return { lists };
}