import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";

import "./UploadForm.scss";

function UploadForm() {
  const [fileLanguage, setFileLanguage] = useState("");
  const [fileName, setFileName] = useState("");
  const [cookies] = useCookies(["token"]);
  const { register, handleSubmit } = useForm();

  const onNameChange = (e) => {
    setFileName(e.currentTarget.value);
  };

  const onLanguageChange = (e) => {
    setFileLanguage(e.currentTarget.value);
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.picture[0]);
    formData.append("name", fileName);
    formData.append("language", fileLanguage);

    const res = await fetch("http://127.0.0.1:5001/upload", {
      method: "POST",
      headers: {
        "Jwt": cookies.token
      },
      body: formData,
    });

    const apiResponse = await res.json();
    console.log(apiResponse);
  };

  return (
    <div className="form">
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type="file" name="picture" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default UploadForm;
