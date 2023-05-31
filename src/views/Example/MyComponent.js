import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Truong',
        channel: 'Vlog'
    }

    handleClickButton = () => {
        alert('You had Click the button')
    }

    render() {
        return (
            <>
                <div className="first">
                    hello my component. My name is {this.state.name}
                </div>
                <div className="second">
                    My Youtube channel: {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}
export default MyComponent