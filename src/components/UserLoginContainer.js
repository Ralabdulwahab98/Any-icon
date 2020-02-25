import React from 'react';


export default class UserLoginContainer extends React.Component {


    render() { 
        return ( 
        <div>
            <form className="">
                    <input type='text'
                        placeholder='usrname'
                        onChange={this.inputChange} />

                    <input type='text'
                        placeholder='password'
                        onChange={this.inputChange} />

                    <button className="btn btn-info" 
                    // onClick={this.addItem}
                     > 
                    <span className="glyphicon glyphicon-ok"></span>  
                    </button>
                   
                </form>
            
        </div> );
    }    

}