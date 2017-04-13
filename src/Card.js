import React, {Component} from 'react'

class Card extends Component {


  renderHourly(){



  }


  renderDaily(){



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
        <article className="card">

          <h6>{this.props.info.FCTTIME.weekday_name}</h6>
          <img src={this.props.info.icon_url} />
          <h6>{this.props.info.temp.english} degrees </h6>
        </article>

      )


    }

  }


  render() {

    // if(this.props.type)
    return (
this.renderType()
    )
  }
}


export default Card
