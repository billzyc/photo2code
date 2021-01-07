import React from "react";
import { useCookies } from "react-cookie";
import "./FileTile.scss";

import downloadSVG from "../../assets/svg/download.svg";
import fileSVG from "../../assets/svg/file.svg";

const FileTile = ({ file }) => {
  const [cookies, setCookie] = useCookies(["token"]);

  const downloadFile = async () => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Jwt: cookies.token },
    //   body: JSON.stringify({ fileID: file.id }),
    // };

    // const apiResponse = await fetch(
    //   "http://127.0.0.1:5000/download-file",
    //   requestOptions
    // );

    const element = document.createElement("a");
    const download = new Blob([file.content], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(download);
    element.download = `${file.title}.${file.language}`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="file-tile">
      <div className="tile-content">
        <div className="tile-title">
          <img src={fileSVG} alt="file" />
          <p>{`${file.title}.${file.language}`}</p>
        </div>

        <div className="tile-buttons">
          <img src={downloadSVG} alt="download" onClick={downloadFile} />
        </div>
      </div>
      <hr className="tile-divider" />
    </div>
  );
};

export default FileTile;
