import React from 'react';

const MessageItem = (props) => {
  return (
    <div>
      <li className="list-group-item" style={{"padding": "5px 10px"}}>{props.message}</li>
    </div>
  )
}

export default MessageItem;
