import React from "react";

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="inputSubContainer personalContainer">
            <h1>Personal</h1>
            <form>
                <input placeholder="First Name"></input>
                <input placeholder="Surname"></input>
                <input placeholder="title"></input>
                <input type="email" placeholder="email"></input>
                <input placeholder="Address (find api?)"></input>
                <input type="tel" placeholder="Phone number"></input>
                <textarea placeholder="Personal statement"></textarea>
                <button>Save (not functional)</button>
            </form>
        </div>
        )
    }
}

export default Personal