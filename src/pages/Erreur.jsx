import React from 'react'
import { Link } from 'react-router-dom'

const Erreur = () => {
  /*let baseURL = ''
  if (process.env.NODE_ENV == 'production') {
    baseURL = 'Kasa/'
  } else {
    baseURL = '/'
  }*/

  return (
    <React.Fragment>
      {/************* Error 404 section ******************/}
      <section id="error404">
        {/************* Error Title ******************/}
        <h1>404</h1>
        {/************* Error Message ******************/}
        <h2>{'Oups! La page que vous demandez n\'existe pas.'}</h2>
        {/************* Link to Home page ******************/}
        <Link to={'/'}>
          <u>Retourner sur la page d’accueil</u>
        </Link>
      </section>
    </React.Fragment>
  )
}

export default Erreur
