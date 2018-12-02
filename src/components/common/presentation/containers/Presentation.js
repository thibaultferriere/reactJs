import React, { Component } from 'react';
import Slid from '../../slid/containers/Slid';
import SlidList from '../../presentation/components/SlidList'

class Presentation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.pres["slidArray"]);
        return(
            <div className="Presentation">
                <div className="presEditForm">
                    <label htmlFor="presentationTitle">Title </label>
                    <input
                        type="text"
                        className="form-control"
                        id="presentationTitle"
                        onChange={this.props.handleChangeTitle}
                        value={this.props.title}
                    />
                    <label htmlFor="presentationDescription">Text</label>
                    <textarea
                        rows="5"
                        type="text"
                        className="form-control"
                        id="presentationDescription"
                        onChange={this.props.handleChangeTxt}
                        value={this.props.txt}>
                    </textarea>
                </div>
                <div className="presentationSlidsList">
                    <SlidList pres={this.props.pres}/>
                </div>
            </div>
        );
    }
}

export default Presentation;
