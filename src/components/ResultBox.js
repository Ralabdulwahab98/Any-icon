import React from 'react';


class  ResultBox extends React.Component {
    
    render() { 
        return ( 
        <div className="ResultBox">

             <span className="glyphicon glyphicon-trash imgdlet"
            onClick = {this.props.onRemoveData} >
            </span>

            <a href={`${this.props.img}`} target="_blank">
            <div className="imgDiv">
                <img src={`${this.props.img}`} alt="icon of API data " />
            </div>
            </a>
            
        </div> );
    }
}
 
export default ResultBox;