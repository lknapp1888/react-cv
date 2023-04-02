import React from "react";
import { format, parseISO } from "date-fns";

class CvOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cv = this.props.cv;
    const sortedEmployment = cv.employment.sort(
      (a, b) => parseISO(b.endDate) - parseISO(a.endDate)
    );
    const sortedEducation = cv.education.sort(
      (a, b) => parseISO(b.endDate) - parseISO(a.endDate)
    );
    return (
      <div className="outputSubContainer">
        <div className="cvHeader">
          <div className="cvHeaderLeft">
          <h1>
              {cv.personal.firstName} {cv.personal.surname}
            </h1>
            <div>{cv.personal.personalStatement}</div>
          </div>
          <div className="cvHeaderRight">
            <p>{cv.personal.email}</p>
            <p>{cv.personal.phone}</p>
            <p>{cv.personal.location}</p>
          </div>
        </div>
        <div className="workOutputCont">
          <h2>Work Experience</h2>
          {sortedEmployment.map((job) => (
            <Job jobInfo={job}></Job>
          ))}
        </div>
        <div className="educationOutputCont">
          <h2>Education</h2>
          {sortedEducation.map((education) => (
            <Education edInfo={education}></Education>
          ))}
        </div>
      </div>
    );
  }
}

export default CvOutput;

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jobOutputContainer">
        <h4>{this.props.jobInfo.title}</h4>
        <p>{this.props.jobInfo.employer}</p>
        <p>
          {format(parseISO(this.props.jobInfo.startDate), "MMMM yyyy")} -{" "}
          {format(parseISO(this.props.jobInfo.endDate), "MMMM yyyy")}
        </p>
        <p>{this.props.jobInfo.description}</p>
      </div>
    );
  }
}

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="educationOutputContainer">
        <h4>{this.props.edInfo.institution}</h4>
        <p>
          {format(parseISO(this.props.edInfo.startDate), "MMMM yyyy")} -{" "}
          {format(parseISO(this.props.edInfo.endDate), "MMMM yyyy")}
        </p>
        <p>{this.props.edInfo.achievements}</p>
      </div>
    );
  }
}
