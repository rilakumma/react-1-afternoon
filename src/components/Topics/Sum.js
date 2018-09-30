import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1:0,
            number2:0,
            sum: null
        }
        this.updateNum1 = this.updateNum1.bind(this);
        this.updateNum2 = this.updateNum2.bind(this);
        this.calcSum = this.calcSum.bind(this);
    }

    updateNum1(val){
        this.setState({
            number1: parseInt(val, 10)
        })
    }

    updateNum2(val){
        this.setState({
            number2: parseInt(val, 10)
        })
    }

    calcSum(num1,num2){
        this.setState({
            sum: num1 + num2
        })
    }

    render(){
        return(

            <div className='puzzleBox'>
                <h4>Sum Calculator</h4>
                <input className="inputLine" onChange={e=>this.updateNum1(e.target.value)}/>
                <input className='inputLine' onChange={e=>this.updateNum2(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.calcSum(this.state.number1, this.state.number2)}>Solve</button>
                <span className='resultsBox'>{this.state.sum}</span>
            </div>
        )
    }
}
export default Sum;