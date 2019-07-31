import React from 'react'
import Button from '@material-ui/core/Button';
import ReactDom from 'react-dom'
import Navbar from './Navbar'

class InputArea extends React.Component{
  state={
    textAreaText:'',
    Clicked:false
  }

  handleChange=(event)=>{
    this.setState({textAreaText:event.target.value})
  }
  
  handleClick=(event)=>{
    event.preventDefault();  
    console.log(this.state.textAreaText)
    this.setState({
      Clicked:true
    })               
  }

   

  render(){
    return(
      <div>
      <Navbar/>
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea rows="8"
            cols="120"
            placeholder="Write..."
            onChange={this.handleChange}
             />
        </label><br/>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Hello World
        </Button>
        {this.state.Clicked && <p> {this.state.textAreaText}</p>} 
        
      </form>
      
    </div>

      
    );
  }
}

export default InputArea;