import React, {Fragment, useState} from 'react'

const Temperatura = () =>{
  const [temperatura, setTemperatura] = useState(19)
  const Subir = () => {
    setTemperatura(temperatura + 1)
  }
  const Bajar = () => {
    setTemperatura(temperatura - 1)
  }
  return(
    <Fragment className="container">
      <h2>La Temperatura es: {temperatura}</h2>
      <p>
        {
          temperatura > 21 ? 'Hace calor' : 'Hace frio'
        }
      </p>
      <button className="btn btn-success" onClick={Subir}>Aumentar Temperatura</button>
      <button className="btn btn-danger" onClick={Bajar}>Reducir Temperatura</button>
    </Fragment>
  )
}
export default Temperatura