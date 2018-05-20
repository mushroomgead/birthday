import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {

  state = {
    dataset: []
  }

  componentDidMount() {
    fetch('http://uinames.com/api/?ext&amount=25')
    .then(response => response.json())
    .then(responseJson => this.setState({ dataset: responseJson }))
    .catch(err => console.log(err))
  }

  renderBirthday() {
    const { dataset } = this.state
    let dayObj = {
      Monday : [],
      Tuesday : [],
      Wednesday : [],
      Thursday : [],
      Friday : [],
      Saturday : [],
      Sunday : []
    }

    dataset.map((data, i) => {
      const day = moment(data.birthday.mdy).format('dddd')

      if (day) {
        dayObj[day].push(
          <div className="card" key={i}>
            <img className="image" src={data.photo} alt={data.name} />
            <span>{data.name}</span>
          </div>
        )
      }
    })

    return <div className="container-days">
      <div className="block-day">
        <span className="day">SUN</span>
        {dayObj.Sunday}
      </div>
      <div className="block-day">
        <span className="day">MON</span>
        {dayObj.Monday}
      </div>
      <div className="block-day">
        <span className="day">TUE</span>
        {dayObj.Tuesday}
      </div>
      <div className="block-day">
        <span className="day">WED</span>
        {dayObj.Wednesday}
      </div>
      <div className="block-day">
        <span className="day">THU</span>
        {dayObj.Thursday}
      </div>
      <div className="block-day">
        <span className="day">FRI</span>
        {dayObj.Friday}
      </div>
      <div className="block-day">
        <span className="day">SAT</span>
        {dayObj.Saturday}
      </div>
    </div>
  }

  render() {
    return (
      <div className="container">
        {this.renderBirthday()}
      </div>
  )}
}

export default App;
