import React from "react";
import data from './monitor-info/monitors.json'


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sel: false,
            selected_monitor: ""
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event) {
        this.setState({
            sel: true,
            selected_monitor: event.target.value
        })
    }

    render() {
        //defines the render rules
        // console.log(this.state.selected_monitor)
        // console.log("/monitor-info/pictures/"+data["monitor-photos"][this.state.selected_monitor])
        return (
            <div>
                {/* Display monitor on duty, and have name if the monitor has checked in */}
                <p>MONITOR ON DUTY: {!this.state.sel ? "No monitor checked in" : this.state.selected_monitor}</p>
                {/* Create a dropdown that updates state with the selected Monitor */}
                <select value={this.state.selected_monitor} onChange={this.handleSelect}>
                    {/* This is dumb but apparently this is the way make it not autoselect */}
                    <option value hidden></option>
                    {/* Map the monitors' names to selectable option */}
                    {data.monitors.map((name_string) => { return <option value={name_string} key={name_string}>{name_string}</option> })}
                </select>
                <br/>
                {/* Show the monitor's profile image if there is a monitor checked in */}
                <img alt={"A photo of " + this.state.selected_monitor} hidden={!this.state.sel} src={"assets/pictures/" + data["monitor-photos"][this.state.selected_monitor]} />

            </div>
        )
    }
}

export default Dropdown;