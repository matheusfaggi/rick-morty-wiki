import React, { Component } from "react"
import { StyleSheet, FlatList } from "react-native"

import CharacterCard from "../components/CharacterCard"

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
export default class Characters extends Component {
  state = {
    characterData: {}
  }
  renderItem = ({ item }) => {
    return <CharacterCard id={item} />
  }
  formatData(data, numColumns) {
    const numberOfFullRows = Math.floor(data.length / numColumns)
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push(0)
      numberOfElementsLastRow++
    }
    return data
  }
  render() {
    const numColumns = 2
    return (
      <FlatList
        data={this.formatData(ids, numColumns)}
        renderItem={this.renderItem}
        keyExtractor={(_, index) => index.toString()}
        style={styles.previewCard}
        contentContainerStyle={styles.container}
        numColumns={numColumns}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#000"
  },
  previewCard: {
    flex: 1
  }
})
