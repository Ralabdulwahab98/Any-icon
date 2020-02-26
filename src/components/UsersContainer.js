import React from 'react';
import UserLoginContainer from './UserLoginContainer'
import UserRegisterContainer from './UserRegisterContainer'

export default class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggle:'display',
            toggleLogin:'none',
            toggleRegister:'none',
            dataUsers:JSON.parse( localStorage.getItem('users') ),
         }
    }


    userLoginClicked = (e) => {
        console.log('history List Div click');
         if( this.state.toggleLogin === 'none'){
            this.setState({ 
                toggleLogin:'display', 
                toggle:'none',
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
                toggleLogin:'none' ,
                toggle:'none', }); 
         }
         else{
             this.setState({ toggleRegister:'none' }); 
         }
    }
    addUser = (user) => {
        this.setState({
            dataUsers:[...this.state.dataUsers , user]
        }, () => {
            localStorage.setItem("users",JSON.stringify( this.state.dataUsers ))
        });
    }

    render() { 
        return ( 
        <div>

            <ul className="d-inline-flex list-group">

                <span className={`users-container-${this.state.toggle}`} onClick={this.userLoginClicked } >
                    Login </span> 
                    
                <div className= {`user-account-${this.state.toggleLogin}`}>
                         <UserLoginContainer
                         UsersBD= {this.state.dataUsers} 
                         addUser= {this.addUser}
                         /> 
                </div>
            </ul>  



            <ul className="d-inline-flex list-group">
                <span className={`users-container-${this.state.toggle}`} onClick={this.userRegisterClicked} >
                    Register </span> 

                <div className= {`user-account-${this.state.toggleRegister}`}>
                        <UserRegisterContainer 
                        UsersBD= {this.state.dataUsers}  
                        addUser= {this.addUser}
                        />
                </div>
            </ul>   


        </div> );
    }
}
 