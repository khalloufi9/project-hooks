import'./Header.css'
import Rate  from './Card/Rate.js'
const Navbar1=({setsearch,setSearchRate,searchRate})=>{
    
    return(<div className="Navbar"> 
     <img src="https://play-lh.googleusercontent.com/9O6SWW0iC3MWiK35ZsaUldGyLPtlz4yDH3Eo4QBtwsWNoFWMOxkEH9AZ8BNE5UvM4xQl=w300"></img>
     <input  className="search-container" type="text" placeholder="Type movie name to search"  onChange={(e)=>setsearch(e.target.value)}></input>
     <Rate setSearchRate={setSearchRate} rating={searchRate}/>
      <ul>
        <li>Home</li>
        <li>Shows</li>
        <li>Movies</li>
      </ul>
      
    </div>
      )}
export default Navbar1;