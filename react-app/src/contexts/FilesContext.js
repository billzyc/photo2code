import React, { createContext, Component } from "react";

export const FilesContext = createContext();

class FilesContextProvider extends Component {
  state = {
    userFiles: [],
  };

  updateFiles = (files) => {
    this.setState({ userFiles: [...files] });
  };

  clearFiles = () => {
    this.setState({ userFiles: [] });
  };

  render() {
    return (
      <FilesContext.Provider
        value={{
          ...this.state,
          updateFiles: this.updateFiles,
          clearFiles: this.clearFiles,
        }}
      >
        {this.props.children}
      </FilesContext.Provider>
    );
  }
}

export default FilesContextProvider;
