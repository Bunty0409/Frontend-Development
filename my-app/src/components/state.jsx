import React, { Component } from 'react'

export default class state extends Component {
    constructor(){
        super()
        this.state={name:"good morning",age:12}

    }
    ChngData=()=>{
        console.log("hellow");
        this.setState({name:"welcome to reactjs class"})
    }
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{this.state.name}</h1>
                    <button className="btn btn-primary" onClick={this.ChngData}>Click me to change </button>
                    <h1>{this.state.age}</h1>
                    <button className="btn btn-success" onClick={()=>this.setState({age:17})}>Click me to change </button>
                    
                </div>
            </div>
        </div>
      </div>
    )
  }
}
