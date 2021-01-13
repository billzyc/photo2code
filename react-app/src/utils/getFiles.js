const getFiles = async (token, updateFiles) => {
  const filesRes = await fetch("http://127.0.0.1:5000/get_files", {
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
