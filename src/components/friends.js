import React, { Component } from 'react'
import './friendsStyles.css'

class friends extends Component {
    render() {
        return (
            <div className='friends'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default friends
