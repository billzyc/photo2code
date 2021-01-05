import React, { useState } from "react";
import "./Files.scss";
import CameraBar from "../../components/CameraBar/CameraBar";
import MobileUploadForm from "../../components/MobileUploadForm/MobileUploadForm";

function Files() {
  const [isMobileUploadOpen, setIsMobileUploadOpen] = useState(false);
  
  return (
    <div className="files">
      Files here
      <div className="camera-bar-container">
        <CameraBar setIsMobileUploadOpen={setIsMobileUploadOpen} />
      </div>
      <div className={`mobile-upload-form-container ${isMobileUploadOpen ? "active" : ""}`}>
          <MobileUploadForm setIsMobileUploadOpen={setIsMobileUploadOpen}/>
        </div>
    </div>
  );
}

export default Files;
