import React, { Component } from "react"
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native"

import CharacterCard from "./components/CharacterCard"

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default class App extends Component {
  state = {
    characterData: {}
  }
  renderItem = ({ item }) => {
    return <CharacterCard id={item} />
  }
  render() {
    return (
      <FlatList
        data={ids}
        renderItem={this.renderItem}
        keyExtractor={(_, index) => index.toString()}
      ></FlatList>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "column"
  }
})
