import "./App.css";
import React from "react";
import uniqid from 'uniqid';
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience, {ExperienceEditor} from "./components/Experience";
import CvOutput from "./components/CvOutput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updatePersonal = this.updatePersonal.bind(this)
    this.addJob = this.addJob.bind(this)
    this.updateJob = this.updateJob.bind(this)
    this.addEducation = this.addEducation.bind(this)
    this.state = {
      cv: {
        personal: {
          firstName: "",
          surname: "Knapp",
          title: "Mr",
          email: "lewis@email.co.uk",
          location: "London",
          phone: "07123 435 323",
          personalStatement: `Example text for a personal statement. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Pellentesque non maximus risus. Maecenas quis tempus orci. 
            Pellentesque vitae massa lectus. Nam pulvinar aliquet dolor in egestas.`,
        },
        education: [
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
            description: "job description test",
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
        console.log('idennnnn')
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

  render() {
    return (
      <div className="App">
        <div className="inputContainer">
          <Personal updateFunc={this.updatePersonal} ></Personal>
          <div className="experienceContainer">
            <Experience addJob={this.addJob}></Experience>
            <ExperienceEditor updateJob={this.updateJob} job={this.state.cv.employment[0]}></ExperienceEditor>
          </div>
          <div className="educationContainer">
            <Education addEducation={this.addEducation}></Education>
          </div>
          <div className="inputSubContainer inputBtnContainer"></div>
        </div>
        <div className="outputContainer">
          <CvOutput cv={this.state.cv}></CvOutput>
        </div>
      </div>
    );
  }
}

export default App;
