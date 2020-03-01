import React from 'react';
import axios from "axios"
import HistoryContainer from './HistoryContainer';
import SearchResult from './SearchResult';
import UsersContainer from'./UsersContainer';


// API documentation

// https://api.iconfinder.com/v3/icons/search? 
// search? ==> Endpoint
// NvfBiIhJIHYvaAKF125ScaiL5YSZ7B4pE5JYx5slJaZXSYrUYfChDeQIOPBNOPdv ==> client_id 
// kaZCwCWTX2ajcgAZqsdbBqZXljUvyst4WHCamfM70jF1ZNEXFV4vlM2fXBPSJpU4 ==> client_secret 
// premium=0  ==>  to get the free icons
// count=100  ==>  to specify number of result 
 

export default class Main extends React.Component {
 

    constructor(props) {
        super(props)

        this.state = {
            // save all input of search 
            search: [], 
            // get the new input search and save it 
            newItem: '',
            // This tow to display the div or not display
            toggleHistory:'none',
            toggleUser:'none',
            // To get data from API and save it 
            data:[],
        };
    }

   


    // function take topic as paramter to search
    // useing the axios to get request from the API 
    // And asve data to array state data 
    getData = (data) => { 
        console.log(' get data from api work!! ')
        const client_id ='client_id=NvfBiIhJIHYvaAKF125ScaiL5YSZ7B4pE5JYx5slJaZXSYrUYfChDeQIOPBNOPdv';
        const client_secret = 'client_secret=kaZCwCWTX2ajcgAZqsdbBqZXljUvyst4WHCamfM70jF1ZNEXFV4vlM2fXBPSJpU4';
       
       const url = `https://api.iconfinder.com/v3/icons/search?${client_id}&${client_secret}&query=${this.state.newItem}&count=100&premium=0`;
        console.log("URL:'",url)
          
      axios({
       method: 'get',
       url: url
         })
         .then(res => { 
           console.log( 'Data: ',res.data.icons);
           this.setState({  data: res.data.icons });
     
         })
         .catch(err => {
           console.log('ERR',err);
         });  
     }

// function to adding search item to Array Search
// And save it to to array state search with all olde index  
    addItem = (e) => {
        e.preventDefault();
        console.log('Adding search item to Array Search');

        this.setState({
            search: [...this.state.search, this.state.newItem],
            newItem: '',
        });
        // call the getData() 
        // And give it the get request data to search 
        this.getData(e.target.value);
    }


// Saveing the input data 
    inputChange = (e) => { 
        this.setState({  newItem: e.target.value, });
        // e.target.value=''   
    }


// Event to clear all index in search array 
    closeClick = (e) => {
        console.log(' ( clear all ) click', e.target);
        this.setState({ search: [] });
    }


// Event to clear only one index in search array 
    closeItemClick = (item) => {
        const search = [...this.state.search];
        const searchIndex = search.indexOf(item);

        console.log('close ( clear item ) click');

        search.splice(searchIndex, 1);
        this.setState({ search });
    }



// To display or not the Div of  ( history )  
    historyListClicked = (e) => {
        console.log('history List Div click');
         if( this.state.toggleHistory === 'none'){
            this.setState({ toggleHistory:'display' }); 
         }
         else{
             this.setState({ toggleHistory:'none' }); 
         }
    }

// To display or not the Div of  ( history )      
    userListClicked = (e) => {
        console.log('history List Div click');
         if( this.state.toggleUser === 'none'){
            this.setState({ toggleUser:'display' }); 
         }
         else{
             this.setState({ toggleUser:'none' }); 
         }
    }


// Event to remov only one box in the result of search continer     
    removeData = (oneData) =>{
        const data = [...this.state.data];
        const dataIndex = data.indexOf(oneData);

        console.log('remove ( one item from data ) click');

        data.splice(dataIndex, 1);
        this.setState({ data });
    }



    render() {console.log(this.state.data);
        return (
            
            <div className="d-block">

                {/* The heder part  */}

             <div className="d-flex justify-content-center heder" >

                <form className="form">
                    <input type='text'
                        placeholder='Search'
                        onChange={this.inputChange} />
                    <button className="btn btn-info" onClick={this.addItem} > 
                     <span className="glyphicon glyphicon-search"></span>  
                    </button>
                </form>


                <div className="d-inline-flex flex-column History">
                    <button className="btn btn-info buttonHistory"
                    onClick={ this.historyListClicked }> History </button>
                    <div className= {`HistoryContainer-${this.state.toggleHistory}`}>
                        <HistoryContainer
                        onCloseItemClick={this.closeItemClick}
                        closeClick={this.closeClick}
                        historyList={this.state.search} />
                   </div>
                </div>
                    
                <div className="d-inline-flex flex-column user">

                    <button className="btn btn-info "
                    onClick={ this.userListClicked }> 
                    <span className="glyphicon glyphicon-user"></span>  
                    </button>
                    <div className= {`userContainer-${this.state.toggleUser}`}>
                        <UsersContainer />
                    </div>
               
                </div>
             </div> 

                 {/* The main part  */}

                <div className="mainResult">
                    <h1>  {this.state.data.length} result </h1>
                    <SearchResult  
                    DATA= {this.state.data}
                    onRemoveData={this.removeData}/>
                </div>



                



            </div>

                


                

        );

    }

}
