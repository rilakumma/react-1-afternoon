import React, {Component} from 'react';

class FilterObjects extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [{name: 'cinnamoroll', age: 20}, {name: 'keroppi', hairColor: 'green',}, {name: 'kiki', title: 'angel'}, {name: 'badtz maru', hairColor:'black'}],
            userInput: '',
            filteredArray: []
        }
        this.changeInput = this.changeInput.bind(this);
        this.solveFilter = this.solveFilter.bind(this);
    }

    changeInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    solveFilter(){
        const filterProp = this.state.userInput;
        const arrayToFilter = this.state.unFilteredArray;
        const filtered = arrayToFilter.filter(element=> element.hasOwnProperty(filterProp));
        this.setState({
            userInput: '',
            filteredArray: filtered
        })

    }

    render(){
        const {userInput} = this.state.userInput;
        return (
            <div className='puzzleBox'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' value={userInput} onChange={this.changeInput}/>
                <button className='confirmationButton' onClick={this.solveFilter}>Filter</button>
                <span className='resultsBox'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObjects;