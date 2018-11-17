import React, { Component } from 'react';
import ShowcaseComponent from "./ShowcaseComponent";


class HomeComponent extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#33ff00', height: '100vh'}}>
            <ShowcaseComponent

                    title='Homepage Title'
                />
            </div>
        );
    }
}

export default HomeComponent;