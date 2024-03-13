import React from 'react'
import { MdFolderDelete } from "react-icons/md";
import './note.css'
export default function Note() {
  return (
    <>
      <div className="note">
        <h1>Title</h1>
        <br />
        <p>Content</p>
        <button className='btn'>
        <MdFolderDelete className='deleteIcon'/>
        </button>
        
      
      </div>
    </>
  )
}
