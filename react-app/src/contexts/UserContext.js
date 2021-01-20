import React, { createContext, Component } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    userEmail: "",
    userFirstName: "",
    userLastName: "",
    userID: "",
  };

  updateUserContext = (userProfile) => {
    this.setState({ ...this.state, ...userProfile });
  };

  clearUserContext = () => {
    const defaultState = {
      userEmail: "",
      userFirstName: "",
      userLastName: "",
      userID: "",
    };
    this.setState({ ...defaultState });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          updateUserContext: this.updateUserContext,
          clearUserContext: this.clearUserContext,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
