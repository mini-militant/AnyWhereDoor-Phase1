import React from 'react'
import Button from '@material-ui/core/Button';

class Like extends React.Component{

  constructor(props){
    super(props)
    this.state={
      iconChecked:false
    }
  }

  updateIconChecking=(event)=>{
    
    this.setState(prevState=>{
      return{
        iconChecked:!prevState.iconChecked
      }      
    })
  }

  render(){
    return(
        <div>   
        <Button size="small" 
        onClick={this.updateIconChecking}>

            { this.state.iconChecked ? <i class="material-icons">
            favorite_border
            </i> :
            <i class="material-icons">
            favorite
            </i>
        }
        </Button>  
        </div>
    )
  }
}


export default Like