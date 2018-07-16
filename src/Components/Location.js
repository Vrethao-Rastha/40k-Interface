import React from 'react';

const Location = (props) => {
  return(
  <div>
    <div>{props.location.date}</div>
    <div>{props.location.author}</div>
    <div>{props.location.content}</div>
    <div>{props.location.title}</div>
    <div>{props.location.file_id}</div>
  </div>
  )
};

export default Location;
