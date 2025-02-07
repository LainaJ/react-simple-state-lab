import React, { Component } from 'react';

class Cell extends Component {

    constructor(props){
        super()
        this.state = {
            color: props.value 
        }
    }

     handleClick (e) {
        this.setState({
            color: '#333'
          });
    }

    render () {
        return (
            console.log(this),
            <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={(e) => this.handleClick(e)}
            
            > </div>

        )

    }

}



export default Cell;