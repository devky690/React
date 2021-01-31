import React, { Component } from "react";

//component rendering:
//goes from counter to app to index.js to index.html

//this.props is based on the attributes that we pass in from app.js and
//every single class component can have that
export default class Counter extends Component {
  //state makes applications interactive
  constructor(props) {
    //makes sure props get set properly every single time you
    //override your constructor
    super(props);

    this.state = {
      //came from app.js as an attribute
      count: props.initialCount,
    };
  }

  //state only rerenders when its updated, the actual app doesnt
  //re render, just the components passed into app that have their
  //states changed

  //app gets rendered into root
  render() {
    //fragment or div wraps around html elements - this is just jsx syntax
    return (
      // class key is reserved in react, so we have to use className instead
      //for styling
      //jsx needs to be self closed or closed with another tag! unlike html!
      //other than that, just like html
      <div>
        <button onClick={() => this.changeCount(-1)} className="btn">
          -
        </button>
        {/*use { this.props.initialCount } if your not using state */}
        {/* if changing state us this.state ! */}
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(+1)}>+</button>
      </div>
    );
  }

  //this is how we utlizie on click and change or state
  //use functions to change state after initializing in constructor
  changeCount(amount) {
    //this.setState has two versions - an object version (if using this
    //the after setState function would overwrite previous and count would
    //stay the same as the code runs asynchronously)
    // this.setState({ count: this.state.count + amount });
    // this.setState({ count: this.state.count + amount });

    //other version, is prevState...you need to use the function version
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
    //if using two state functions in same function then it would double
    //try adding the same setState function directly above to here
    //(we are calling the same function!)
  }
}
