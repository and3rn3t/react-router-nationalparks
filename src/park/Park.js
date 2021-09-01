import React, { Component } from "react";

class Park extends Component {
    render() {
        console.log(this.props);
        const id = this.props.match.params.id;
        console.log(id);
        return (
            <div>
                <h2>See some part detail here.</h2>
            </div>
        )
    }
}

export default Park;