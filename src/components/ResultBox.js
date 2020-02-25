import React from 'react';


class  ResultBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
        <div className="ResultBox">
             <span className="glyphicon glyphicon-trash imgdlet"
            onClick = {this.props.onRemoveData} >
            </span>
            <a href={`${this.props.img}`} target="_blank">
            <div className="imgDiv">
                <img src={`${this.props.img}`} alt="icons" />
            </div></a>
            <p> {this.props.format} </p>
            <h6> TAGS: </h6>
            <textarea >
                {this.props.tags.join('-')} 
            </textarea>
                

           

        </div> );
    }
}
 
export default ResultBox;