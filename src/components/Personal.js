import React from "react";

class Personal extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = function (e) {
        this.props.updateFunc(e.target.id, e.target.value)
    }

    handleSubmit = function (e) {
        e.preventDefault()
        //save the details in browser or just remove button
    }



    render() {
        return (
        <div className="inputSubContainer personalContainer">
            <h1>Personal</h1>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} placeholder="First Name" id="firstName"></input>
                <input onChange={this.handleChange} placeholder="Surname" id="surname"></input>
                <input onChange={this.handleChange} placeholder="title" id="title"></input>
                <input onChange={this.handleChange} type="email" placeholder="email" id="email"></input>
                <input onChange={this.handleChange} placeholder="location" id="location"></input>
                <input onChange={this.handleChange} type="tel" placeholder="Phone number" id="phone"></input>
                <textarea onChange={this.handleChange} placeholder="Personal statement" id="personalStatement"></textarea>
                <button type="submit">Save (not functional)</button>
            </form>
        </div>
        )
    }
}

export default Personal