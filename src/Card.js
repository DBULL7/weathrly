import React, {Component} from 'react'

class Card extends Component {


  renderHourly(){



  }


  renderDaily(){



  }




  render() {

    // if(this.props.type)
    return (





      <article className="card">

        <h6>{this.props.info.FCTTIME.civil}</h6>
        <img src={this.props.info.icon_url} />
        <h6>{this.props.info.temp.english} degrees </h6>
      </article>
    )
  }
}


export default Card
