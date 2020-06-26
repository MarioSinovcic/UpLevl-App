import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home.js';
import Chat from './components/Chat.js'

class App extends React.Component {
  render(){
    return(
      <Router>
        <Scene key = "root">
          <Scene key = "home" component = {Home} title = "Home" initial = {true} />
          <Scene key = "chat" component = {Chat} title = "Chat"  />
        </Scene>
      </Router>
    )
  }
}

export default App;