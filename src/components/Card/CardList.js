import React from 'react'
import Card from './Card.js'

const MoviesList = ({ movies }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        }}
        >
            {movies.map((movie, i) => <Card movie={movie} key={i} />)}
        </div>
    )
}

export default MoviesList

