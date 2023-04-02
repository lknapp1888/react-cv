import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.addEducation = this.addEducation.bind(this)
        this.state = {
            institution: '',
            startDate: '',
            endDate: '',
            achievements: '',
        }
    }

    addEducation = function (e) {
        e.preventDefault();
        this.props.addEducation(
          e.target[0].value,
          e.target[1].value,
          e.target[2].value,
          e.target[3].value,
        );
        this.setState({
            institution: '',
            startDate: '',
            endDate: '',
            achievements: '',
        })
    }

    render() {
        return (
        <div className="inputSubContainer educationSubContainer">
            <h1>Educational experience</h1>
            <form onSubmit={this.addEducation}>
                <input placeholder="Institution" value={this.state.institution} onChange={e => this.setState({institution: e.target.value})} required></input>
                <label>Start date: <input type="date" value={this.state.startDate} onChange={e => this.setState({startDate: e.target.value})}required></input></label>
                <label>End date: <input type="date" value={this.state.endDate} onChange={e => this.setState({endDate: e.target.value})}required></input></label>
                <input placeholder="achievements/degree classification..." value={this.state.achievements} onChange={e => this.setState({achievements: e.target.value})}></input>
                <button>Add</button>
            </form>
        </div>
        )
    }
}

export default Education