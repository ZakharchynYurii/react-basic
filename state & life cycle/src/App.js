import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.tick()
        }, 1000)
    }

    tick(){
        this.setState({
            date: new Date()
        })

    }

    render() {
        const {date} = this.state
        
        return (
            <div>
                <h1>Hello world</h1>
                <h2>Now: {date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;