// App.js
import React from 'react';
import MyContext from './MyContext';
import ChildComponent from './ChildComponent';

function App() {
  const contextValue = "Hello from Context!";

  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

export default App;
