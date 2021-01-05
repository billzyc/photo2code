import React, { useRef } from "react";
import "./CameraBar.scss";

import cameraSVG from "../../assets/svg/cameraEnhance.svg";

const CameraBar = ({ setIsMobileUploadOpen }) => {
  return (
    <div className="camera-bar">
      <button
        className="camera-button"
        onClick={() => {
          setIsMobileUploadOpen(true);
        }}
      >
        <img src={cameraSVG} alt="camera" className="camera-icon" />
      </button>
    </div>
  );
};

export default CameraBar;
