import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state={
            unfilteredArray: ['Madi','Jemila','Aishia','Natalie','Tyler','Madi'],
            userInput: '',
            filteredArray: []
        }
        this.changeInput = this.changeInput.bind(this);
        this.solveString = this.solveString.bind(this);
    }

    changeInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    solveString(){
         const filterString = this.state.userInput;
         const arrayCopy = this.state.unfilteredArray;
         const filtered = arrayCopy.filter(element => element.includes(filterString));
         this.setState({
             userInput: '',
             filteredArray: filtered
         })
    }

    render(){
        return (
            
            <div className="puzzleBox">
            <h4>Filter String</h4>
            <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArray)}</span>
            <input className='inputLine' onChange={this.changeInput}/>
            <button className='confirmationButton' onClick={this.solveString}>Filter</button>
            <span className='resultsBox'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>

        )
    }
}

export default FilterString;