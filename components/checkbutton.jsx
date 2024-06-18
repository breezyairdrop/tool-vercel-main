import React, { useState, useEffect } from "react";

export default function StateUpdate() {
  const [state, setState] = React.useState({value: 10});

  function forceUpdate () {
      setState(prev => {
          return {...prev}
      })
  }

  useEffect(() => {
    console.log('Rerender', state);
  })

  return (
    <button onClick={forceUpdate}>Button (State update)</button>
  );
}