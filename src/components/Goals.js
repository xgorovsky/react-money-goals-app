import React from "react";
import Goal from "./Goal";
import uuid from "uuid";
import { Animated } from "react-animated-css";

const Goals = props => {
  return (
    <div ref={props.refProp} className="goals-container">
      {props.goals.map((goal, index) => (
        <Animated
          key={uuid()}
          animationIn="fadeIn"
          animationInDuration={500}
          isVisible={true}
        >
          <Goal
            id={props.goals[index]}
            title={props.goals[index]}
            delGoal={props.delGoal}
          />
        </Animated>
      ))}
    </div>
  );
};

export default Goals;
