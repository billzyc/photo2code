const getUserInformation = async (token, updateUserContext, updateFiles) => {
  const profileRes = await fetch("http://127.0.0.1:5000/profile", {
    method: "GET",
    headers: {
      Jwt: token,
    },
  });

  const profileResponse = await profileRes.json();
  const userProfile = profileResponse["user_profile"];
  if (userProfile && userProfile.email && userProfile.id) {
    updateUserContext({
      userEmail: userProfile["email"],
      userFirstName: userProfile["first_name"],
      userLastName: userProfile["last_name"],
      userID: userProfile["id"],
    });
  }

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

export default getUserInformation;
