import React from 'react'
import {connect} from 'react-redux'
import selectMovie from '../actions/index'


const MovieList = (props) => {
    const listItems = props.movies.map((m)=>{
        return (
            <div key={m.title}>
                <span>{m.title}</span>
                <button onClick={()=>props.selectMovie(m)}>
                Details</button>
            </div>
        )
    })
    return (
        <div className="list-container">
        <h2>Movie List</h2>
        <ul>
            {listItems}
        </ul>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        movies : state.movies
    }
}

const mapDispatchToProps = {
    selectMovie: selectMovie
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList)
