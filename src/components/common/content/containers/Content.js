import React, { Component } from 'react';
import Visual from '../components/Visual';

class Content extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="mainPanel">
                <Visual
                    type={this.props.type}
                    src={this.props.src}
                />
                <p>ID : {this.props.id} Title : {this.props.title}</p>
            </div>
        );
    }
}

export default Content;
