import React from 'react'

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        };
    };

    handleButtonClick = () => {
        this.setState({spinningTheChamber: true})
        this.timeout = setTimeout( () => {
         const num = Math.ceil(Math.random() * 8)
         console.log(num)
         this.setState({chamber: num, spinningTheChamber: false})
         console.log(this.state)
        }, 2000)
        
    };

    componentWillUnmount() {  
        clearTimeout(this.timeout)
    };

    render() {
         return (
         <div>
             <p>{(this.state.spinningTheChamber) ? 'spinning the chamber and pulling the trigger!' : ((this.state.chamber === this.props.bulletInChamber) ? 'Bang!':"You're Safe")}</p>
             <button onClick={this.handleButtonClick}>Pull The Trigger</button>
        </div>
         )
    }
}

export default RouletteGun