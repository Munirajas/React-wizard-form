import React, { Component } from 'react';
import Wizard from '../componets/core/wizard';

class LayoutComponent extends Component {
    render(){
        return(
            <div className="layout-component" >
                <header>
                    <h1>Header ...</h1>
                </header>                
                <div className="container">
                    <Wizard />
                </div>
            </div>
        )
    }
}

export default LayoutComponent;
