import React, { Component } from 'react';
import Slid from '../../slid/containers/Slid';
import * as contentMap from '../../../../source/contentMap.json';

class SlidList extends Component {

    constructor(props) {
        super(props);
    }

    getAllSlidsFromPresentation(id) {
        let slidArrayRender = [];
        if (this.props.pres == undefined) {
            return ;
        }
        if(this.props.pres["id"] == id) {
            // console.log(this.props.pres["slidArray"][0]);
            for(var i=0; i<this.props.pres["slidArray"].length; i++) {
                const contentId = this.props.pres["slidArray"][i].content_id;
                const content = contentMap.default[contentId];
                // console.log("content : " + content);
                slidArrayRender.push(
                    <Slid
                        slid = {this.props.pres["slidArray"][i]}
                        displayMode = "SHORT"
                        content={content}
                    />
                )
            }
        }
        return slidArrayRender;
    }

    render() {
        const displayList = this.getAllSlidsFromPresentation(0);
        console.log(displayList[0]);
        return(
            <div className="SlidList">
                {displayList}
            </div>
        );
    }
}

export default SlidList;
