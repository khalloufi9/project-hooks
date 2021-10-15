
import './Add.css'
import Rate from './Rate.js'
import Data from './Data.js';
import React,{useState} from 'react'

const Add = ({addNewMovie}) => {
   const [show, setshow] = useState(false)

   const [name1, setname1] = useState('')
   const [url, seturl] = useState('')
   const [rate, setrate] = useState(0)
   const [modalIsOpen, setIsOpen] = useState(false);

   const addname=(event)=>{
     setname1(event.target.value);
    console.log({name1})
 } 
 const addurl=(event)=>{
  seturl(event.target.value);
 console.log({url})
}

const addrate=(event)=>{
   setrate(event.target.value);
  console.log({rate})
 }
 function openModal() {
   setIsOpen(true);
}

function closeModal() {
   setIsOpen(false);
}

 const add = () => {
    addNewMovie({
      name: name1,
      src:url,
      Rating: rate
  
   });  
   console.log("zeyid")  
}
 

   return (
<div>
<section class="form-style-3">
<form>
<fieldset><legend>ADD A FILM</legend>
<label for="field1"><span>NAME: <span class="required">*</span></span><input type="text" class="input-field" name="field1" value={name1} onChange={addname.bind(this)} /></label>
<label for="field2"><span>URL:<span class="required">*</span></span><input type="text" class="input-field" name="field2" value={url} onChange={addurl.bind(this)}  /></label>
<label for="field3"><span>Note/5:<span class="required">*</span></span><input type="text" class="input-field" name="field3" value={rate} onChange={addrate.bind(this)}  /></label>
</fieldset>
</form>
<button onClick={add} >Submit</button>

</section>
</div>
   )
}

export default Add;
