import React, { useState, useRef, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import PulseLoader from "react-spinners/PulseLoader";

import "./MobileUploadForm.scss";
import closeSVG from "../../assets/svg/close.svg";
import errorSVG from "../../assets/svg/error.svg";
import uploadSVG from "../../assets/svg/upload.svg";
import getFiles from "../../utils/getFiles";
import { FilesContext } from "../../contexts/FilesContext";
import { languages } from "../../consts/languages";
import { photo2codeAPI, PHOTO2CODE_ROUTES } from "../../consts/urls";

const MobileUploadForm = ({ isMobileUploadOpen, setIsMobileUploadOpen }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileExtension, setFileExtension] = useState("");
  const [fileName, setFileName] = useState("");
  const { updateFiles } = useContext(FilesContext);
  const [cookies] = useCookies(["token"]);

  const clearComponentState = () => {
    setIsError(false);
    setIsLoading(false);
    setFileExtension("");
    setFileName("");
  };

  const onNameChange = (e) => {
    setFileName(e.currentTarget.value);
  };

  const onLanguageChange = (e) => {
    setFileExtension(languages[e.target.value]);
  };

  const hiddenFileInput = useRef(null);
  const onFakeCameraClick = (event) => {
    hiddenFileInput.current.click();
  };

  const onRealCameraChange = (event) => {
    const uploadedFile = event.target.files[0];
    submitImage(uploadedFile);
    event.target.value = null;
  };

  const submitImage = async (image) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", fileName);
    formData.append("extension", fileExtension);

    const { UPLOAD } = PHOTO2CODE_ROUTES;

    try {
      const res = await fetch(`${photo2codeAPI}${UPLOAD}`, {
        method: "POST",
        headers: {
          Jwt: cookies.token,
        },
        body: formData,
      });

      if (res.ok) {
        getFiles(cookies.token, updateFiles);
        setIsMobileUploadOpen(false);
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    } catch {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const renderLanguageDropDown = () => {
    const dropDown = [];

    Object.keys(languages).forEach((language) => {
      dropDown.push(
        <option key={language} value={language}>
          {language}
        </option>
      );
    });

    dropDown.push();
    return dropDown;
  };

  useEffect(() => {
    if (!isMobileUploadOpen) {
      setTimeout(() => {
        clearComponentState();
      }, 600);
    }
  }, [isMobileUploadOpen]);

  return (
    <div className="form-container">
      <img
        className="form-close"
        src={closeSVG}
        alt="close"
        onClick={() => {
          setIsMobileUploadOpen(false);
        }}
      />
      {isLoading ? (
        <PulseLoader size={30} />
      ) : isError ? (
        <div className="upload-error">
          <div class="error-text">
            <img src={errorSVG} alt="error" />
            <p>Unable to upload image</p>
          </div>
          <img src={uploadSVG} alt="upload" />
          <button onClick={clearComponentState}>Try Again</button>
        </div>
      ) : (
        <div className="form">
          <input
            type="text"
            className="text-input"
            onChange={(e) => {
              onNameChange(e);
            }}
            placeholder="File Name"
          />
          <select
            id="languages"
            className={`${fileExtension ? null : "empty"}`}
            name="languages"
            defaultValue=""
            required
            onChange={onLanguageChange}
          >
            <option disabled value="" hidden>
              Language
            </option>
            {renderLanguageDropDown()}
          </select>

          <button
            className={`fake-camera-input ${
              fileName && fileExtension ? null : "disabled"
            }`}
            onClick={onFakeCameraClick}
            disabled={fileName && fileExtension ? false : true}
          >
            Next
          </button>

          <input
            ref={hiddenFileInput}
            onChange={onRealCameraChange}
            className="real-camera-input"
            type="file"
            id="imageFile"
            capture="user"
            accept="image/*"
          ></input>
        </div>
      )}
    </div>
  );
};

export default MobileUploadForm;
