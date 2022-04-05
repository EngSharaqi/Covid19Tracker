import React, { Component } from 'react';
import axios from 'axios';

class CountryCases extends Component {

    state = {
        __CountryCases_Confirmed: 0,
        __CountryCases_Deaths: 0,
        __CountryCases_Recovered: 0

    }

    componentDidMount = () => {
        axios.get("https://covid19.mathdro.id/api/countries/" + this.props.match.params.CNTRYNAME).then(cntryName => {
            this.setState({
                __CountryCases_Confirmed: cntryName.data.confirmed.value,
                __CountryCases_Deaths: cntryName.data.deaths.value,
                __CountryCases_Recovered: cntryName.data.recovered.value,

            })
        });
    }
    render() {
        return (

            <div className="container cases-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card confirmed">
                            <h5>Cases</h5>
                            <p className="cases">{this.state.__CountryCases_Confirmed}</p>
                            { (this.state.__CountryCases_Confirmed > 0) ? <p className="prsnt">This is the total confirmed cases in {this.props.match.params.CNTRYNAME}</p> : <p>Wohooo!, No cases in {this.props.match.params.CNTRYNAME} yet!</p>}
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card deaths">
                            <h5>Deathes</h5>
                            <p className="cases">{this.state.__CountryCases_Deaths}</p>
                            
                            { (this.state.__CountryCases_Deaths > 0) ? <p className="prsnt">Approximately {Math.round(this.state.__CountryCases_Deaths / this.state.__CountryCases_Confirmed * 100)}% of all deaths in {this.props.match.params.CNTRYNAME} </p> : <p>Good news, No deaths in {this.props.match.params.CNTRYNAME} yet!</p>}
                            
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card recovered">
                            <h5>Recovered</h5>
                            <p className="cases">{this.state.__CountryCases_Recovered}</p>
                            { (this.state.__CountryCases_Recovered > 0) ? <p className="prsnt">Approximately {this.state.__CountryCases_Recovered / this.state.__CountryCases_Confirmed * 100}% of all deaths in {this.props.match.params.CNTRYNAME} </p> : <p className="prsnt">No recovered cases in {this.props.match.params.CNTRYNAME}</p>}
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

export default CountryCases;