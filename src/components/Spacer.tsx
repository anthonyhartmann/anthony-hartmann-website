import React from "react";

type SpacerProps = {
  size: number;
};

const Spacer: React.FC<SpacerProps> = (props) => {
  const cssSize = props.size.toString() + "em";
  return <div className="row mb-5" style={{ height: cssSize }} />;
};

export default Spacer;
