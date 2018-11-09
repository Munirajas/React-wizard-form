import React, { Component} from 'react';

class Actions extends Component {

    render(){
        console.log(this.props.currentComponent);
        return(
            <div className="action-buttons">
                <button 
                    className="btn btn-secondary" 
                    onClick={() => {this.props.prevAction(this.props.currentComponent)}} 
                    disabled={this.props.currentComponent === 1}
                >
                    Prev
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => {this.props.nextAction(this.props.currentComponent)}} 
                    disabled={this.props.currentComponent === 5}
                >
                    Next
                </button>
            </div>
        );
    }
}

export default Actions;
