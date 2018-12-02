import React, { Component } from 'react';
import * as contentMap from '../../../source/contentMap.json';
import Slid from '../../common/slid/containers/Slid';
import { connect } from 'react-redux';

class EditSlidPanel extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        if(this.props.slid.id == undefined){
            return <div></div>;
        }
        return(
            <Slid
                content={this.props.content}
                displayMode="FULL_MNG"
                slid={this.props.slid}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
         selected_slid: state.selectedReducer.slid,
    }
};

export default connect(mapStateToProps)(EditSlidPanel);
