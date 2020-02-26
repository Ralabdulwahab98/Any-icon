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
                <img src={`${this.props.img}`} alt="icon of API data " />
            </div>
            </a>


            {/* -- TAGS just to complet the Requirements -- */}
            
            {/* <label>TAG:
                <input  
                type='text'
                placeholder=' your search tag'
                // value= {this.props.tags.join('-')} 
                // onChange= {this.props.tags.join('-')} 
                // readOnly= {this.props.tags.join('-')}
                // defaultValue={this.props.tags.join('-')}
                />
                <span className="glyphicon glyphicon-check"
                // onClick = {this.props.onRemoveData} 
                ></span>
            </label> */}
            
                

           

        </div> );
    }
}
 
export default ResultBox;