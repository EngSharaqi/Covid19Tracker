import React, { Component } from 'react';
import axios from 'axios';
import './countries.css'
class GlobalCases extends Component {
    state = {
        __confirmed: 0,
        __deaths: 0,
        __recovered: 0
    }

    componentDidMount() {

        axios.get("https://covid19.mathdro.id/api").then(res => {
            this.setState({
                __confirmed: res.data.confirmed.value,
                __deaths: res.data.deaths.value,
                __recovered: res.data.recovered.value,

            })
        })
    }

    render() {
        return (
            <div className="container cases-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card confirmed">
                            <h5>Cases</h5>
                            <p className="cases">{this.state.__confirmed}</p>
                            { (this.state.__confirmed > 0) ? <p className="prsnt">This is the total confirmed cases!</p> : <p>Wohooo!, No cases yet!</p>}
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card deaths">
                            <h5>Deathes</h5>
                            <p className="cases">{this.state.__deaths}</p>
                            { (this.state.__deaths > 0) ? <p className="prsnt">Approximately {Math.round(this.state.__deaths / this.state.__confirmed * 100)}% of all deaths globally</p> : <p>Good news, No deaths yet!</p>}
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card recovered">
                            <h5>Recovered</h5>
                            <p className="cases">{this.state.__recovered}</p>
                            { (this.state.__recovered > 0) ? <p className="prsnt">Approximately {Math.round(this.state.__recovered / this.state.__confirmed * 100)}% of all recovered cases globally</p> : <p className="prsnt">No recovered cases!</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="word">Made with &lt;3 by Mohamed Sharaqi;</p>
                </div>
            </div>

        );
    }
}

export default GlobalCases;