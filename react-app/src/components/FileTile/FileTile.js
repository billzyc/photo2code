import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import "./FileTile.scss";

import getFiles from "../../utils/getFiles";

import downloadSVG from "../../assets/svg/download.svg";
import fileSVG from "../../assets/svg/file.svg";
import trashSVG from "../../assets/svg/trash.svg";
import { FilesContext } from "../../contexts/FilesContext";

const FileTile = ({ file }) => {
  const [cookies] = useCookies(["token"]);
  const { updateFiles } = useContext(FilesContext);

  const downloadFile = async () => {
    const element = document.createElement("a");
    const download = new Blob([file.content], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(download);
    element.download = `${file.title}.${file.extension}`;
    document.body.appendChild(element);
    element.click();
  };

  const deleteFile = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Jwt: cookies.token },
      body: JSON.stringify({ fileID: file.id }),
    };

    await fetch("http://127.0.0.1:5000/delete_file", requestOptions);

    await getFiles(cookies.token, updateFiles);
  };

  return (
    <div className="file-tile">
      <div className="tile-content">
        <div className="tile-title">
          <img src={fileSVG} alt="file" />
          <p>{`${file.title}.${file.extension}`}</p>
        </div>

        <div className="tile-buttons">
          <img src={downloadSVG} alt="download" onClick={downloadFile} />
          <img src={trashSVG} alt="file" onClick={deleteFile} />
        </div>
      </div>
      <hr className="tile-divider" />
    </div>
  );
};

export default FileTile;
