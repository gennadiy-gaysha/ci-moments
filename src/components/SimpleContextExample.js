import React, { createContext, useContext } from "react";

// Step 1: Create a Context
// create a context  object in the parent component
const MyContext = createContext();

const MyComponent = () => {
  return (
    // Step 2: Provide the Context Value
    // wrap the children  in the context object provider,
    // we have to pass in the data you'd like the  children
    // components to access in the value prop
    <MyContext.Provider value={"Hello from Context!"}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Step 3: Use useContext to Consume the Context
// access that value in a child component
// use the use context hook and  call it with the context object
const ChildComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};

export default MyComponent;
