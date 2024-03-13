import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import CreateNote from './CreateNote/CreateNote'
import Note from './Note/Note'

function App() {
  const [addItem, setAddItem] = useState([])

  const addNote = (note) => {
    console.log(note)
    //alert('i am clicked')
    setAddItem((prevNote) => {
      return [...prevNote, note]
    })
    
  }
const onDelete = (id) =>{
  setAddItem((oldData)=>{
    return oldData.filter((arrElem,index)=>{
      return index !== id
    })
  })
}
  return (
    <>
     <Header/>
     <CreateNote 
     passNote = {addNote}
     />
     
<div className="noteRoot">

{addItem.map((val,index)=>{
      return(
        <Note
        key = {index}
        id = {index}
        title = {val.title}
        content = {val.content}
        deleteItem = {onDelete}
        />
      )
    })}

</div>
  <div className="footer">
  <Footer/>
  </div>
    
     
    </>
  )
}

export default App
