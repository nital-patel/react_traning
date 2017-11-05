import React, { Component } from 'react';

function Hobbies({hobbies}) {
    return (
        <ul>
            {
                hobbies.map((hobbie, index)=> {
                    return (<li key={index}>{hobbie}</li>);
                })
            }
        </ul>
    );
};

function Greeting({name}) {
    return "Hello " + (name ? name : 'Stranger');
}
// Greeting.propTypes = {
//     name: PropTypes.string.isRequired
// };

class Time extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentTime: new Date().toString()
      };
  }

  componentWillMount() {
      setInterval(()=> {
          this.setState({
              currentTime: new Date().toString()
          });
      }, 1000);
  }
  render() {
    return (
        <div>The current time is {this.state.currentTime}</div>
    )
}
}

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