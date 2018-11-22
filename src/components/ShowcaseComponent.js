import React, { Component } from 'react';
import HomeComponent from "./HomeComponent";


class ShowcaseComponent extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.color, minHeight: '100vh'}}>
                <HomeComponent
                    title='Karim Bakkes'
                />
            </div>
        );
    }
}

export default ShowcaseComponent;
