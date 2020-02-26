import React from 'react';
import UserAccount from './UserAccount';

export default class UserLoginContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usrnameInput: '',
            passwordInput: '',
            toggleLog:'disply',
            username:'',
            tags:[],
            userPassed:false,
        };

    }

    usrnameInputChange = (e) => { 
        this.setState({  usrnameInput: e.target.value, });
    }
    passwordInputChange = (e) => { 
        this.setState({  passwordInput: e.target.value, });  
    }


    checkUser = (e) => {
        
        e.preventDefault();
        console.log('check user on database ');
        const userName = this.state.usrnameInput;
        const userPass = this.state.passwordInput;
        const Tags = this.state.tags;

        console.log('check user on database ');
        console.log(' if ', userName);


        this.props.UsersBD.map( (item,index)=> {

            if( item.usrname === userName ){
                console.log('you have account ', item.usrname ) ;
                if( item.password === userPass ){
                    console.log(' valid pass ' ) ;

                    this.setState({
                    toggleLog:'none',
                    userPassed: true,
                    username : item.usrname,
                    tags : item.tags
                    })
                    

                }else{
                    // Alert
                    console.log(' not valid pass ' ) ;

                    
                }
            }else{
                // Alert
                console.log('you do not have account !') ;

            }
            
                  
            });
    }

    




    render() { 
        let userAccout = null;

        if(this.state.username) {
            userAccout = 
            <UserAccount 
            username = {this.state.username } 
            tags = {this.state.tags }  />
        }

        return ( 
        <div>
            <form className= {`login-${this.state.toggleLog}`}>

                    <input type='text'
                        placeholder='usrname'
                        onChange={this.usrnameInputChange} /><br></br>

                    <input type='text'
                        placeholder='password'
                        onChange={this.passwordInputChange} /><br></br>
                    <button 
                    className="btn btn-info glyphicon glyphicon-ok" 
                    onClick={this.checkUser} > 
                    </button>

                   
                </form>
                {userAccout}
            
        </div> );
    }    

}