import React, { Component } from "react"
import { Card, DataTable, Button } from "react-native-paper"

export default class CharacterModal extends Component {
  render() {
    const { data, loading } = this.props
    return (
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
          <Button icon="close" onPress={this.props.hideModal}>
            Close
          </Button>
        </Card.Actions>
      </Card>
    )
  }
}
