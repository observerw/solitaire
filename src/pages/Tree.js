import React from "react";
import {Col, Layout, Row} from "antd";
import NavBar, {_Footer} from "../components/NavBar";
import Node from "../components/Node";
import Hayasaka from "../data/Hayasaka.jpg";
import Author from "../components/Author";
import AJAX from "../components/AJAX";

import './CSS/Tree.css'

const {Header, Content, Footer} = Layout;

function Combine(props) {
    console.log(props);
    return <div className='TreeCombine'>
        <Node title={props.title} content={props.content}
              class='TreeCombineNode'/>
        <Author {...props.author} class='TreeCombineAuthor'/>
    </div>
}

export default class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.ID = props.match.params.nodeID;

        this.state = {
            showed: [],
            showing: [],
        };
    }

    async _getNodeData() {
        let data = await AJAX('node',this.ID, 'mode=simple') || {};
        this._moveToShowed(data);
    }

    async _moveToShowed(data) {
        if (!data) return;
        let node = <Combine id={data.id} {...data}/>;
        if (this.state.showed.length > 50) this.setState({showed: [node]})
        else this.setState({showed: [...this.state.showed, node]})

        let childrenData = [];
        if (!data.children) return;
        for (let i of data.children)
            childrenData.push(await AJAX('node', i, 'mode=simple'));

        await this._getNodeChildren(childrenData);
        //this.setState({showing: await this._getNodeChildren(childrenData)});
    }


    async _getNodeChildren(data) {
        if (!data) {
            this.setState({showing:[]});
            return;
        }
        let res = [];
        for (let id of data) {
            let node = await AJAX('node', id, 'mode=simple');
            res.push(<Node
                key={id}
                class='TreeChild'
                title={node.title||'无标题'}
                content={node.intro ||'无内容'}
                onClick={(e) => {
                    window.scrollTo(0, document.body.scrollHeight);
                    this._moveToShowed(node);
                }}
            />)
        }

        this.setState({showing: [...res]});
        return res;
    }

    async componentDidMount() {
        await this._getNodeData();
    }

    render() {
        console.log(this.state);
        return (<div className='Tree'>
            <Layout className='layout'>
                <NavBar/>
                <Content style={{padding: '50px 50px'}}>
                    <div className='TreeContent'>
                        <div className='TreeNow'>
                            {this.state.showed}
                        </div>
                        <div className='TreeChildren'>
                            {this.state.showing}
                        </div>
                    </div>
                </Content>
                <_Footer/>
            </Layout>
        </div>);
    }
}