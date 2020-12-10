import React from "react";
import "../style/loading.scss";
export default function Loading() {
  return (
    <>
      <div className="loading-page">
        <div className="loader" />
        <h4 className="loading-title">Loading ...</h4>
      </div>
    </>
  );
}
