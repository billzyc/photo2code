import React, { useState, useRef, useContext } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";

import "./MobileUploadForm.scss";
import closeSVG from "../../assets/svg/close.svg";
import getFiles from "../../utils/getFiles";
import { FilesContext } from "../../contexts/FilesContext";

const MobileUploadForm = ({ setIsMobileUploadOpen }) => {
  const [fileLanguage, setFileLanguage] = useState("");
  const [fileName, setFileName] = useState("");
  const { updateFiles } = useContext(FilesContext);
  const [cookies] = useCookies(["token"]);

  const onNameChange = (e) => {
    setFileName(e.currentTarget.value);
  };

  const onLanguageChange = (e) => {
    setFileLanguage(e.currentTarget.value);
  };

  const hiddenFileInput = useRef(null);
  const onFakeCameraClick = (event) => {
    hiddenFileInput.current.click();
  };

  const onRealCameraChange = (event) => {
    const uploadedFile = event.target.files[0];
    submitImage(uploadedFile);
  };

  const submitImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", fileName);
    formData.append("language", fileLanguage);

    const res = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      headers: {
        Jwt: cookies.token,
      },
      body: formData,
    });

    //TODO: Add success, fail and loading states

    if (res.ok) {
      getFiles(cookies.token, updateFiles);
      setIsMobileUploadOpen(false);
    }
  };

  return (
    <div className="form">
      <img
        className="form-close"
        src={closeSVG}
        alt="close"
        onClick={() => {
          setIsMobileUploadOpen(false);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          onNameChange(e);
        }}
        placeholder="File Name"
      />
      <input
        type="text"
        onChange={(e) => {
          onLanguageChange(e);
        }}
        placeholder="Language"
      />
      <button className="fake-camera-input" onClick={onFakeCameraClick}>
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
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type="file" name="picture" />

        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default MobileUploadForm;
