
import React,{useState} from 'react';
import  './Card.css'
import Data from './Data.js';
import Rate from './Rate.js'
const Card=({movie})=>
{
return (
<div className="film">
<img src={movie.src} alt="image"></img>
<h1>{movie.name}</h1>
<Rate rating={movie.Rating}/>

</div>)
}

export default Card;