import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import Content from '../common/content/containers/Content';
import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel';
import * as contentMapTmp from '../../source/contentMap.json';
import * as presMapTmp from '../../source/pres.json';
import Slid from '../common/slid/containers/Slid';
import Presentation from '../common/presentation/containers/Presentation';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel';
import { createStore } from 'redux';
import globalReducer from '../../reducers';
import { Provider } from 'react-redux';

const store = createStore(globalReducer);

export default class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            contentMap:contentMapTmp.default,
            presMap: presMapTmp.default,
            selectedSlid: "d5616d1f-f81d-4d4a-849a-1ee7148a50bd",
        }
    }

    render() {
        const selectedSlids = this.state.presMap["slidArray"].filter((slid) => {
            return slid.id === this.state.selectedSlid;
        });
        const selectedSlid = selectedSlids[0];
        return (
            <Provider store={store}>
                <div className='container-fluid height-100'>
                    <div className="row height-100">
                        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                            <Presentation pres={this.state.presMap}/>
                        </div>
                        <div className='col-md-6 col-lg-6 height-100'>
                            <EditSlidPanel
                                content={this.state.contentMap[selectedSlid.content_id]}
                                displayMode={"FULL_MNG"}
                                slid={selectedSlid}
                            />
                        </div>
                        <div className='col-md-3 col-lg-3 height-100'>
                            <BrowseContentPanel content={this.state.contentMap}/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}
