import React, { Component } from 'react';

class Visual extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let render_visual;
        switch (this.props.type) {
            case "img":
                render_visual=(
                    <div>
                        <img className='img'
                        src={this.props.src}
                        />
                    </div>
                );
                break;
            case "video":
                render_visual=(
                    <div>
                        <object  width="100%" height="100%"
                            data={this.props.src}>
                        </object>
                    </div>
                );
                break;
            case "img_url":
                render_visual=(
                    <div>
                        <img
                            className='img'
                            src={this.props.src}
                            width="100%"
                            height="100%"
                        />
                    </div>
            );
                break;
            case "web":
            render_visual=(
                <div>
                    <iframe
                        src={this.props.src}
                        className='web'
                        width="100%"
                        height="100%"
                    />
                </div>
            );
                break;

        }

        return(
            <div className="thumbnail">
                {render_visual}
            </div>
        )
    }
}

export default Visual;
