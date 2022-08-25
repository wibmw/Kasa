/* eslint-disable array-callback-return */
import React from 'react'

import Banner from '../components/Banner'
import bannerImage from '../images/home.jpg'
import Gallery from '../components/Gallery'


const Home = () => {

  return (
    <React.Fragment>
      <Banner imageSrc={bannerImage} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </React.Fragment>
  )
}

export default Home
