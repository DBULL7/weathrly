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
    arr.push(this.props.info.god[i])
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
    arr.push(this.props.info.god[i])
  }
  this.setState({array:arr})

}

  test() {
    this.createCards()
    let change = !this.state.clicked
    this.setState({clicked: change})

  }

  test2() {
    if(this.state.clicked) {
      let dumb = this.state.array
      return (
        dumb.map((val,index) => {
          return (
            <article className="cardDrop">
              <h6>{val.FCTTIME.civil}</h6>
              <img src={val.icon_url} />
              <h6>{val.temp.english} degrees </h6>
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
          <img src={this.props.info.icon_url} />
          <h6>{this.props.info.temp.english} degrees </h6>
        </article>
      )
    }else{
      return (
        <div>
          <article className="card  clickable-card" onClick={() => {this.test()}}>

            <h6>{this.props.info.FCTTIME.weekday_name}</h6>
            <img src={this.props.info.icon_url} />
            {this.displayHighLow()}
          </article>
          {this.test2()}
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
