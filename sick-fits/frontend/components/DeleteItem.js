import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { ALL_ITEMS_QUERY } from './Items'

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`

class DeleteItem extends Component {
  update = (cache, payload) => {}
  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure?')) {
                deleteItem()
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    )
  }
}

export default DeleteItem
