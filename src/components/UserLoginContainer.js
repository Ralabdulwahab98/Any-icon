import React from 'react';


export default class UserLoginContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usrnameInput: 'null',
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

    checkUser = (e) => {
        
        e.preventDefault();
        console.log('check user on database ');
        const userName = this.state.usrnameInput;
        const userPass = this.state.passwordInput;
        console.log(' if ', userName);

        // const openUser = this.props.UsersBD;
        // const allListing = this.props.data.map(function (item,index) {
        //     return <FilmRow filmInfo={item} key={item.id} />
        // });
        this.props.UsersBD.map(function (item,index) {
            if( item.usrname === userName ){
                console.log('you have account ', item.usrname ) ;
                if( item.password === userPass ){
                    console.log(' valid pass ' ) ;
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
        return ( 
        <div>
            <form className="">
                    <input type='text'
                        placeholder='usrname'
                        onChange={this.usrnameInputChange} />

                    <input type='text'
                        placeholder='password'
                        onChange={this.passwordInputChange} />
                    <button 
                    className="btn btn-info glyphicon glyphicon-ok" 
                    onClick={this.checkUser} > 
                    </button>
                   
                </form>
            
        </div> );
    }    

}