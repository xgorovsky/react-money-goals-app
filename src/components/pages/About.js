import React from "react";
import { Animated } from "react-animated-css";

const About = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid about">
        <Animated
          animationIn="fadeInUp"
          animationInDuration="750"
          isVisible={true}
        >
          <h3>
            Simple app, that lets you control how much of your savings you want
            to allocate on your particular needs
          </h3>
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationInDelay={500}
          animationInDuration={750}
          isVisible={true}
        >
          <p>
            This is page is provided only to implement react-routes in my app
            <br />
            Cheers!
          </p>
        </Animated>
      </div>
    </>
  );
};

export default About;
