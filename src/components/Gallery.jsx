import React from 'react'

import logements from '../data/logements.json'
import Card from '../components/Card'

const Gallery = () => {
  return (
    <React.Fragment>
      {/************* Gallery Section ******************/}
      <section className="gallery">
        {/************* Cards creation ******************/}
        {logements && logements.length > 0 && logements.map((appart, index) => <Card key={`${appart.id}-${index}`} id={appart.id} image={appart.cover} title={appart.title} />)}
      </section>
    </React.Fragment>
  )
}

export default Gallery
