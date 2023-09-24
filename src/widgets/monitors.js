import React from "react";
import data from './monitor-info/monitors.json'


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
            <h1>Monitors</h1>
            <select id="monitor1">
                {data.monitors.map((name_string)=>{return <option value={name_string}>{name_string}</option>})}
            </select>
            <select id="monitor2">
                {data.monitors.map((name_string)=>{return <option value={name_string}>{name_string}</option>})}
            </select>
        </div>)
    }
}

export default Monitors;