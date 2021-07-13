//!its a component
import React from "react";

const Loading = () => {
  return (
    <div
      className="position-fixed w-100 h-100 text-center loading"
      style={{
        background: "#0008",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          points="20,1 40,40 1,40"
        />
        <text fill="#fff" x="5" y="47">
          Loading
        </text>
      </svg>

    </div>
    
  );
};

export default Loading;
