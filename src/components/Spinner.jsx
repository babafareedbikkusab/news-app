import React from "react";
import loading from "../loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      {/* Apply inline style to resize */}
      <img
        src={loading}
        alt="Loading..."
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Spinner;
