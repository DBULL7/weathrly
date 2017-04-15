import React, {Component} from 'react'

class Card extends Component {

  constructor() {
    super()
    this.state = {
      clicked: false

    }
  }

createCards(){
  console.log(this.props.keys)
}


  test() {
    let change = !this.state.clicked
    this.setState({clicked: change})
    this.createCards()
  }

  test2() {
    if(this.state.clicked) {
      let dumb = [1,2,3,4,5,6,7,8,9,10]
      return (
        dumb.map(dum => {
          return (
            <article className="hourlyCards">
              <h6>{this.props.info.FCTTIME.civil}</h6>
              <img src={this.props.info.icon_url} />
              <h6>{this.props.info.temp.english} degrees </h6>
            </article>
          )
        })
      )
    }
  }

  renderType(){
    if(this.props.type ==="hour"){
      return (
        <article className="card">

          <h6>{this.props.info.FCTTIME.civil}</h6>
          <img src={this.props.info.icon_url} />
          <h6>{this.props.info.temp.english} degrees </h6>
        </article>
      )
    }else{
      return (
        <div>
          <article className="card" onClick={() => {this.test()}}>

            <h6>{this.props.info.FCTTIME.weekday_name}</h6>
            <img src={this.props.info.icon_url} />
            <h6>{this.props.info.temp.english} degrees </h6>
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
