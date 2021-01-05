import React, {createContext, Component} from 'react';

export const FilesContext = createContext();

class FilesContextProvider extends Component{
    state ={
        userFiles: []
    }

    updateFiles = (files) =>{
        this.setState({userFiles: [...files]})
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