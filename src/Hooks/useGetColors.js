


import { useState, useEffect } from 'react';

export const useGetColors = (props) => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        props.api.loadColors().then(resp => {
            setColors(resp.data);
        });
    }, [props.api]);


    return { colors };
}