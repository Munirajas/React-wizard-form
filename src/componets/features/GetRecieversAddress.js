import React,{ Component } from 'react';

class GetRecieversAddress extends Component {
    render(){
        return(
            <div className="">
                <h3>Recievers Address</h3>
                <form>                    
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Name </label>
                        <input
                            className="form-control" type="text" name="name"
                            value={this.props.wizardContext.name} placeholder="Enter Sender Name"
                            onChange={(e) => {this.props.onKeyChangeHandler(this.props.currentComponent, e)}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Street </label>
                        <input type="text" className="form-control" placeholder="Enter Street Name"
                        name="street" value={this.props.wizardContext.street}
                        onChange={(e) => {this.props.onKeyChangeHandler(this.props.currentComponent, e)}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">City </label>
                        <input type="text" className="form-control" placeholder="Enter city Name"
                        name="city" value={this.props.wizardContext.city} 
                        onChange={(e) => {this.props.onKeyChangeHandler(this.props.currentComponent, e)}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">State </label>
                        <input type="text" className="form-control" placeholder="Enter State Name" 
                        name="state" value={this.props.wizardContext.state} 
                        onChange={(e) => {this.props.onKeyChangeHandler(this.props.currentComponent, e)}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">ZIP Code</label>
                        <input type="text" className="form-control" placeholder="Enter ZIP Code" 
                        name="zip" value={this.props.wizardContext.zip} 
                        onChange={(e) => {this.props.onKeyChangeHandler(this.props.currentComponent, e)}} />
                    </div>
                </form>
            </div>
        );
    }
}

export default GetRecieversAddress;
