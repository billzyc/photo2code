import React, {createContext, Component} from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component{
    state ={
        userEmail: 'hi',
        userFirstName: '',
        userLastName: '',
        userID:''
    }

    updateUserContext = (userProfile) =>{
        const newState = {...this.state, ...userProfile}
        console.log(newState)
        this.setState({...this.state, ...userProfile})
    } 

    render(){
        return(
            <UserContext.Provider value={{...this.state, updateUserContext: this.updateUserContext}}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;