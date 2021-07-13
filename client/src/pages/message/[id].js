import React from "react";
import LeftSide from "../../components/message/LeftSide";
import RightSide from "../../components/message/RightSide";

const Conversation = () => {
  return (
    <div className="message d-flex">
      <div className="col-md-4 px-0" style={{ borderRight: "1px solid #ddd" }}>
        <LeftSide />
      </div>

      <div className="col-md-8 px-0">
        <RightSide /> 
      </div>
    </div>
  );
};

export default Conversation;
