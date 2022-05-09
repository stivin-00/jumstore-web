import React from "react";

export default function LoadingBox() {
  return (
    <div className="loading" style={{ color: "#3b1369", fontSize: "20px" }}>
      <i className="fa fa-spinner fa-spin"></i> Loading...
    </div>
  );
}
