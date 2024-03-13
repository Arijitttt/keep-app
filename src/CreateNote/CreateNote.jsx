import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import './createnote.css';

export default function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });

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

  return (
    <div className="main_note">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="on"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleInputChange}
        />

        <textarea
          name="content"
          value={note.content}
          onChange={handleInputChange}
          cols="30"
          rows="10"
          placeholder="Write a note..."
        ></textarea>

        <button type="submit" onClick={addEvent}><IoAddOutline /></button>
      </form>
    </div>
  );
}
