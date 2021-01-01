import React, {createContext, Component} from 'react';

export const FilesContext = createContext();

class FilesContextProvider extends Component{
    state ={
        files: []
    }

    updateFiles = (files) =>{
        this.setState({files: [...files]})
    } 

    render(){
        return(
            <FilesContext.Provider value={{...this.state, updateFiles: this.updateFiles}}>
                {this.props.children}
            </FilesContext.Provider>
        );
    }
}

export default FilesContextProvider;