import React from 'react';
//import './Accordion.css'

export default class Accordion extends React.Component {
    static defaultProps = { 
        sections: [] 
    };//what does this do?

    state = {
        currentSectionIndex: null,
    }
    handleButtonClick = (idx) => {
        this.setState({ currentSectionIndex: idx })
    };

    renderButtons() {
        const { sections } = this.props
        const { currentSectionIndex } = this.state
        const currentSection = sections[currentSectionIndex]
        return sections.map((section, idx) =>
            <li key={idx}>
                <button onClick={() => this.handleButtonClick(idx)}>{section.title}</button>
                {(idx === currentSectionIndex) && <p>{currentSection.content}</p>}
            </li>)
    };

    render() {
        return (
            <ul>
                {this.renderButtons()}
            </ul>
        )
    };
};

