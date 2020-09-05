import React from "react";
import './CSS/MainColumn.css';


export default function MainColumn(props) {
    return (<div className={'MainColumn Card ' + props.class}>
        <div className='MainColumnTitle'>{props.title}</div>
        <div className='MainColumnContent'>{props.children}</div>
    </div>);
}