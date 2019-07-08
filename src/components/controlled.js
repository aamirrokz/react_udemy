import React, { Component } from 'react';
// import '../../public/css/styles.css';

class Controlled extends Component {
  state = {
    name: '',
    lastname: '',
  };

  HandelNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  HandelLastnameChange = event => {
    this.setState({
      lastname: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form_element">
            <label>First Name</label>
            <input
              type="text"
              onChange={this.HandelNameChange}
              value={this.state.vlaue}
            />
          </div>
          <div className="form_element">
            <label>Last name</label>
            <input
              type="text"
              onChange={this.HandelLastnameChange}
              value={this.state.lastname}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Controlled;
