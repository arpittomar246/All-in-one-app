import React, { Component } from "react";
import Header from "./Header";
class ClassBased extends Component{

    constructor(){
        super();
        this.state={
            num : 0
        };
    }

    handleInc=()=>{
        this.setState({
            num:this.state.num+1
        })
    }

    handleDec=()=>{
        this.setState({
            num:this.state.num-1
        })
    }

    render(){
        return(
            
            <>
            <Header name="ONE-ON"/>
                <div className="col-sm-6 mx-auto text-center mt-5  " >
                    <h2 className="text-primary">Increase/Decrease</h2>
                    <h4 className="mt-3">Number : {this.state.num}</h4>
                    <button type="button" className="btn btn-primary mt-2" onClick={this.handleInc} >Increase</button>
                    <button type="button" className="btn btn-primary ms-4 mt-2" onClick={this.handleDec}>Decrease</button>
                </div>
            </>
        )
    }
}

export default ClassBased;