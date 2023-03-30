import React from "react";

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="inputSubContainer experienceContainer">
            <h1>Work experience</h1>
            <form>
                <input placeholder="Employer"></input>
                <label>Start date: <input type="date"></input></label>
                <label>End date: <input type="date"></input></label>
                <textarea placeholder="brief description"></textarea>
                <button>Add</button>
            </form>
        </div>
        )
    }
}

export default Experience