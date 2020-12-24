import React from 'react';

class Tabs extends React.Component {
    static defaultProps = { 
        tabs: [] 
    };//what does this do?

    state = {
        currentTabIndex: 0,
    }

    handleButtonClick = (idx) => {
        this.setState({ currentTabIndex: idx })
    };

    renderButtons() {
        return this.props.tabs.map((tab, idx) =>
            <button onClick={() => this.handleButtonClick(idx)} key={idx}>{tab.name}</button>)
    };

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    };
    
    render() {
        return (
            <div>
              {this.renderButtons()}
              {!!this.props.tabs.length && this.renderContent()}
            </div>
        );
    };
}

export default Tabs