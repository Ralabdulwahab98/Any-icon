import React from 'react';
import HistoryList from './HistoryList';

export default class HistoryContainer extends React.Component {


    render() {
        const allHistoryList = this.props.historyList.map((task, index) => {
            return <HistoryList
                oneList={task}
                key={index}
                onCloseItemClick={() => this.props.onCloseItemClick(task)}
            />
        });

        

        return (
            <div className="div-HistoryContainer" >
                <ul className="d-inline-flex list-group">
                        <span className="clear-all" onClick={this.props.closeClick} >
                        clear all </span> 
                        <div className="history-item">
                            {allHistoryList}
                        </div>
               
                </ul>
            </div>
        );
    }
}
