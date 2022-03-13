// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: true,
  }

  changeColor = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  changeText = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'Light Mode' : 'Dark Mode'
  }

  changeBackgroundColor = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'sub-container-dark' : 'sub-container-light'
  }

  changeHeadingColor = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'light-heading' : 'dark-heading'
  }

  render() {
    return (
      <div className="container">
        <div className={this.changeBackgroundColor()}>
          <h1 className={this.changeHeadingColor()}>Click to Change Mode</h1>
          <div>
            <button className="change-button" onClick={this.changeColor}>
              {this.changeText()}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
