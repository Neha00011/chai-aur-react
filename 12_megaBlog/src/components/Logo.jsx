import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src="data:image/jpeg;base64,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"></img>
    </div>
  );
}

export default Logo;
