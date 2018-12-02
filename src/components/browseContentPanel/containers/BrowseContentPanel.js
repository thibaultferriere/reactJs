import React, { Component } from 'react';
import Content from '../../common/content/containers/Content.js';

class BrowseContentPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return Object.keys(this.props.content).map((id, index) => {
            return(
                <Content
                    key={index}
                    id={this.props.content[id].id}
                    src={this.props.content[id].src}
                    title={this.props.content[id].title}
                    type={this.props.content[id].type}
                />
            );
        });
    }
}

export default BrowseContentPanel;
