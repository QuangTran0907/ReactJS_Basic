import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: "Quang",
        channel: "Quang toi"
    }
    handelOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        return (
            <div>
                <input type="text" value={this.state.name} onChange={(event) => this.handelOnChangeName(event)}></input>

                <p> Day la react component, My name is {this.state.name}</p>

                <p>My youtube channel is {this.state.channel}</p>
            </div>

        )
    }
}
export default MyComponent;