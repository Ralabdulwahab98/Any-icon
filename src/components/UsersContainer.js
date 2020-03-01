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
            // useing users obj key from localStorage object to save data, edit or remove
            dataUsers:JSON.parse( localStorage.getItem('users') ),
         }
    }

// To display or not the Div of ( Login )  
    userLoginClicked = (e) => {
        console.log('user Login Clicked Div click');
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

// To display or not the Div of ( Register )  
     userRegisterClicked = (e) => {
        console.log('user Register Clicked List Div click');
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

// adding user to localStorage
    addUser = (user) => {
        // update the state of new user
        this.setState({
            dataUsers:[...this.state.dataUsers , user]
        }, () => {
            localStorage.setItem("users",JSON.stringify( this.state.dataUsers ))
        });
    }

// edit user name on user obj of localStorage    
    editUser =( oldName , newName)=>{
        this.state.dataUsers.map( (item)=> {


            // check if the user nsme is the same what we want to chang and it is not empty !
            if( item.usrname === oldName || oldName === ''  ){
                 item.usrname = newName ;
                const update = JSON.stringify( this.state.dataUsers );
                localStorage.setItem("users", update );
                
                // update the state of new username
                this.setState({
                    dataUsers: JSON.parse( localStorage.getItem('users') ),
                }, () => {
                    localStorage.setItem("users",JSON.stringify( this.state.dataUsers ))   
            });
        }
        })
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
                         editUser= {this.editUser}
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
 