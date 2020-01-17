import React from 'react';
// import logo from './logo.svg';
import List from './List/List';
import './Content.css';

let data = [{
    id: 1,
    cheked: false,
    text: "Hi"
},
{
    id: 1,
    cheked: true,
    text: "Hielo"
}
,{
    id: 1,
    cheked: false,
    text: "Hi"
}]

function Content() {
  return (
    <div className="contentContainer">
        <List title="HELLO" lists={data} />
    </div>
  );
}

export default Content;
