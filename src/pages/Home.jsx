import React from 'react'
import Banner from '../components/Banner'
import bannerImage from '../assets/home.jpg'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <React.Fragment>
      {/************* Home Banner ******************/}
      <Banner imageSrc={bannerImage} text="Chez vous, partout et ailleurs" />
      {/************* Home Gallery ******************/}
      <Gallery />
    </React.Fragment>
  )
}

export default Home
