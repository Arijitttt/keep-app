import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import './createnote.css'
export default function CreateNote() {
  return (
    <>
      <div className="main_note">
        <form action="">
            <input type="text" autoComplete='on' name="" id="" placeholder='Title'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Write a note...'></textarea>
            <button><IoAddOutline/></button>
        </form>
      </div>
    </>
  )
}
