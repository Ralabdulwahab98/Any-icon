import React from 'react';
import axios from "axios"

import HistoryContainer from './HistoryContainer';
import SearchResult from './SearchResult';



// API
// https://api.iconfinder.com/v3/
// iconsets?
// client_id=NvfBiIhJIHYvaAKF125ScaiL5YSZ7B4pE5JYx5slJaZXSYrUYfChDeQIOPBNOPdv
// &
//client_secret=kaZCwCWTX2ajcgAZqsdbBqZXljUvyst4WHCamfM70jF1ZNEXFV4vlM2fXBPSJpU4
// &premium=0
// &count=100

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: [],
            newItem: '',
            toggle:'none',
            filter: 'none',
            data:[],

        };
    }

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

        //    console.log( 'length: ',res.data.icons.length );
        //    console.log( 'download_url: ',res.data.icons[0].raster_sizes[6].formats[0].preview_url );
        //    console.log( 'format: ',res.data.icons[0].raster_sizes[6].formats[0].format );
           
         })
         .catch(err => {
           console.log('ERR',err);
         });  
        
     }


    addItem = (e) => {
        
        e.preventDefault();
        console.log('Adding search item to Array Search');

        this.setState({
            search: [...this.state.search, this.state.newItem],
            newItem: e.target.value,
        });
        this.getData(e.target.value);
        // e.target.value = '';
        // this.inputChange(e.target.value = '');

        this.closeItemClick = this.closeItemClick.bind(this);

    }

    inputChange = (e) => { this.setState({  newItem: e.target.value, });   }

    closeClick = (e) => {
        console.log('close ( clear all ) click', e.target);
        this.setState({ search: [] });
    }



    closeItemClick = (item) => {
        const search = [...this.state.search];
        const searchIndex = search.indexOf(item);

        console.log('close ( clear item ) click');

        search.splice(searchIndex, 1);
        this.setState({ search });
    }


    historyListClicked = (e) => {
        console.log('history List Div click');
        // this.setState({ filter:'display' }); 
         if( this.state.toggle === 'none'){
            this.setState({ toggle:'display' }); 
         }
         else{
             this.setState({ toggle:'none' }); 
         }
    }

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
                
                <div className="d-flex justify-content-center heder" >

                <form className="form">
                    <input type='text'
                        placeholder='Search'
                        onChange={this.inputChange} />

                    <button className="btn btn-info" onClick={this.addItem} > 
                    <span className="glyphicon glyphicon-search"></span>  </button>
                   
                </form>

                <div className="d-inline-flex flex-column History">

                    <button className="btn btn-outline-info "
                    onClick={ this.historyListClicked }> History </button>

                    <div className= {`HistoryContainer-${this.state.toggle}`}>
                        <HistoryContainer
                        onCloseItemClick={this.closeItemClick}
                        closeClick={this.closeClick}
                        historyList={this.state.search} />
                </div>
               
             </div>
                
            

                
                        
                    
                    
                </div> 
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
