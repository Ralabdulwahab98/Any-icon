import React from 'react';
import DB from './DB';

export default class UserRegisterContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            usrnameInput: '',
            passwordInput: '',
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
       
        
        const newuser = this.props.UsersBD;

        if( ( this.state.usrnameInput === ''  || this.state.passwordInput === '')  ){
            // Alert
            console.log(' you have to fil input ');
        }else{
        
        // Alert
        console.log('Adding new user to database ');

        newuser.push(
            {'usrname': this.state.usrnameInput ,
             'password': this.state.passwordInput });
        }

    }

    render() { 
        return ( 
        <div>
            <form className="">

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
            
        </div> );
    }    

}