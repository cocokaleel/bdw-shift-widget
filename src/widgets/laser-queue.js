import React from "react";


class LaserQueue extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            sel: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var newState = !this.state.sel;
        this.setState({
            sel: newState
        })
    }
    // componentDidMount() {
    //     //this function is called when the component is added to the DOM
    // }
    render() {
        //defines the render rules
        return (<div className="widget">
            <h1>Laser Cutter Queue</h1>
            <button onClick={this.handleClick} type="button">{this.state.sel?"MONITORS: Deactive Queue":"MONITORS: Activate Queue"}</button>
            {(this.state.sel)?<div>
                <h3>Scan this QR code to sign up for the laser cutter queue:</h3>
                <img alt="A QR code to the laser cutter queue signup form" src="/assets/lasercutter.png"/>
                <h3>Queue Status:</h3>
                <p>As soon as IT gives me access to Google Cloud Platform I will add this</p>
            </div>:<div></div>}
        </div>)
    }
}

export default LaserQueue;