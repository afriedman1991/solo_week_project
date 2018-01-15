import React from 'react';
import MessageItem from './MessageItem.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

render() {
    console.log('console.log this.props in Messages.jsx',this.props)
    return (
      <div>
        {
          this.props.AllMessages.map((item, index) => {
            console.log('map is running in Messages.jsx')
            return <MessageItem message={item} key={index}/>
          })
        }
        {this.props.IsTyping ? (
          <div>
            <li className="list-group-item" style={{"padding": "5px 10px"}}>A user is typing...</li>
          </div>
        ) : null
      }
    </div>

  )
 }
}

export default Messages;
