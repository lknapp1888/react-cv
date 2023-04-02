import "./App.css";
import React from "react";
import uniqid from 'uniqid';
import Personal from "./components/Personal";
import Education, { EducationEditor } from "./components/Education";
import Experience, {ExperienceEditor} from "./components/Experience";
import CvOutput from "./components/CvOutput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updatePersonal = this.updatePersonal.bind(this)
    this.addJob = this.addJob.bind(this)
    this.updateJob = this.updateJob.bind(this)
    this.deleteJob = this.deleteJob.bind(this)
    this.addEducation = this.addEducation.bind(this)
    this.updateEducation = this.updateEducation.bind(this)
    this.deleteEducation = this.deleteEducation.bind(this)
    this.state = {
      cv: {
        personal: {
          firstName: "Joe",
          surname: "Bloggs",
          title: "Mr",
          email: "j.bloggs@email.co.uk",
          location: "London",
          phone: "01234 567 890",
          personalStatement: `Example text for a personal statement. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Pellentesque non maximus risus. Maecenas quis tempus orci. 
            Pellentesque vitae massa lectus. Nam pulvinar aliquet dolor in egestas.`,
        },
        education: [
          {
            institution: "OLD University",
            startDate: "1998-09-01",
            endDate: "2001-08-31",
            achievements: "first class honours in Computer Science",
            id: uniqid()
          },
          {
            institution: "Developer University",
            startDate: "2012-09-01",
            endDate: "2015-08-31",
            achievements: "first class honours in Computer Science",
            id: uniqid()
          },
        ],
        employment: [
          {
            title: 'Junior Frontend developer',
            employer: "Developer company",
            startDate: "2016-09-01",
            endDate: "2019-12-31",
            description: "placeholder job description.",
            id: uniqid(),
          },
          {
            title: 'another job',
            employer: "Fintech bitcoin tech bank",
            startDate: "2011-09-01",
            endDate: "2014-12-31",
            description: "placeholder job description.",
            id: uniqid(),
          },
        ],
      },
    };
  }

  updatePersonal = function (prop, val) {
    const cvCopy = this.state.cv;
    cvCopy.personal[prop] = val;
    this.setState({
      cv: cvCopy
    })
  }

  addJob = function (title, institution, startDate, endDate, description) {
    const cvCopy = this.state.cv;
   const newJob = {
      title,
      institution,
      startDate,
      endDate,
      description,
      id: uniqid()
    }
    cvCopy.employment.push(newJob)
    this.setState({
      cv: cvCopy
    })
  }

  updateJob = function (id, title, employer, startDate, endDate, description) {
    const cvCopy = this.state.cv;
    for (let i = 0; i < cvCopy.employment.length; i++) {
      if (cvCopy.employment[i].id === id) {
        cvCopy.employment[i] = {
          title,
          employer,
          startDate,
          endDate,
          description,
          id
        }
        break
      }
    }
    this.setState({
      cv: cvCopy
    })
  }

  addEducation = function (institution, startDate, endDate, achievements) {
    const cvCopy = this.state.cv;
    const newEducation = {
       institution,
       startDate,
       endDate,
       achievements,
       id: uniqid()
     }
     cvCopy.education.push(newEducation)
     this.setState({
       cv: cvCopy
     })
  }

  updateEducation = function (id, institution, startDate, endDate, achievements) {
    const cvCopy = this.state.cv;
    for (let i = 0; i < cvCopy.education.length; i++) {
      if (cvCopy.education[i].id === id) {
        cvCopy.education[i] = {
          institution,
          startDate,
          endDate,
          achievements,
          id
        }
        break
      }
    }
    this.setState({
      cv: cvCopy
    })
  }

  deleteJob = function (id) {
    const cvCopy = this.state.cv;
    const newJobArr = cvCopy.employment.filter(job => {return job.id !== id})
    cvCopy.employment = newJobArr;
    this.setState({
      cv: cvCopy
    })
  }
  deleteEducation = function (id) {
    const cvCopy = this.state.cv;
    const newEduArr = cvCopy.education.filter(edu => {return edu.id !== id})
    cvCopy.education = newEduArr;
    this.setState({
      cv: cvCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>CV Generator</h1>
        <div className="cvContainer">
          <div className="inputContainer">
            <Personal updateFunc={this.updatePersonal} ></Personal>
            <div className="experienceContainer">
              <Experience addJob={this.addJob}></Experience>
              {this.state.cv.employment.map((exp) => (
              <ExperienceEditor job={exp} updateJob={this.updateJob} deleteJob={this.deleteJob}></ExperienceEditor>
            ))}
            </div>
            <div className="educationContainer">
              <Education addEducation={this.addEducation}></Education>
              {this.state.cv.education.map((edu) => (
              <EducationEditor education={edu} updateEducation={this.updateEducation} deleteEducation={this.deleteEducation}></EducationEditor>
            ))}
            </div>
            <div className="inputSubContainer inputBtnContainer"></div>
          </div>
          <div className="outputContainer">
            <CvOutput cv={this.state.cv}></CvOutput>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
