import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  constructor(){
    super()
    this.state = {
      index: 0
    }
  }


  newPage = () =>{
    this.setState({
      index: this.state.index + 4
    })
  }

  mapsushi = () => {
    return this.props.allSushi.map((one)=>{

      if(this.props.eatenSushi.includes(one)){
        return <Sushi key={one.id} eaten={true} sushi={one} eatSushi={this.props.eatSushi} />
      }else{
        return <Sushi key={one.id} eaten={false} sushi={one} eatSushi={this.props.eatSushi} />
      }

    })
  }

  getSushi = () =>{
    if(this.state.index === 100){
      this.setState({
        index: 0
      })
    }
    return this.mapsushi().slice(this.state.index,this.state.index+4 )
  }

  render() {
    return (
    <Fragment>
      <div className="belt">
        {
          this.getSushi()
        }
        <MoreButton newPage={this.newPage} />
      </div>
    </Fragment>
  )
  }
}

export default SushiContainer
