import React, { useState, useRef, useContext } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";

import "./MobileUploadForm.scss";
import closeSVG from "../../assets/svg/close.svg";
import getFiles from "../../utils/getFiles";
import { FilesContext } from "../../contexts/FilesContext";
import { languages } from "../../consts/languages";

const MobileUploadForm = ({ setIsMobileUploadOpen }) => {
  const [fileLanguage, setFileLanguage] = useState("");
  const [fileName, setFileName] = useState("");
  const { updateFiles } = useContext(FilesContext);
  const [cookies] = useCookies(["token"]);

  const onNameChange = (e) => {
    setFileName(e.currentTarget.value);
  };

  const onLanguageChange = (e) => {
    setFileLanguage(e.target.value);
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

  const renderLanguageDropDown = () => {
    const dropDown = [];

    Object.keys(languages).forEach((language) => {
      dropDown.push(<option value={language}>{language}</option>);
    });

    dropDown.push();
    return dropDown;
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
        className="text-input"
        onChange={(e) => {
          onNameChange(e);
        }}
        placeholder="File Name"
      />
      <select id="languages" className={`${fileLanguage? null : 'empty'}`} name="languages" required onChange={onLanguageChange}>
        <option disabled value="" selected hidden>
          Language
        </option>
        {renderLanguageDropDown()}
      </select>
      {/* <input
        type="text"
        className="text-input"
        onChange={(e) => {
          onLanguageChange(e);
        }}
        placeholder="Language"
      /> */}

      <button className={`fake-camera-input ${fileName && fileLanguage ? null: 'disabled'}`} onClick={onFakeCameraClick} disabled={fileName && fileLanguage ? false: true}>
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
