import React from "react";
import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            this.setState({ count: count - 1 });
          }}
        >
          decrement
        </button>
      </div>
    );
  }
}
export default Counter;
