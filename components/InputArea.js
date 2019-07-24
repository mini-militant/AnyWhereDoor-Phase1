import React from 'react'

class InputArea extends React.Component{
  state={
    textAreaText:"si"
  }

  inputChange(e){
    e.preventDefault();
    const textAreaInput=e.target.value;
    console.log(textAreaInput);
    this.setState({
      textAreaText:"wi"
    })
  }

  render(){
    return(
      <div>
      <input type="textarea"
      onChange={this.inputChange}
       placeholder="Write your heart out.."/>
       <p>{this.state.textAreaText}</p>
      </div>
    );
  }
}

export default InputArea;