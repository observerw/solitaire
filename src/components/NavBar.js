import React from 'react';
import {Input, Layout} from "antd";

import './CSS/NavBar.css'
import {HomeOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";

const {Header, Footer} = Layout;

const IconStyle = {
    'color': 'white',
    'margin-left': '40px',
    'font-size': '20px',
}

export default function NavBar() {
    return <Header className='NavBar'>
        <Search placeholder='搜索' className='NavBarInput'/>
        <div className='NavBarIcon'>
            <a href='/'><HomeOutlined style={IconStyle}/></a>
            <a href='/homepage'><UserOutlined style={IconStyle}/></a>
            <a><SettingOutlined style={IconStyle}/></a>

        </div>
    </Header>;
}

export function _Footer() {
    return <Footer className='Footer'>我在说谎 2020.9.5</Footer>;
}