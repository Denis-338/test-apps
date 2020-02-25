import React from 'react';

import Header from '../header';
import StudentCard from '../student-card';
import StudentMarks from '../student-marks';

import './app.css';

export default class App extends React.Component {

  state = {
    name: '',
    totalMarks: 0,
    marks: [1, 2],
    valid: 0,
    notvalid: 0
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.name !== 'name' && e.target.value < 0 ? 0 : e.target.value
    });
  };

  handleButtonClick = () => {
    /*this.setState(() => {

      return {
        
      }
    });*/
  };

  render() {

    const { marks } = this.state;

    return (
      <div>
        <Header />
        <div className="row mb3 test-app">
          <div className="col-md-4">
            <StudentCard
              handleChangeInput={this.handleChangeInput}
              handleButtonClick={this.handleButtonClick} />
          </div>
          <div className="col-md-4">
            <StudentMarks count={marks} />
          </div>
          <div className="col-md-4">
            789
          </div>
        </div>
      </div>
    );
  }
}
