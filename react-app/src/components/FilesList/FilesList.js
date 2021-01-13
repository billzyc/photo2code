import React, { useContext } from 'react';
import { FilesContext } from '../../contexts/FilesContext';
import './FilesList.scss';

import FileTile from '../FileTile/FileTile';
import mobilePhotoSVG from '../../assets/svg/mobilePhoto.svg';

const FilesList = () => {
  const { userFiles } = useContext(FilesContext);

  const renderFileTiles = () => {
    const fileTiles = [
      <h2 key={'fileheader'} className="files-list-header">
        Files
      </h2>,
    ];
    userFiles.forEach((file) => {
      fileTiles.push(<FileTile key={file.id} file={file} />);
    });
    return fileTiles;
  };
  return (
    <div className="files-list">
      <div className="files-container">
        {userFiles?.length > 0 ? (
          renderFileTiles()
        ) : (
          <div>
            <p className="empty-file-text">
              No files saved, start taking photos to turn them into source code!
            </p>
            <img
              className="mobile-phone-img"
              src={mobilePhotoSVG}
              alt="code review"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilesList;
