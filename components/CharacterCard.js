import React, { Component } from "react"
import { Card } from "react-native-paper"
import Api from "../services/index"
import { TouchableHighlight, StyleSheet, Modal } from "react-native"
import CharacterModal from "./CharacterModal"

const styles = StyleSheet.create({
  cardPreview: {
    flex: 1,
    margin: 5
  },
  emptyCardPreview: {
    flex: 1,
    backgroundColor: "#000"
  }
})

export default class CharacterComponent extends Component {
  state = {
    data: {},
    loading: true,
    visible: false
  }

  constructor(props) {
    super(props)
    const { id } = props
    if (id !== 0) {
      Api.getCharacters(id).then(({ data }) => {
        this.setState({ data, loading: false })
      })
    }
  }

  render() {
    const { data, loading, visible } = this.state
    return (
      <>
        {this.props.id === 0 ? (
          <Card style={styles.emptyCardPreview} visible={false}></Card>
        ) : (
          <>
            <Modal visible={visible} style={styles.modal} animationType="slide">
              <CharacterModal
                data={data}
                hideModal={() => this.setState({ visible: false })}
                loading={loading}
              />
            </Modal>
            <Card style={styles.cardPreview}>
              <TouchableHighlight
                onPress={() => this.setState({ visible: true })}
              >
                <Card.Cover
                  source={{
                    uri: loading ? "http://shorturl.at/gLZ28" : data.image
                  }}
                />
              </TouchableHighlight>
              <Card.Title title={loading ? "" : data.name} />
            </Card>
          </>
        )}
      </>
    )
  }
}
