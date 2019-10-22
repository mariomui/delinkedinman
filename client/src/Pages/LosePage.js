import React from 'react';
import { Redirect } from 'react-router-dom';


export const LosePage = (props) => {
  console.log(props);
  const redirect = () => {
    props.history.push('/');
  }
  return (
    <div>
      you lost
    <button onClick={redirect} >YOu LOST</button>
    </div >
  );
}

