import React, {Component} from 'react'
import Card from './Card.js'
import ListTitle from './ListTitle'
import "./List.css"

class List extends Component {
  render() {
    return (
      <section className="list">
        <ListTitle text={this.props.title}/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    )
  }
}


export default List
