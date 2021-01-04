const getProfile = async (token, updateUserContext) => {
  const res = await fetch("http://127.0.0.1:5000/profile", {
    method: "GET",
    headers: {
      Jwt: token,
    },
  });

  const apiResponse = await res.json();
  const userProfile = apiResponse["user_profile"];
  if (userProfile && userProfile.email && userProfile.id) {
    updateUserContext({
      userEmail: userProfile["email"],
      userFirstName: userProfile["first_name"],
      userLastName: userProfile["last_name"],
      userID: userProfile["id"],
    });
  }
};

export default getProfile;
