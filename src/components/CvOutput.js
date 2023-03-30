import React from "react";

class CvOutput extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="outputSubContainer">
            <div className="cvHeader">
                <h1>Name in big text</h1>
                <div className="cvHeaderSubContainer">
                    <p>email</p>
                    <p>phone</p>
                    <p>location</p>
                </div>
            </div>
            <div>Personal statement...........</div>
            <div className="workOutputCont">
                <h2>Work Experience</h2>
                <div>Job 1 (create a job Component)....</div>
            </div>
            <div className="educationOutputCont">
            <h2>Education</h2>
            <div>Job 1 (create an education Component)....</div>
            </div>
        </div>
        )
    }
}

export default CvOutput