import { photo2codeAPI, PHOTO2CODE_ROUTES } from '../consts/urls';

const getUserInformation = async (token, updateUserContext, updateFiles) => {
  const { PROFILE, GET_FILES} = PHOTO2CODE_ROUTES;

  const profileRes = await fetch(`${photo2codeAPI}${PROFILE}`, {
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

export default getUserInformation;
