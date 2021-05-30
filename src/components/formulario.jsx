import React, {Fragment,useState } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  return(
    <div className="container">
      <form className="form-group">
        <input placeholder="tu nombre"
                className="form-control"
                type="text"
                onChange={()=> {}}
                />
        <input placeholder="tu edad"
                className="form-control mt-2"
                type="text"/>
        <input className="btn btn-info mt-2"
                type="submit"/>

      </form>
    </div>
  )
}
export default Formulario