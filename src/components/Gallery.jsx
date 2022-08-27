import React, { useEffect, useState } from 'react'

import Card from '../components/Card'

const Gallery = () => {
  const [apartments, setApartments] = useState()

  // Function to collect data
  const getApiData = () => {
    fetch('../../data/logements.json')
      .then((res) => res.json())
      .then((data) => setApartments(data))
  }

  useEffect(() => {
    getApiData()
  }, [apartments])

  return (
    <React.Fragment>
      <section className="gallery-container">
        {apartments && apartments.length > 0 && apartments.map((appart, index) => <Card key={`${appart.id}-${index}`} id={appart.id} image={appart.cover} title={appart.title} />)}
      </section>
    </React.Fragment>
  )
}

export default Gallery
