import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('')

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title and Desc Cannot be Blanked...')
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form className="bg-light p-3 rounded" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange= {(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Desc</label>
                    <input type="text" value={desc} onChange= {(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
                <br /><br />
            </form>
        </div>
    )
}
