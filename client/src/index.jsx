import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages.jsx';
import UserTyping from './UserTyping.jsx'
import io from '../../node_modules/socket.io-client/dist/socket.io.js'
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userMessage: '',
      isTyping: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.isTyping = this.isTyping.bind(this);
  };

  componentDidMount() {
    let socket = io();
      socket.on('chat message', (msg) => {
        console.log('made it to socket.on in componentDidMount', msg)
        let temp = this.state.messages.slice();
        temp.push(msg);
        this.setState({
          messages: temp
        });
      });
  }

  handleClick(e) {
    let socket = io();
    this.setState({
      userMessage: $('#m').val(),
      isTyping: false
    })
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
  }

  isTyping(e) {
    if (e.target.value.length > 0) {
      this.setState({
        isTyping: true
      });
    } else {
      this.setState({
        isTyping: false
      })
    }
  };

  render() {
    return (
      <div className="container">
        <ul className="list-group" style={{"listStyleType": "none", "margin": 0, "padding": 0}}>
          <form style={{"background": "#000", "padding": "3px", "position": "fixed", "bottom": 0, "width": "50%"}} action="">
            <Messages AllMessages={this.state.messages} IsTyping={this.state.isTyping}/>
            <input onChange={this.isTyping} id="m" className="form-control" type="text" placeholder="Your message here..." autoComplete="off" />
            <button onClick={this.handleClick} type="button" className="btn btn-primary">Send</button>
          </form>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
