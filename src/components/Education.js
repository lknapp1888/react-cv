import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.addEducation = this.addEducation.bind(this);
    this.state = {
      institution: "",
      startDate: "",
      endDate: "",
      achievements: "",
    };
  }

  addEducation = function (e) {
    e.preventDefault();
    this.props.addEducation(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    );
    this.setState({
      institution: "",
      startDate: "",
      endDate: "",
      achievements: "",
    });
  };

  render() {
    return (
      <div className="inputSubContainer educationSubContainer">
        <h1>Educational experience</h1>
        <form onSubmit={this.addEducation}>
          <input
            placeholder="Institution"
            value={this.state.institution}
            onChange={(e) => this.setState({ institution: e.target.value })}
            maxLength={40}
            required
          ></input>
          <label>
            Start date:{" "}
            <input
              type="date"
              value={this.state.startDate}
              onChange={(e) => this.setState({ startDate: e.target.value })}
              required
            ></input>
          </label>
          <label>
            End date:{" "}
            <input
              type="date"
              value={this.state.endDate}
              onChange={(e) => this.setState({ endDate: e.target.value })}
              required
            ></input>
          </label>
          <input
            placeholder="achievements/degree classification"
            value={this.state.achievements}
            onChange={(e) => this.setState({ achievements: e.target.value })}
            maxLength={60}
          ></input>
          <div className="btnContainer"><button className="addBtn">Add</button></div>
        </form>
      </div>
    );
  }
}

export default Education;

export class EducationEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateEducation = this.updateEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this)
    this.state = {
      institution: this.props.education.institution,
      startDate: this.props.education.startDate,
      endDate: this.props.education.endDate,
      achievements: this.props.education.achievements,
    };
  }

  updateEducation = function (e) {
    e.preventDefault();
    this.props.updateEducation(
      this.props.education.id,
      this.state.institution,
      this.state.startDate,
      this.state.endDate,
      this.state.achievements
    );
  };

  deleteEducation = function (e) {
    e.preventDefault()
    this.props.deleteEducation(this.props.education.id)
  } 

  render() {
    return (
      <div className="inputSubContainer editEducationSubContainer">
        <h3>{this.state.institution}</h3>
        <form onSubmit={this.updateEducation}>
          <input
            value={this.state.institution}
            onChange={(e) => this.setState({ institution: e.target.value })}
            placeholder="Institution"
            maxLength={40}
            required
          ></input>
          <label>
            Start date:{" "}
            <input
              type="date"
              value={this.state.startDate}
              onChange={(e) => this.setState({ startDate: e.target.value })}
              required
            ></input>
          </label>
          <label>
            End date:{" "}
            <input
              type="date"
              value={this.state.endDate}
              onChange={(e) => this.setState({ endDate: e.target.value })}
              required
            ></input>
          </label>
          <input
            value={this.state.achievements}
            onChange={(e) => this.setState({ achievements: e.target.value })}
            placeholder="achievements/degree classification"
            maxLength={60}
            required
          ></input>
          <div className="btnContainer">
              <button type="submit" id={this.props.education.id} className='updateBtn'>
                update
              </button>
              <button onClick={this.deleteEducation} className='deleteBtn'>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}
