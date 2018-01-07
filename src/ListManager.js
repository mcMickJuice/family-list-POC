import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import TextInput from 'material-ui/Input'

const getId = () => Date.now()

const blankItem = {
  title: '',
  url: '',
  comment: ''
}

class ItemForm extends Component {
  constructor() {
    super()

    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      ...blankItem
    }
  }

  handleValueChange(evt) {
    const { name, value } = evt.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    const { title, url, comment } = this.state
    this.props.onAddItem({
      title,
      url,
      comment
    })

    this.setState({
      ...blankItem
    })
  }

  render() {
    return (
      <div>
        <TextInput
          name="title"
          label="Title"
          value={this.state.title}
          onChange={this.handleValueChange}
        />
        <TextInput
          name="url"
          label="Url"
          value={this.state.url}
          onChange={this.handleValueChange}
        />
        <TextInput
          name="comment"
          label="Comment"
          value={this.state.comment}
          onChange={this.handleValueChange}
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

ItemForm.propTypes = {
  onAddItem: PropTypes.func.isRequired
}

class ListManager extends Component {
  constructor() {
    super()

    this.handleAddItem = this.handleAddItem.bind(this)

    this.state = {
      items: []
    }
  }

  handleAddItem(item) {
    console.log('item added', item)
    const newItem = {
      ...item,
      id: getId()
    }
    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    const { items } = this.state
    return (
      <div>
        <ItemForm onAddItem={this.handleAddItem} />
        <ul>
          {items.map(item => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default ListManager
