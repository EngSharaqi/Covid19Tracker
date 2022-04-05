import React, { Component } from 'react';
import axios from 'axios';
import './countries.css'
import './cntryCase'
class Countries extends Component {
//statefull component!

    state = {
        __val: 'Global'
    }

    state = {
        __countries: [],
    }

    componentDidMount() {
        axios.get("https://covid19.mathdro.id/api/countries").then(res => {


            this.setState({
                __countries: res.data.countries
            })

        });

    }
    
    handleSelect = (e) => {
        this.setState({
            __val: e.target.value
        })

        //  console.log(this.state.__val)
    }

    render() {
        var __path = window.location.pathname,
            __PathEdit = __path.slice(1, __path.length);
        
        if(__PathEdit === ''){
            __PathEdit = __PathEdit.replace('', 'Global');
            
        }
        console.log(__PathEdit)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <form  action={"/" + this.state.__val}>
                        <select id="countries" onChange={this.handleSelect} value={this.state.__val} >
                            <option value={((window.location.pathname) === ''?__PathEdit:__PathEdit)}>{__PathEdit}</option>
                            {this.state.__countries.map( name => <option value={name.name} key={name.name}>{name.name}</option> )}
                           
                        </select>
                        <input type="submit" value="Submit" />
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Countries;