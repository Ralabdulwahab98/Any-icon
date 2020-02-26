import React from 'react';


export default class UserAccount extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newItem: '',
            toggleEdit:'',

        };
    }

    inputChange = (e) => { 
        this.setState({  newItem: e.target.value, });
        // e.target.value=''   
    }

    render() {
        console.log('<UserAccount/> nname= ', this.props.username)
        console.log('<UserAccount/> tags =', this.props.tags)
        return (
            <div>
                <p> Hi {this.props.username} </p>
                <div className={`div-Edit-${this.state.toggleEdit}`}>
                    <p> Edit  <span className="glyphicon glyphicon-edit"></span> </p>

                    <input
                        type='text'
                        placeholder=' new username'
                        onChange={this.inputChange}
                    ></input>

                    <span className="glyphicon glyphicon-check"></span>

                    {/* onClick = {this.props.onRemoveData}  */}

                    {/* <p> tags {this.props.tags.join(' - ')} </p> */}

                </div>

            </div>
        );
    }


}