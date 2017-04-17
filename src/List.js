import React, {Component} from 'react'
import Card from './Card.js'
import ListTitle from './ListTitle'
import "./List.css"

class List extends Component {


  render() {
    return (
      <section className="list" id={this.props.id}>
        <ListTitle text={this.props.title}/>
        {
        this.props.listItems.map(function(value,index,array){
        if(index===10){
          return
        }

        if(array.length===11){
             return (
             <Card
             index={index}
              type ="daily"
              key={index}
              info={value}
            />)
        }

        return <Card

          index={index}
          type="hour"
          key={index}
          info={value}
         />
      })

      }
      </section>
    )
  }
}


export default List
