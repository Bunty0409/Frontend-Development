import React, { Component } from 'react'

export default class lifecycle extends Component {
    constructor(props){
        super()
        console.log("constructor called");
        this.state={counter:0}
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps called");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate called");
    }
    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate called");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate called");
        console.log('prevProps',prevState);
    }
    
    changeData=()=>{
        console.log("btn called");
        this.setState({counter:this.state.counter+1})
    }
  render() {
    console.log("render called");
    return (
      <div>
        <div className="container"></div>
        <div className="row">
            <div className="col">
                <h1>{this.state.counter}</h1>
                <button className='btn btn-primary' onClick={this.changeData}></button>
            </div>
        </div>
      </div>
    )
  }
}
