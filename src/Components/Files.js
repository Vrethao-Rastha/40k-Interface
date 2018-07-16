import React from 'react';

const Files = (props) => {
  console.log('file props', props)
  return(
  <div>
    <div>{props.file.date}</div>
    <div>{props.file.author}</div>
    <div>{props.file.content}</div>
    <div>{props.file.title}</div>
    <div>{props.file.file_id}</div>


  </div>
  )
};

export default Files;
