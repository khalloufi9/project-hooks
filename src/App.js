import logo from './logo.svg';
import './App.css';
import React,{ useState,useEffect} from 'react';
import Header1 from './components/Header';
import CardList from './components/Card/CardList.js';
import  Rate from './components/Card/Rate.js';
import Add from './components/Card/Add.js';
import {Data} from './components/Card/Data.js';
import Card from './components/Card/Card';


function App() {
  const [movies, setmovies] = useState(Data)
  const [search, setSearch] = useState("")
  const [searchRate, setSearchRate] = useState(0)
  const addNewMovie = (x) => {
    setmovies([...movies, x])
  }
  
  return (
    
<div className="App">

<Header1 setsearch={setSearch} setSearchRate={setSearchRate}/>
<CardList movies={movies.filter(el => el.name.toLowerCase().includes(search.toLowerCase().trim())&&
                                              el.Rating >= searchRate)} />
<Add addNewMovie={addNewMovie}/>
    </div>
  )
}

export default App;
