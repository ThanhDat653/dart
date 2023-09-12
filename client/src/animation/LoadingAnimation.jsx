import React from "react";
import "./animationStyle.css";

const LoadingAnimation = () => {
   return (
      <div className="load-wrapp">
         <div className="load-4">
            <p>Loading</p>
            <div className="ring-1" />
         </div>
      </div>
   );
};

export default LoadingAnimation;
