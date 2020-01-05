import React, { Component } from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"

import CharacterCard from "./components/CharacterCard"

export default class App extends Component {
  state = {
    characterData: {}
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <CharacterCard id={1} />
        <CharacterCard id={2} />
        <CharacterCard id={3} />
        <CharacterCard id={4} />
        <CharacterCard id={5} />
        <CharacterCard id={6} />
        <CharacterCard id={7} />
      </ScrollView>
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
