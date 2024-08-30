import React from 'react';
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";


export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={() => {
                handleEditTodo(index)
            }}><FiEdit /></button>

            <button onClick={() => {
                handleDeleteTodo(index)
            }}><FaRegTrashAlt /></button>
        </div>
    </li>
  )
}
