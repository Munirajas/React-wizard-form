import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WizardHOC } from './WizardHoc';
import Actions from './Actions';

class WizardComponent extends Component {
    render(){
        // console.log(this.props);
        return (
            <div className="col-md-12">
                {WizardHOC(this.props.children, {...this.props})}
                <Actions 
                    prevAction= {this.props.prevAction}
                    nextAction= {this.props.nextAction}
                    currentComponent= {this.props.currentComponent}
                />
           </div>
       );
    }
}

WizardComponent.propTypes = {
    children: PropTypes.func.isRequired
}

export default WizardComponent;

