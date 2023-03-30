import React from "react";

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="personalContainer">
            <h1>Personal</h1>
            <form>
                <input placeholder="example"></input>
            </form>
        </div>
        )
    }
}

export default Personal