import React, { Component } from "react";
import Goal from "./Goal";
import uuid from "uuid";

class Goals extends Component {
  render() {
    return (
      <div className="goals-container">
        {this.props.goals.map((goal, index) => (
          <Goal
            key={uuid()}
            id={this.props.goals[index]}
            title={this.props.goals[index]}
            delGoal={this.props.delGoal}
          />
        ))}
      </div>
    );
  }
}

export default Goals;
