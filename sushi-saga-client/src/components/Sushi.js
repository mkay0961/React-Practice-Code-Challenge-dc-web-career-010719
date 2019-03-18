import React, { Fragment,Component } from 'react'

class Sushi extends Component {
  constructor(props){
    super(props)

  }

  eatSushi = (sushi) =>{
    this.setState({
      eaten: true
    })
    this.props.eatSushi(sushi)
  }

  render() {
    return (
    <div className="sushi">

        {
          this.props.eaten ?
          <div className="plate"></div>
          :
          <div className="plate"
               onMouseEnter={()=>this.eatSushi(this.props.sushi)}>
            <img src={this.props.sushi.img_url} width="100%" />
          </div>
        }

      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
    )
  }
}

export default Sushi
