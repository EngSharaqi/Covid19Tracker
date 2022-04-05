import React, { Component } from 'react';
import './nav.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="topar">
                    <ul className="logo"><a href="/">Covid-19 Tracker</a></ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
