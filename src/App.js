import {Component} from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'

import Header from './components/Header'
import Home from './components/Home'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="sm-notification">
          <IoMdNotificationsOutline fontSize="36" />
        </nav>
        <div className="nav-items-container">
          <Header />
        </div>
        <div className="app-home-container">
          <Home />
        </div>
      </div>
    )
  }
}

export default App
