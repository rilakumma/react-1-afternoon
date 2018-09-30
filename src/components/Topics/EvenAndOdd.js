import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state = {
            evenArray:[],
            oddArray:[],
            userInput: ''
        }
        this.changeUserInput = this.changeUserInput.bind(this);
        this.solveEvenAndOdd = this.solveEvenAndOdd.bind(this);
    }

    changeUserInput (event){
        this.setState({
            userInput: event.target.value
        })
    }

    solveEvenAndOdd (event){
        const inputArray = this.state.userInput.split(',');
        const evens = inputArray.filter(val => val%2===0);
        const odds = inputArray.filter(val => val%2!==0);
        this.setState({
            evenArray: evens,
            oddArray: odds,
            userInput: ''
        })

    }

    render(){
        const {userInput} = this.state.userInput;
        return (
            <div className="puzzleBox">
                <h4>Evens and Odds</h4>
                <input className="inputLine" value={userInput} onChange={this.changeUserInput} />
                <button className="confirmationButton" onClick={this.solveEvenAndOdd}>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>     
            </div>
        )
    }
}

export default EvenAndOdd;