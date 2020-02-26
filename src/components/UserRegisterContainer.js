import React from 'react';
import UserAccount from './UserAccount';

export default class UserRegisterContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleLog:'disply',
            usrnameInput: '',
            passwordInput: '',
            history:['history search'],
            userPassed:false,
        };

    }

    usrnameInputChange = (e) => { 
        this.setState({  usrnameInput: e.target.value, });
        // e.target.defaultValue=''   
    }
    passwordInputChange = (e) => { 
        this.setState({  passwordInput: e.target.value, });
        // e.target.defaultValue=''   
    }

    addUser = (e) => {
        
        e.preventDefault();
       
        
        // const newuser = this.props.UsersBD;

        if( ( this.state.usrnameInput === ''  || this.state.passwordInput === '')  ){
            // Alert
            console.log(' you have to fil input ');
        }else{
        
        // Alert
        console.log('Adding new user to database ');

        this.props.addUser(
            {'usrname': this.state.usrnameInput ,
             'password': this.state.passwordInput,
              'history':this.state.history, 
            });
        }
        this.setState({
            toggleLog:'none',
            userPassed:true,
        })


    }

    render() { 
        let userAccout = null;

        if(this.state.userPassed) {
            userAccout = 
            <UserAccount 
            username = {this.state.usrnameInput } 
            history = {this.state.history }  
            />
        }
        return ( 
        <div>
            <form className= {`login-${this.state.toggleLog}`}>

                    <input type='text'
                        placeholder='usrname'
                        onChange={this.usrnameInputChange} />

                        <br></br>

                    <input type='text'
                        placeholder='password'
                        onChange={this.passwordInputChange} />

                        <br></br>

                    <button 
                    className="btn btn-info glyphicon glyphicon-ok" 
                    onClick={this.addUser} > 
                    </button>
                   
                </form>
                {userAccout}
            
        </div> );
    }    

}