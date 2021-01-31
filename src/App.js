import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

//you should be using hooks! simplifies so much logic...
//use useContext over createContext!
//you will still use the same Provider and Consumer though, that doesnt
//change

//this resolves prop drilling! (passing props layers deep from parent
//to child)

//Context is like a global variable...the provider is in app
//the consumer is in child component
export const ThemeContext = React.createContext();

function App() {
  // setting default state to red (1)
  const [theme, setTheme] = useState("red");
  return (
    // setting background color to theme (3)...we can use styles
    //variable in our children components, to get this color
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter initialCount={4} />
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          //javascript does type inference, so we which from true to false
          // set state goes to theme (2)
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        {" "}
        Toggle Theme{" "}
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
