import React, {Component} from 'react'
import Card from './Card.js'
import ListTitle from './ListTitle'
import "./List.css"

class List extends Component {


  render() {
    return (
      <section className="list">
        <ListTitle text={this.props.title}/>
        {

      this.props.listItems.map(function(value,index){
        return <Card  info={value}/>
      })

      }
      </section>
    )
  }
}


export default List
