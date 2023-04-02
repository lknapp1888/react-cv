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
                <input onChange={this.handleChange} placeholder="First Name" id="firstName" maxLength={25}></input>
                <input onChange={this.handleChange} placeholder="Surname" id="surname" maxLength={25}></input>
                <input onChange={this.handleChange} type="email" placeholder="email" id="email" maxLength={25}></input>
                <input onChange={this.handleChange} placeholder="location" id="location"></input>
                <input onChange={this.handleChange} type="tel" placeholder="Phone number" id="phone" maxLength={11}></input>
                <textarea onChange={this.handleChange} placeholder="Personal statement" id="personalStatement" maxLength={250}></textarea>
            </form>
        </div>
        )
    }
}

export default Personal