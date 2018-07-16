import React from 'react';

const Name = (props) => {
  return(
  <div>
    <div>{props.name.date}</div>
    <div>{props.name.author}</div>
    <div>{props.name.content}</div>
    <div>{props.name.title}</div>
    <div>{props.name.file_id}</div>
  </div>
  )
};

export default Name;
