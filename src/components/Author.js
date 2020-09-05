import React from 'react';
import Node from "./Node";
import Lenna from "../data/Lenna.jpg";


export default class Author extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='Author'>
            <Node title={this.props.name}
                  content={this.props.intro}
                  image={Lenna}
                  imageClick={() => {
                      window.location.href = '/homepage/' + this.props.ID
                  }}>
                <a style={{display: 'block'}}>关注</a>
                <a style={{display: 'block'}}>邀请ta一起创作</a>
                {this.props.children}
            </Node>

        </div>);
    }
}