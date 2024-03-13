import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import './createnote.css';

export default function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  const [expand,setExpand]=useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNote(prevNote => ({
      ...prevNote,
      [name]: value,
    }));
    console.log(note);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents form submission

    // Handle form submission logic here
    //console.log(note);
  };

  const addEvent = () => {
    props.passNote(note)
    setNote({ title: "", content: "" })
  }
  const expandIt = ()=>{
    setExpand(true)
  }
  const normal = ()=>{
    setExpand(false)
  }
  return (
    <div className="main_note">
      <form onSubmit={handleSubmit}>

        {expand?
        <input
          type="text"
          autoComplete="on"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleInputChange}
        /> :null}

        <textarea
          name="content"
          value={note.content}
          onChange={handleInputChange}
          cols="30"
          rows="10"
          placeholder="Write a note..."
          onClick={expandIt}
          onDoubleClick={normal}
        ></textarea>

{expand?
        <button type="submit" onClick={addEvent}><IoAddOutline /></button> :null}
      </form>
    </div>
  );
}
