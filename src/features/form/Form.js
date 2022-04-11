import React, { useState } from 'react'
import Login from '../Login/Login';

const initialForm = {
    name: "",
    email: ""
}

const Form = ({addUser}) => {
    const [form, setForm] = useState(initialForm)
    const {name, email} = form;

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        addUser(form)
    }

  return (
      <>
    <form onSubmit={handleSubmit} className='container'>
        <input type="text" name="name" value={name} placeholder="Ingrese su Nombre" onChange={handleChange}/>
        <input type="email" name="email" value={email} placeholder="Ingrese su Eamil" onChange={handleChange} />
    <button>Enviar</button>
    </form>
    <div>
        <Login/>
    </div>
    </>
  )
}

export default Form