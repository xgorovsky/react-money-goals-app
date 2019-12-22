import React, { Component } from "react";
import Goal from "./Goal";
import uuid from "uuid";
import { Animated } from "react-animated-css";

class Goals extends Component {
  render() {
    return (
      <div ref={this.props.refProp} className="goals-container">
        {this.props.goals.map((goal, index) => (
          <Animated
            animationIn="fadeIn"
            animationInDuration="500"
            isVisible={true}
          >
            <Goal
              key={uuid()}
              id={this.props.goals[index]}
              title={this.props.goals[index]}
              delGoal={this.props.delGoal}
            />
          </Animated>
        ))}
      </div>
    );
  }
}

export default Goals;
