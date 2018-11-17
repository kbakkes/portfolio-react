import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import './../style/sidemenu.css';


class SideBarMenuComponent extends Component {





    showSettings (event) {
        event.preventDefault();
    }




    render() {
        return (
            <Menu>
                <ul>
                    <li id="home" className="bm-item" href="/">Homeedeee</li>
                    <li id="about" className="bm-item" href="/about">About</li>
                    <li id="contact" className="bm-item" href="/contact">Contact</li>
                    <li onClick={ this.showSettings } className="bm-item" href="">Settings</li>
                </ul>
                </Menu>
        );
    }
}

export default SideBarMenuComponent;

