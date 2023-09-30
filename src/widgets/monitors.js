import React from "react";
import data from './monitor-info/monitors.json'
import Dropdown from "./dropdown";


class Monitors extends React.Component {
    
    // constructor(props) {
    //     //don't have any props atm
    // }
    // componentDidMount() {
    //     //this function is called when the component is added to the DOM
    // }
    render() {
        console.log("about to log:")
        console.log(data)
        //defines the render rules
        return (<div>
            <Dropdown key="1"/>
            <Dropdown key="2"/>
        </div>)
    }
}

export default Monitors;