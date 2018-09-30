import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
        this.updateInput = this.updateInput.bind(this);
        this.solvePalindrome = this.solvePalindrome.bind(this);
    }

    updateInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    solvePalindrome(){
        const normalStr = this.state.userInput;
        
        const strArr = normalStr.split('');
        console.log(strArr)
        const reverseArr = strArr.reverse();
       console.log(reverseArr)
        const newStr = reverseArr.join('');
        console.log(newStr)
        const solved = (normalStr === newStr) ? true : false;
            
        
        console.log(solved)
        this.setState({
            userInput: '',
            palindrome: solved
        })

    }

    render(){
        
        return (
            <div className='puzzleBox'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={this.updateInput} />
                <button className='confirmationButton' onClick={this.solvePalindrome}>Solve</button>
                <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}
export default Palindrome;