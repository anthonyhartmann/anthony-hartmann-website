import React from "react";

type SpacerProps = {
  size: number;
};

const Spacer: React.FC<SpacerProps> = (props) => {
  return <div className="row mb-5" style={{ height: "1em" }} />;
};

export default Spacer;
