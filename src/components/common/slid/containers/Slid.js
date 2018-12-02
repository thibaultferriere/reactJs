import React, { Component } from 'react';
import Visual from '../../../common/content/components/Visual';
import Content from '../../../common/content/containers/Content'
import EditMetaSlid from '../components/EditMetaSlid';
import { connect } from 'react-redux';
import { setSelectedSlid } from '../../../../actions'

class Slid extends Component{

    constructor(props){
        super(props);
        this.updateSelectedSlid = this.updateSelectedSlid.bind(this);
    }

    updateSelectedSlid(){
        const tmpSlid={
            id:this.props.id,
            title:this.props.title,
            txt:this.props.txt,
            content_id:this.props.content_id
        };
        this.props.dispatch(setSelectedSlid(tmpSlid));
    }

    handleChangeTitle() {

    }

    render() {
        console.log("content : " + this.props.content);
        return(
            <div className="slid" onClick="">
                <h1>{this.props.slid.title}</h1>
                <p>{this.props.slid.txt}</p>
                <Content
                    id={this.props.content.id}
                    src={this.props.content.src}
                    title={this.props.content.title}
                    type={this.props.content.type}
                />
                {(this.props.displayMode === "FULL_MNG")
                 && <EditMetaSlid
                        handleChangeTitle={this.handleChangeTitle()}/>}
            </div>
        );
    }
}

export default connect(Slid);
