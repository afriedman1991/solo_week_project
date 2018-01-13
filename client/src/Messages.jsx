import React from 'react';
import MessageItem from './MessageItem.jsx';

const Messages = (props) => {
  return (
    <div>
      {
        props.AllMessages.map((item, index) => {
        return <MessageItem message={item} key={index}/>
      })}
    </div>
  )
}

export default Messages;
