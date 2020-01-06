import React, { Component } from "react"
import { BottomNavigation } from "react-native-paper"

import Characters from "./screens/Characters"

const characters = () => <Characters />

export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: "Characters", title: "Characters", icon: "history" },
      { key: "Characters", title: "Characters", icon: "history" }
    ]
  }

  _handleIndexChange = index => this.setState({ index })

  _renderScene = BottomNavigation.SceneMap({
    Characters: characters
  })
  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    )
  }
}
