import { ReactElement } from "react";

const Host = (): ReactElement => {
  console.log("host");
  return (
    <div className="page">
      <h1>I am Host Component</h1>
    </div>
  );
};

export default Host;
