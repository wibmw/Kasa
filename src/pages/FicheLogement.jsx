import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import Info from '../components/Info'
import Description from '../components/Description'
import logements from '../data/logements.json'

const FicheLogement = () => {
  const navigate = useNavigate()
  const urlId = useParams().id
  const [apart, setApartment] = useState(false)

  useEffect(() => {
    // Recherche de l'annonce avec l'identifiant qui se trouve dans l'URL.
    const apartment = logements.find((appart) => appart.id == urlId)
    if (!apartment) {
      navigate('/error')
    } else {
      setApartment(apartment)
    }
  }, [apart])

  const { id, title, rating, location, host, tags, pictures, description, equipments } = apart

  return (
    <React.Fragment>
      {apart && (
        <>
          {/************* LightBox Carrousel ******************/}
          <Lightbox title={title} pictures={pictures} />
          {/************* Info BLock ******************/}
          <Info rating={rating} location={location} title={title} host={host} tags={tags} />
          {/************* Description BLock ******************/}
          <Description id={id} description={description} equipments={equipments} />
        </>
      )}
    </React.Fragment>
  )
}

export default FicheLogement
