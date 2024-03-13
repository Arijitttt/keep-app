import React from 'react'
import { MdFolderDelete } from "react-icons/md";
import './note.css'

export default function Note( { id,title,content,deleteItem }) {
  const deleteNote = () => {
    deleteItem(id)
  }
  return (
    <>
      <div className="note">
        <h1>{title}</h1>
        <br />
        <p>{content}</p>
        <button className='btn' onClick={deleteNote}>
        <MdFolderDelete className='deleteIcon'/>
        </button>
        
      
      </div>
    </>
  )
}
