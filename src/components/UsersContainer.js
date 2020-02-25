import React from 'react';


export default class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggleLogin:'none',
            toggleRegister:'none',
         }
    }


    userRegisterClicked = (e) => {
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

    userLoginClicked = (e) => {
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
                <span className="close" onClick={this.userRegisterClicked} >
                    Login </span> 
                <div className= {`user-account-${this.state.toggleLogin}`}>
                        user account{/* <UsersLoginContainer  /> */}
                </div>
            </ul>  



            <ul className="d-inline-flex list-group">
                <span className="close" onClick={this.userLoginClicked} >
                    Register </span> 

                <div className= {`user-account-${this.state.toggleRegister}`}>
                        new user account{/* <UsersContainer  /> */}
                </div>
            </ul>   


        </div> );
    }
}
 