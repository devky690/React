// not using class component so dont import component
//class components cant use hooks, but functional components can
import React, { useState } from "react";

//you can use object destructuring to pass exact attribute names
//from app to child component (we passed initalCount prop)

//state should be at the top of a function and they cant
//be inside conditionals or else react wouldnt be able to recogize
//the hook (no one thinks this way anyway)

export default function CounterHooks({ initialCount }) {
  //these first two names can be anything
  //if we pass in prop, count isnt a property but a value for the
  //state so we just say count unlike the method below
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}
//useState returns state as an array...1st thing it returns
//is our state which is an object with properties (count in our case)
//second thing returned is a function that allows us to set our state
//useState is doing the same thing as the constructor from counter! just
//in a cleaner way
//   const [state, setState] = useState({ count: initialCount });
/* need to use prevState because setState is asynchronous
so it needs the previous count....this would be if they are
in the same block like in our Count component, i just showed the first
//one as an example below...how it would look
*/
/* <button
onClick={() =>
    setState((prevState) => {
      return { count: prevState.count - 1 };
    })
  }
>
  -{" "}
</button>
<span>{state.count}</span>
<button onClick={() => setState({ count: state.count + 1 })}>+</button>
</div> */
