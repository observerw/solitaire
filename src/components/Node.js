import React from "react";
import './CSS/Node.css'
import '../general.css'
import {exp} from "react-uwp/utils/easing";
import {Tag} from "antd";
import Lenna from "../data/Lenna.jpg";


export default class Node extends React.Component {
    constructor(props) {
        super(props);
        this.tags = props.tags || [];
        this.style = this.props.class ? {} : (props.style || {'background-color': 'white'});
        if (!this.content) {
            this.style['text-align'] = 'center';
        }
    }

    render() {
        return (<div className={'Card Node ' + this.props.class}
                     style={this.style} onClick={this.props.onClick}>
            <img src={this.props.image} onClick={this.props.imageClick}/>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
            {this.props.children}
            <div className='NodeTag'>
                {Array.from(new Set(this.tags)).map((tagName) => {
                    return <Tag>{tagName}</Tag>
                })}
            </div>
        </div>);
    }
}

export function ClickableNode(props) {
    return <a href={props.url} style={{'color': 'black', 'cursor': 'pointer'}}>
        <Node {...props}/>
    </a>
}
