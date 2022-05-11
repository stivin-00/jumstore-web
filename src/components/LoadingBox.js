import React from "react";

export default function LoadingBox() {
  return (
    <div className="loading" style={{ color: "#4E0352", fontSize: "20px" }}>
      <i className="fa fa-spinner fa-spin"></i> Loading...
    </div>
  );
}
