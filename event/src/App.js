import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            onToggle: false
        }

        // Прив'язка this
        this.handleClick = this.handleClick.bind(this)
    }

    // Має свій this
    handleClick = () => {
        this.setState(state => ({
            onToggle: !state.onToggle
        }))
    }

    //Прив'язка this через bind
    handleClick(){
        this.setState(state => ({
            onToggle: !state.onToggle
        }))
    }

    render() {
        const {onToggle} = this.state;
        return (
            <button onClick={this.handleClick}>
                {(onToggle) ? 'Включено' : 'Виключено'}
            </button>
        )
    }
}

export default Clock;