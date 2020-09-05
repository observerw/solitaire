import React from 'react';
import {Layout, Menu} from "antd";
import NavBar from "../components/NavBar";
import './CSS/HomePage.css'
import Node from "../components/Node";
import Lenna from "../data/Lenna.jpg";

import Author from "../components/Author";

const {Header, Content, Sider} = Layout;

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='HomePage'>
            <Layout>
                <NavBar/>
                <Layout>
                    <Sider width={200}>
                        <Menu mode="inline" theme="dark"
                              defaultSelectedKeys={['1']}>
                            <Menu.Item key={1}>我的关注</Menu.Item>
                            <Menu.Item key={2}>我的收藏</Menu.Item>
                            <Menu.Item key={3}>我的创作</Menu.Item>
                            <Menu.Item key={4}>我的私信</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '24px 24px'}}>
                        <Content className="HomePageContent">
                            <Author name='测试' intro='这是一个测试' image={Lenna}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>);
    }
}