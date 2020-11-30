import React from 'react'
// import people from './data'


const People = (props) => {
    return (
        <div className="textContainer">
            {/* <h2>{props.people.id}</h2> */}
            <div className="person-text">
                 <h6>{props.people.name.first} {props.people.name.last}</h6>
                <ul className="list-text list-name">
                    <li>From: {props.people.city}, {props.people.country}</li>
                    <li>Job Title: {props.people.title}</li>
                    <li>Employer: {props.people.employer}</li>
                </ul>
            </div>

            <div className="movies">
            <h6>Favorite Movies: </h6>
                <ol  className="list-text">
                    <li>{props.people.favoriteMovies[0]}</li>
                    <li>{props.people.favoriteMovies[1]}</li>
                    <li>{props.people.favoriteMovies[2]}</li>
                </ol>
            </div>

            <div>
                {/* <p>{props.length}</p> */}
            </div>
        </div>
    )
}
export default People