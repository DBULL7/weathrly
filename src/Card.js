import React, {Component} from 'react'

class Card extends Component {

  constructor() {
    super()
    this.state = {
      clicked: false,
      array: [],
      sortedArray: [],
      high: '',
      low: ''
    }
  }


displayHighLow() {
  var start = this.props.index * 24;
  var end = start + 23;
  var arr = []

  for (let i = start; i <= end; i++) {
    arr.push(this.props.info.weatherData[i])
  }

  let sorted = arr.sort((a, b) => {
    return a.temp.english - b.temp.english
  })

  let high = sorted[23].temp.english
  let low = sorted[0].temp.english
    return (
      <h6>{high}/{low}</h6>
    )
}

createCards(){
  var start = this.props.index * 24;
  var end = start + 23;
  var arr = []

  for (let i = start; i <= end; i++) {
    arr.push(this.props.info.weatherData[i])
  }
  this.setState({array:arr})

}

  cardClicked() {
    this.createCards()
    let change = !this.state.clicked
    this.setState({clicked: change})
  }


  twentyFourHours() {
    if(this.state.clicked) {
      let generate = this.state.array
      return (
        generate.map((val,index) => {
          return (
            <article className="cardDrop" key={index}>
              <h6>{val.FCTTIME.civil}</h6>
              <img src={val.icon_url} alt="weather icon" />
              <h6>{val.temp.english} degrees</h6>
            </article>
          )
        })
      )
    }
  }



  renderType(){
    if(this.props.type ==="hour"){
      return (
        <article className="card hour-card">
          <h6>{this.props.info.FCTTIME.civil}</h6>
          <img src={this.props.info.icon_url} alt="weather icon" />
          <h6>{this.props.info.temp.english} degrees </h6>
        </article>
      )
    }else{
      return (
        <div>
          <article className="card clickable-card" onClick={() => {this.cardClicked()}}>
            <h6>{this.props.info.FCTTIME.weekday_name}</h6>
            <img src={this.props.info.icon_url} alt="weather icon"/>
            {this.displayHighLow()}
          </article>

          {this.twentyFourHours()}
        </div>

      )
    }
  }

  render() {
    return (
      this.renderType()
    )
  }
}


export default Card
