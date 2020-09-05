import React from "react";
import Node, {ClickableNode} from "../components/Node";
import './CSS/Main.css'
import {Layout, Menu} from "antd";
import MainColumn from "../components/MainColumn";
import '../general.css'
import {Row, Col} from "antd";
import NavBar, {_Footer} from "../components/NavBar";


const {Header, Content, Footer} = Layout;

export default class Main extends React.Component {
    render() {
        return (<div className='Main'>
            <Layout className='layout'>
                <NavBar/>

                <Content>
                    <div className='MainContent'>
                        <Row>
                            <Col span={6}>
                                <MainColumn title='分区'>
                                    <ClickableNode title='科幻' class='MainPart'/>
                                    <ClickableNode title='推理' class='MainPart'/>
                                    <ClickableNode title='猎奇' class='MainPart'/>
                                    <ClickableNode title='武侠' class='MainPart'/>
                                    <ClickableNode title='其他' class='MainPart'/>
                                </MainColumn>
                            </Col>

                            <Col span={12}>
                                <MainColumn title='关注' class='Follow'>
                                    <ClickableNode
                                        url='/article/1'
                                        title='故事1'
                                        class='MainFollow'
                                        content='故事1'/>
                                    <ClickableNode
                                        url='/article/1'
                                        title='故事2'
                                        class='MainFollow'
                                        content='故事2'/>
                                    <ClickableNode
                                        url='/article/1'
                                        title='故事3'
                                        class='MainFollow'
                                        content='故事3'/>
                                    <ClickableNode
                                        url='/article/1'
                                        title='故事4'
                                        class='MainFollow'
                                        content='故事4'/>
                                </MainColumn>
                            </Col>

                            <Col span={6}>
                                <MainColumn title='热门'>
                                    <ClickableNode
                                        url='/node/1'
                                        title='这是一个故事'
                                        class='MainFollow'
                                        content='故事1'/>
                                    <ClickableNode
                                        url='/node/2'
                                        title='这是一个故事'
                                        class='MainFollow'
                                        content='故事2'/>
                                    <ClickableNode
                                        url='/node/3'
                                        title='这是一个故事'
                                        class='MainFollow'
                                        content='故事3'/>
                                    <ClickableNode
                                        url='/node/4'
                                        title='这是一个故事'
                                        class='MainFollow'
                                        content='故事4'/>
                                </MainColumn>
                            </Col>

                        </Row>
                    </div>
                </Content>

                <_Footer/>
            </Layout>
        </div>);
    }
}