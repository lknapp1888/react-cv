import React from "react";
import { format, parseISO } from "date-fns";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.addJob = this.addJob.bind(this);
    this.state = {
      title: "",
      employer: "",
      startDate: "",
      endDate: "",
      description: "",
    };
  }

  addJob = function (e) {
    e.preventDefault();
    this.props.addJob(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value,
      e.target[4].value
    );
    this.setState({
      title: "",
      employer: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  render() {
    return (
      <div className="inputSubContainer experienceSubContainer">
        <h1>Work experience</h1>
        <form onSubmit={this.addJob}>
          <input
            placeholder="Job title"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            required
          ></input>
          <input
            placeholder="Employer"
            value={this.state.employer}
            onChange={(e) => this.setState({ employer: e.target.value })}
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
          <textarea
            placeholder="brief description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          ></textarea>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Experience;

export class ExperienceEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateJob = this.updateJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this)
    this.state = {
      title: this.props.job.title,
      employer: this.props.job.employer,
      startDate: this.props.job.startDate,
      endDate: this.props.job.endDate,
      description: this.props.job.description,
    };
  }

  updateJob = function (e) {
    e.preventDefault();
    this.props.updateJob(
      this.props.job.id,
      this.state.title,
      this.state.employer,
      this.state.startDate,
      this.state.endDate,
      this.state.description
    );
  };

  deleteJob = function (e) {
    e.preventDefault()
    this.props.deleteJob(this.props.job.id)
  }

  render() {
    return (
      <div className="inputSubContainer editExperienceSubContainer">
        <h3>
          {this.state.employer} - {this.state.title}
        </h3>
        <form onSubmit={this.updateJob}>
          <input
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            placeholder='job title'
            required
          ></input>
          <input
            value={this.state.employer}
            onChange={(e) => this.setState({ employer: e.target.value })}
            placeholder='company/employer'
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
          <textarea
            placeholder="brief description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
            placeholder='job description'
          ></textarea>
          <button type="submit" id={this.props.job.id}>
            update
          </button>
          <button onClick={this.deleteJob}>Delete</button>
        </form>
      </div>
    );
  }
}
