import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () => {
        //         console.log(this.state.count)
        //     }
        // )

        this.setState((prevState, props) => (
            {
                count: prevState.count + 1
            }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}>increment</button>

            </div>
        )
    }
}

export default Counter

