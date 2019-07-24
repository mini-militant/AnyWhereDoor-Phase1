import React from 'react'

class InputArea extends React.Component{
  state={
    textAreaText:''
  }

  handleChange=(event)=>{
    this.setState({textAreaText:event.target.value})
  }

  handleClick=(event)=>{
    event.preventDefault();
    this.state.textAreaText!=null?<p>{this.state.textAreaText}</p>:console.log("write something");
    console.log("hi");
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea rows="8"
            cols="120"
            placeholder="Write.."
            onChange={this.handleChange}
             />
        </label>
        <button onClick={this.handleClick}>Submit</button>
        
      </form>
    </div>

      
    );
  }
}

export default InputArea;