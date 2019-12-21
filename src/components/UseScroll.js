import React from "react";

const useScroll = () => {
  const htmlElRef = React.createRef();
  const executeScroll = () => window.scrollTo(0, htmlElRef.current.offsetTop);

  return { executeScroll, htmlElRef };
};

export default useScroll;
