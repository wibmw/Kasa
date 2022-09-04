import React from 'react'
import { useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import Info from '../components/Info'
import Description from '../components/Description'

const FicheLogement = () => {
  const id = useParams().id

  return (
    <React.Fragment>
      {/************* LightBox Carrousel ******************/}
      <Lightbox id={id} />
      {/************* Info BLock ******************/}
      <Info id={id} />
      {/************* Description BLock ******************/}
      <Description id={id} />
    </React.Fragment>
  )
}

export default FicheLogement
