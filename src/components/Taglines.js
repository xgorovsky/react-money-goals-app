import React from "react";
import picOne from "./img/undraw_1.svg";
import picTwo from "./img/undraw_2.svg";
import picThree from "./img/undraw_3.svg";

function Taglines() {
  return (
    <div className="taglines">
      <div className="tagline">
        <img src={picOne} alt="Tag" />
        <p>Keep all your life goals in one place.</p>
      </div>
      <div className="slice"></div>
      <div className="tagline">
        <img src={picTwo} alt="Tag" />
        <p>
          Track your savings,<br></br> decide which goal you should fulfill in
          the first place
        </p>
      </div>
      <div className="slice"></div>
      <div className="tagline">
        <img src={picThree} alt="Tag" />
        <p>Start right now and make your own goal map!</p>
      </div>
    </div>
  );
}

export default Taglines;
