import React, { Component } from 'react';
import Hobbies from './components/Hobbies';
import Greeting from './components/Greeting';
import Time from './components/Time';

class Application extends Component {
constructor(props) {
    super(props);
    this.state = {
        username: 'abc'
    };
    this.handleChange = this.handleChange.bind(this);
}

componentDidMount() {
    this.textInput.focus();
}
handleChange(e) {
  this.setState({
      username: e.target.value
  });
}

render() {
  const children = this.props.children;
  const hobbies = this.props.user.hobbies;
  const username = this.state.username;
  return (
      <div>
          <h1 className="main-heading">
              <Greeting name={this.props.user.name}/>
              {this.state.username}
              <Time />
          </h1>
          <div>{this.props.children}</div>
          <input 
              type="text" 
              placeholder="username"                     
              defaultValue={username}
              onChange={this.handleChange} 
          ref={(input) => { this.textInput = input; }}/>
          <Hobbies hobbies={hobbies}/>
      </div>
  );
}
}

export default Application;