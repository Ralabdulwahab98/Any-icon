import React from 'react';
import ResultBox from './ResultBox';
class SearchResult extends React.Component {

    render() { 

        const allData = this.props.DATA.map( (item, key) => {
            // const icon = {item.raster_sizes[item.raster_sizes.length-1]}
                return <ResultBox
                    key={key} 
                    tags = {item.tags}
                   img = {item.raster_sizes[item.raster_sizes.length-1].formats[0].preview_url}
                   format = {item.raster_sizes[item.raster_sizes.length-1].formats[0].format}
                   onRemoveData={() => this.props.onRemoveData(item)}
                   />
                 });

        let checkArrayEmpty ;
        if( this.props.DATA.length === 0 ){
            checkArrayEmpty = <div className="SearchResult Empty">
            {/* {allData} */}
        </div>
        }else{
            checkArrayEmpty = <div className="SearchResult">
            {allData}
        </div>
        }
        return(checkArrayEmpty);

        // return (  
        // <div className="SearchResult">
        //     {/* {allData} */}
        // </div> );
    }

}
 
export default SearchResult;


