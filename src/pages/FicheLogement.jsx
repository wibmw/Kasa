import React from 'react'
import { useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import Info from '../components/Info'
import Description from '../components/Description'

const FicheLogement = () => {
  const id = useParams().id
  console.log(id)
  return (
    <React.Fragment>
      <Lightbox id={id} />
      <Info id={id} />
      <Description id={id} />
    </React.Fragment>
  )
}

export default FicheLogement
