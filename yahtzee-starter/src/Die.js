import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    dieString: [ 
      'one',
      'two',
      'three',
      'four',
      'five',
      'six'
    ],
    val: Math.floor(Math.random() * 6)
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }  
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { isRolling, val, locked, disabled, dieString} = this.props;
    let classes = `Die fas fa-dice-${dieString[val - 1]}`;
    if (locked) classes += " Die-locked ";
    if (isRolling) classes += " Die-rolling ";
    return (
      <i
          className={classes}
          onClick={isRolling ? "disabled" : this.handleClick}
          disabled={disabled}
        />
    );
  }
}

export default Die;
