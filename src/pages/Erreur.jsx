import React from 'react'
import { Link } from 'react-router-dom'

const Erreur = () => (
  <React.Fragment>
    <section id="error404">
      <h1>404</h1>
      <h2>{'Oups! La page que vous demandez n\'existe pas.'}</h2>
      <Link to={'/'}>
        <u>Retourner sur la page d’accueil</u>
      </Link>
    </section>
  </React.Fragment>
)

export default Erreur
