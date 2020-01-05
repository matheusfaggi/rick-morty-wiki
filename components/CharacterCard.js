import React, { Component } from "react"
import { Card, DataTable, Button } from "react-native-paper"
import Api from "../services/index"
import { TouchableHighlight, StyleSheet, Modal } from "react-native"

const styles = StyleSheet.create({
  modal: {
    display: "flex"
  },
  cardPreview: {
    flex: 1
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
    Api.getCharacters(props.id).then(({ data }) => {
      this.setState({ data, loading: false })
      console.log("> " + this.state.data.origin["name"])
    })
  }

  render() {
    const { data, loading, visible } = this.state
    return (
      <>
        <Modal visible={visible} style={styles.modal}>
          <Card>
            <Card.Cover
              source={{
                uri: loading ? "http://shorturl.at/gLZ28" : data.image
              }}
            />
            <Card.Title title={loading ? "" : data.name} />
            <Card.Content>
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell>Status</DataTable.Cell>
                  <DataTable.Cell>{loading ? "" : data.status}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Species</DataTable.Cell>
                  <DataTable.Cell>{loading ? "" : data.species}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gender</DataTable.Cell>
                  <DataTable.Cell>{loading ? "" : data.gender}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Origin</DataTable.Cell>
                  <DataTable.Cell>
                    {loading ? "" : data.origin["name"]}
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Last location</DataTable.Cell>
                  <DataTable.Cell>
                    {loading ? "" : data.location["name"]}
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </Card.Content>
            <Card.Actions>
              <Button
                icon="close"
                onPress={() => this.setState({ visible: false })}
              >
                Close
              </Button>
            </Card.Actions>
          </Card>
        </Modal>
        <Card style={styles.cardPreview}>
          <TouchableHighlight onPress={() => this.setState({ visible: true })}>
            <Card.Cover
              source={{
                uri: loading ? "http://shorturl.at/gLZ28" : data.image
              }}
            />
          </TouchableHighlight>
          <Card.Title title={loading ? "" : data.name} />
        </Card>
      </>
    )
  }
}

class CharacterCard extends Component {
  render() {}
}
