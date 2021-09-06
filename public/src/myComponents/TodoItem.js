import React, {useContext} from 'react'
import {FirstName, LastName} from '../App'


export default function TodoItem ({todo, onDelete}) {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <p className='small'>Submitted By: {fname} {lname}..</p>
            <button className="btn btn-danger btn-sm" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
        <hr /></>
    )
}
