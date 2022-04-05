import React, { Component } from 'react';
import './nav.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="topar">
                    <ul className="logo"><a href="/">CoronaCounter</a></ul>
                </div>
            </div>
        );
    }
}

export default Navbar;