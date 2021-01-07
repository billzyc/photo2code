import React, { useContext } from "react";
import { FilesContext } from "../../contexts/FilesContext";
import "./FilesList.scss";

import FileTile from "../FileTile/FileTile";

const FilesList = () => {
  const { userFiles } = useContext(FilesContext);

  const renderFileTiles = () => {
    const fileTiles = [];
    userFiles.forEach((file) => {
      fileTiles.push(<FileTile file={file} />);
    });
    return fileTiles;
  };
  return <div>{userFiles?.length > 0 ? renderFileTiles() : <p>Start uploading Files!</p>}</div>;
};

export default FilesList;
