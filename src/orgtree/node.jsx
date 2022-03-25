import { Component } from "react";

class Node extends Component {

    state = {
        data : this.props.data,
    }

    render() {
        const {empname,job,label,onduty,prepared} = this.state.data;
        debugger
        return (
            <div>
                {
`${empname}/${job}/${label}/${onduty}/${prepared}`
                }
                
            </div>
        )
    }
    
}

export default Node;