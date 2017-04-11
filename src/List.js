import React, {Component} from 'react'
import Card from './Card.js'
import "./List.css"

class List extends Component {
  render() {
    return (
      <section className="list">
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
