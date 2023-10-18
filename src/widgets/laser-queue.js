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
        return (<div>
            <h1>Laser Cutter Queue</h1>
            <button onClick={this.handleClick} type="button">{this.state.sel?"Deactive Queue":"Activate Queue"}</button>
        </div>)
    }
}

export default LaserQueue;