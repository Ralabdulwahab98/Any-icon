import React from 'react';
import UserLoginContainer from './UserLoginContainer'

export default class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggleLogin:'none',
            toggleRegister:'none',
         }
    }


    userLoginClicked = (e) => {
        console.log('history List Div click');
         if( this.state.toggleLogin === 'none'){
            this.setState({ 
                toggleLogin:'display', 
                toggleRegister:'none' }); 
         }
         else{
             this.setState({ toggleLogin:'none' }); 
         }
    }

     userRegisterClicked = (e) => {
        console.log('history List Div click');
         if( this.state.toggleRegister === 'none'){
            this.setState({ 
                toggleRegister:'display',
                toggleLogin:'none'  }); 
         }
         else{
             this.setState({ toggleRegister:'none' }); 
         }
    }

    render() { 
        return ( 
        <div>

            <ul className="d-inline-flex list-group">
                <span className="close" onClick={this.userLoginClicked } >
                    Login </span> 
                <div className= {`user-account-${this.state.toggleLogin}`}>
                        user account
                         <UserLoginContainer  /> 
                </div>
            </ul>  



            <ul className="d-inline-flex list-group">
                <span className="close" onClick={this.userRegisterClicked} >
                    Register </span> 

                <div className= {`user-account-${this.state.toggleRegister}`}>
                        new user account{/* <UserRegisterContainer  /> */}
                </div>
            </ul>   


        </div> );
    }
}
 