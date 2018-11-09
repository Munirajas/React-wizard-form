import React, { Component } from 'react';
import GetSendersAddress from '../features/GetSendersAddress';
import GetRecieversAddress from '../features/GetRecieversAddress';
import GetShippingOptions from '../features/GetShippingOptions';
import GetShippingWeight from '../features/GetShippingWeight';
import Confirmed from '../features/Confirmed';
import WizardComponent from './WizardComponent';

class Wizard extends Component {
    state = {
        currentComponent: 1,
        wizardAction: {
            prev: 1,
            next: 2,
            end: 4
        },
        wizardContext : {
            from: {
              name: 'Muni',
              street: 'KEB Road',
              city: 'Bangalore',
              state: 'Karnataka',
              zip: ''
            },
            to: {
              name: '',
              street: '',
              city: '',
              state: '',
              zip: ''
            },
            weight: 2,
            shippingOption: 2
        },
        wizardList : [
            {
              wizComponent:GetSendersAddress,
              completed:false
            },
            {
              wizComponent:GetRecieversAddress,
              completed:false
            },
            {
              wizComponent:GetShippingOptions,
              completed:false
            },
            {
              wizComponent:GetShippingWeight,
              completed:false
            },
            {
              wizComponent: Confirmed ,
            }
        ]
    }

    getFormValueFromCurrentValue = (value) => {
        let currentComponent = value;
        let componentForm = null;
        switch(currentComponent) {
            case 1:
                componentForm = 'from'
                break;
            case 2:
                componentForm = 'to'
                break;
            case 3:
                componentForm = 'weight'
                break;
            case 4:
                componentForm = 'shippingOption'
                break;
            default:
                componentForm = 'from'
        } 
        // console.log(componentForm);
        return componentForm;
    }

    prevAction = (currentValue) => {
        let currentStepValue = currentValue;
        let prevStepValue = currentStepValue - 1;
        if(prevStepValue <= 1){
            prevStepValue = 1;
        }
        this.setState({
            currentComponent: prevStepValue
        });
        console.log(this.state.currentComponent);
    }
    nextAction = (currentValue) => {
        let currentStepValue = currentValue;
        let componentForm = this.getFormValueFromCurrentValue(currentStepValue); 
        let updatedFullForm = {...this.state.wizardContext};  
        let updatedForm = updatedFullForm[componentForm];
        for(let key in updatedForm){
            // console.log(updatedForm[key]); 
            if(updatedForm[key] === '' || updatedForm[key] === null) {
                alert("all fields required");
                return false;
            }
        }
        let validaForms = {...this.state.wizardList};
        // console.log(validaForms);
        validaForms[currentValue - 1].completed = true;
        // console.log(validaForms[currentValue - 1].completed );
        this.setState({
            wizardList : validaForms
        })
        let nextStepValue = currentStepValue + 1;
        if(nextStepValue >= 5){
            nextStepValue = 5;
        }
        this.setState({
            currentComponent: nextStepValue
        });
    }

    onKeyChangeHandler = (formId, e) => {
        let currentComponent = formId;        
        let componentForm = this.getFormValueFromCurrentValue(currentComponent);   
        let updatedFullForm = {...this.state.wizardContext};  
        let updatedForm = updatedFullForm[componentForm];
        let inputName = e.target.name;
        let inputValue = e.target.value;    
        updatedForm[inputName] = inputValue;
        this.setState({
            wizardContext: updatedFullForm
        });
    }

    render(){
        let currentComponent = this.state.currentComponent;
        let showComponent = this.state.wizardList[(currentComponent - 1)].wizComponent; // GetSendersAddress
        // console.log(showComponent);
        let componentContext = this.state.wizardContext.from;
        switch(currentComponent) {
            case 1:
                componentContext = this.state.wizardContext.from;
                break;
            case 2:
                componentContext = this.state.wizardContext.to;
                break;
            case 3:
                componentContext = this.state.wizardContext.weight;
                break;
            case 4:
                componentContext = this.state.wizardContext.shippingOption;
                break;
            default:
                componentContext = this.state.wizardContext.to;
        }
        return(
           <div className="wizard-component" >               
                <WizardComponent
                    currentComponent = {this.state.currentComponent}
                    wizardContext = {componentContext}
                    prevAction= {this.prevAction}
                    nextAction= {this.nextAction}
                    onKeyChangeHandler={this.onKeyChangeHandler}
                >
                    {showComponent} 
                </WizardComponent>
            </div>
        )
    }
}

export default Wizard;
