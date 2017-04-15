import React, {Component} from 'react'
import Card from './Card.js'
import ListTitle from './ListTitle'
import "./List.css"

class List extends Component {


  test() {
    console.log(this.props.weather)
  }

  render() {
    return (
      <section className="list">
        <ListTitle text={this.props.title}/>
        {
        this.props.listItems.map(function(value,index,array){
        if(index===10){
          return
        }

        if(array.length===11){
             return <Card
              type ="daily"
              key={index}
              info={value}
            />
        }

        return <Card
          type="hour"
          key={index}
          info={value}
         />
      })

      }
      {this.test()}
      </section>
    )
  }
}


export default List
