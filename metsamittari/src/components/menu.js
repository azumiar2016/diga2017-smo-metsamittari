import React, { Component } from 'react'

class menu extends Component {
    render () {
        return (
            <div>
            <ul className="nav nav-tabs">
          <li role="presentation" className = "active"> <a href="#"> Tasks</a></li>
          <li role="presentation" > <a href="#"> Graphs</a></li>
          </ul>
            </div>
        )
    }
}

export default menu