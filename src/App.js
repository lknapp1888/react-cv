import "./App.css";
import React from "react";
import uniqid from 'uniqid';
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvOutput from "./components/CvOutput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cv: {
        personal: {
          firstName: "Lewis",
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
            startDate: "September 2012",
            endDate: "August 2015",
            achievements: "first class honours in Computer Science",
            id: uniqid()
          },
          {
            institution: "Manager University",
            startDate: "September 2015",
            endDate: "August 2016",
            achievements: "Masters degree",
            id: uniqid()
          },
        ],
        employment: [
          {
            title: 'Junior Frontend developer',
            employer: "Developer company",
            startDate: "September 2016",
            endDate: "December 2019",
            description: "job description test",
            id: uniqid(),
          },
          {
            title: 'Frontend developer',
            employer: "Fintech company",
            startDate: "February 2020",
            endDate: "present",
            description: "job description test",
            id: uniqid(),
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="App">
        <div className="inputContainer">
          <Personal></Personal>
          <Education></Education>
          <Experience></Experience>
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
