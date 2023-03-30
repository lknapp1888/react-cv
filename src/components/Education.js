import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="inputSubContainer educationContainer">
            <h1>Educational experience</h1>
            <form>
                <input placeholder="Institution"></input>
                <label>Start date: <input type="date"></input></label>
                <label>End date: <input type="date"></input></label>
                <input placeholder="achievements/degree classification..."></input>
                <button>Add</button>
            </form>
        </div>
        )
    }
}

export default Education