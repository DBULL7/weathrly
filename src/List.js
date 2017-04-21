import React, {Component} from 'react'
import Card from './Card.js'
import "./main-css/List.css"



let List = (id, weather, listItems, type, title) => {
  return (
    <section className="list" id={id}>

      {
        listItems.map(function(value,index,array){
          if (index===10){
          return
        }

        if (array.length===11){
          return (
            <Card
              index={index}
              type="daily"
              key={index}
              info={value} />
          )
        }
        return (
          <Card
            index={index}
            type="hour"
            key={index}
            info={value} />
        )
      })
    }
    </section>
  )
}


export default List
