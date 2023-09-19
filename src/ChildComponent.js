// ChildComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

function ChildComponent() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>Context Value: {contextValue}</p>
    </div>
  );
}

export default ChildComponent;
