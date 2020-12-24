import React from 'react'

//When the count goes above or equal to 8, also clear the interval! how?
class Bomb extends React.Component {
    constructor() {
        super()
        this.state = {count: 0}
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)

    } 
    componentWillUnmount() {  
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <p>{(this.state.count <= 8) ? ((this.state.count % 2 === 0) ? 'tick':'tock') : 'Boom!'}</p>
            </div>
        )
    }
}

export default Bomb;