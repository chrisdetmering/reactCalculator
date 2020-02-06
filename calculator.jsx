import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = { 
          result: 0, 
          num1: "", 
          num2: "" 
        };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract= this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  // your code here
  setNum1(userEntry) { 
    var inputValue = userEntry.target.value; 

    if (inputValue !== "") { 
      inputValue = parseInt(inputValue);
    }

    if (isNaN(inputValue)) { 
      inputValue = `${inputValue}`;
    }

    this.setState({ num1: inputValue }); 
  }

  setNum2(userEntry) { 
    var inputValue = userEntry.target.value;

    if (inputValue !== "") { 
      inputValue = parseInt(inputValue);
    }

    if (isNaN(inputValue)) { 
      inputValue = `${inputValue}`;
    }

    this.setState({ num2: inputValue });
  }

  add(event) { 
    event.preventDefault();
    var newResult = this.state.num1 + this.state.num2;
    this.setState({ result: newResult })
  }
  subtract(event) {
    event.preventDefault();
    var newResult = this.state.num1 - this.state.num2;
    this.setState({ result: newResult })
  }

  multiply(event) {
    event.preventDefault();
    var newResult = this.state.num1 * this.state.num2;
    this.setState({ result: newResult })
  }

  divide(event) {
    event.preventDefault();
    var newResult = this.state.num1 / this.state.num2;
    this.setState({ result: newResult })
  }

  clear(event) { 
    event.preventDefault()
    this.setState({ num1: "", num2: "", result: 0 });
  }

  render() {
    const { num1, num2, result } = this.state;

    return (

      <div>
        <h1>{result}</h1> 
        <input type="text" onChange={this.setNum1} value={num1}/>
        <input type="text" onChange={this.setNum2} value={num2}/>
        <button onClick={this.clear}>Clear</button>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;