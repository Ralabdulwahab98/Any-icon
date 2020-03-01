import React from 'react';
import Main from './components/main';
import './App.css';

export default class App extends React.Component{

// App component parent of ==> <Main />
   // And Main parent of :
      // 1- HistoryContainer ==> < HistoryList/>
      // 2- SearchResult     ==> < ResultBox/> 
      // 3- UsersContainer   ==> < UserLoginContainer/> AND < UserRegisterContainer/>

         // UserLoginContainer component parent of
            // 1- < UserAccount/>
         // UserRegisterContainer component parent of
            // 1- < UserAccount/>    

  render(){
  return (
    <Main />
  );}

}
