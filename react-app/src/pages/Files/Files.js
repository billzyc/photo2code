import React, { useContext, useState } from "react";
import "./Files.scss";
import CameraBar from "../../components/CameraBar/CameraBar";
import MobileUploadForm from "../../components/MobileUploadForm/MobileUploadForm";
import FilesList from '../../components/FilesList/FilesList'
import { FilesContext } from "../../contexts/FilesContext";

function Files() {
  const [isMobileUploadOpen, setIsMobileUploadOpen] = useState(false);

  return (
    <div className="files">
      <FilesList/>
      <div className="camera-bar-container">
        <CameraBar setIsMobileUploadOpen={setIsMobileUploadOpen} />
      </div>
      <div
        className={`mobile-upload-form-container ${
          isMobileUploadOpen ? "active" : ""
        }`}
      >
        <MobileUploadForm setIsMobileUploadOpen={setIsMobileUploadOpen} />
      </div>
    </div>
  );
}

export default Files;
