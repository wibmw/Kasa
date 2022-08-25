/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'

import Banner from '../components/Banner'
import bannerImage from '../images/home.jpg'
// import Api from '../api/Api'
import Card from '../components/Card'

const Home = () => {
  const [apartments, setApartments] = useState()

  // Function to collect data
  const getApiData = async () => {
    await fetch('../../data/logements.json')
      .then((res) => res.json())
      .then((data) => setApartments(data))
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <React.Fragment>
      <Banner imageSrc={bannerImage} text="Chez vous, partout et ailleurs" />
      <section>
        {apartments &&
        apartments.length > 0 &&
        apartments.map((appart) => (
          <Card key={appart.id} image={appart.cover} title={appart.title} />
        ))} 
      </section>

    </React.Fragment>
  )
}

export default Home
