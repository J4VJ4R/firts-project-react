import React, {Fragment,useState } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const Validar = (event) => {
    event.preventDefault()
    if(!nombre.trim()){
      console.log('el nombre está vacio')
    }
    if(!edad.trim()){
      console.log('edad está vacia')
    }
  }
  return(
    <div className="container">
      <form onSubmit={Validar} className="form-group">
        <input placeholder="tu nombre"
                className="form-control"
                type="text"
                onChange={(e)=> {setNombre(e.target.value) }}
                />
        <input placeholder="tu edad"
                className="form-control mt-2"
                type="text"
                onChange={(e)=> {setEdad(e.target.value) }}
                />
        <input className="btn btn-info mt-2"
                type="submit"/>

      </form>
    </div>
  )
}
export default Formulario