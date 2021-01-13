import { photo2codeAPI, PHOTO2CODE_ROUTES } from '../consts/urls';

const getFiles = async (token, updateFiles) => {
  const { GET_FILES } = PHOTO2CODE_ROUTES;
  const filesRes = await fetch(`${photo2codeAPI}${GET_FILES}`, {
    method: "GET",
    headers: {
      Jwt: token,
    },
  });

  const filesResponse = await filesRes.json();

  if (filesResponse["files"]) {
    updateFiles(filesResponse["files"]);
  }
};

export default getFiles;
