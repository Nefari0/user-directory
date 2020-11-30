import React, { Component } from 'react'
import people from './data.js'
import People from './People'

export default class PeopleList extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            people: people,
            counter: 0,
        }


    }

    cyclePeopleNext() {
        this.setState({
            counter:this.state.counter + 1
        })
    }

    cyclePeoplePrevious() {
        this.setState({
            counter:this.state.counter - 1
        })
    }

    render() {
        const mappedPeople = this.state.people.map((element) => {
            return <People people={element} key={element.id}/>
        })
        return(
            <div>
                <h1 className="dark-text">people list</h1>
                
                {mappedPeople[this.state.counter]}
                <div>
                    <p className="dark-text">{this.state.counter}/{mappedPeople.length}</p>
                    <button onClick={() => this.cyclePeoplePrevious()}>previous</button><button onClick={() => this.cyclePeopleNext()}>next</button>
                </div>
            </div>
        )
    }
}