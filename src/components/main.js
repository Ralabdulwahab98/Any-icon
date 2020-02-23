import React from 'react';
import HistoryContainer from './HistoryContainer';





// https://api.iconfinder.com/v3/
// iconsets?
// client_id=NvfBiIhJIHYvaAKF125ScaiL5YSZ7B4pE5JYx5slJaZXSYrUYfChDeQIOPBNOPdv
// &
//client_secret=kaZCwCWTX2ajcgAZqsdbBqZXljUvyst4WHCamfM70jF1ZNEXFV4vlM2fXBPSJpU4


export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: [],
            newItem: '',
            filter: 'none',

        };
    }
    addItem = (e) => {
        e.preventDefault();
        console.log('Adding search item to Array Search');

        this.setState({
            search: [...this.state.search, this.state.newItem],
            newItem: e.target.value,
        });
        // e.target.value = '';
        // this.inputChange(e.target.value = '');

        this.closeItemClick = this.closeItemClick.bind(this);

    }

    inputChange = (e) => {
        this.setState({
            newItem: e.target.value,
        });

    }

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
         if( this.state.filter === 'none'){
            this.setState({ filter:'display' }); 
         }
         else{
             this.setState({ filter:'none' }); 
         }
    }

    render() {
        return (
            <div className="d-block">
                <h1> Project 2 </h1>
                <hr />
                
             <div className="d-flex justify-content-center" >
                <form className="">
                    <input type='text'
                        placeholder='Search'
                        onChange={this.inputChange} />

                    <button className="btn btn-info" onClick={this.addItem} > 
                    <span className="glyphicon glyphicon-search"></span> Search  </button>
                </form>
             </div>

                <div className="d-inline-flex flex-column justify-content-end ">

                    <button className="btn btn-outline-info"
                    onClick={ this.historyListClicked }> History </button>

                    <div className= {`HistoryContainer-${this.state.filter}`}>
                        <HistoryContainer
                        onCloseItemClick={this.closeItemClick}
                        closeClick={this.closeClick}
                        historyList={this.state.search} />
                    </div>
                        
                    
                    
                </div> 
           

            </div>

                



                /* <p>
                <button className="btn btn-primary" type="button" data-toggle="collapse" 
                data-target="#multiCollapseExample2" aria-expanded="false" 
                aria-controls="multiCollapseExample2">Toggle second element</button>
  
                </p>
                <div className="row">
                  <div className="col">
                   <div className="collapse multi-collapse" id="multiCollapseExample2">

                     <div className="card card-body">
                     <ul className="d-inline-flex list-group">
                         U List
                         <li className="list-group-item">1 </li>
                         <li className="list-group-item"> 2</li>
                         <li className="list-group-item"> 3</li>
                     </ul> 


                     </div>
                     </div>
                     </div>
                     </div> */
                

        );

    }

}


// constructor(props){
//     super(props);

//     this.state={
//         filter:'all',
//     }

// }


// handleFilterClick = filter => {
//      console.log('Setting filter to' ,filter);

//      this.setState({ filter: filter })
// }
