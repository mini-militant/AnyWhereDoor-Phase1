import React from 'react'
import Button from '@material-ui/core/Button';
import ReactDom from 'react-dom'
import Navbar from './Navbar'
import List from './List'
import ListCard from './ListCard'

class InputArea extends React.Component{
  //items - to store every message that we are passing
  //term - to store what we are passing in textArea 
  state={
    items:[],
    term:''    
  }

  handleChange=(event)=>{
    this.setState({term:event.target.value})
  }
  
  
  //Cleans the input field after a submit action is triggered
  //Pushes every term to our array of items after submit

  addMessage=(event)=>{
    event.preventDefault();
    this.setState({
      term:'',
      items:[...this.state.items,this.state.term]
    })
  }

   

  render(){
    return(
      <div>
      
      <form >
        <label>
          <textarea 
            rows="8"
            cols="120"
            placeholder="Write..."
            value={this.state.term}
            onChange={this.handleChange}
             />
        </label><br/>
        <Button  onClick= {this.addMessage} variant="contained" color="primary" >
          Submit
        </Button>        
      </form>
      <List items={this.state.items}/>
      <ListCard items={this.state.items}/>
    </div>      
    );
  }
}

export default InputArea;