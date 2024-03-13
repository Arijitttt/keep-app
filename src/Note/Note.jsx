import React from 'react'
import { MdFolderDelete } from "react-icons/md";
import './note.css'
export default function Note( { title, content }) {
  return (
    <>
      <div className="note">
        <h1>{title}</h1>
        <br />
        <p>{content}</p>
        <button className='btn'>
        <MdFolderDelete className='deleteIcon'/>
        </button>
        
      
      </div>
    </>
  )
}
