import React from 'react';


class HelloWorld extends React.Component {
    constructor() {
        super()
        this.state = {who: 'world'}
    };

//could I do this with one function?  How can I grab the button's innerHTML
    handler1 = () => {this.setState({who: 'World'})};
    handler2 = () => {this.setState({who: 'Friend'})};
    handler3 = () => {this.setState({who: 'React'})};
    
    render() {
        return (
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={this.handler1}>World</button>
                <button onClick={this.handler2}>Friend</button>
                <button onClick={this.handler3}> React</button>
            </div>
        )
    };

};





export default HelloWorld