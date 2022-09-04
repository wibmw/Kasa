import { useState, useEffect } from 'react'

/**
 *Fetch data from the API
 */

/* const [logements, setApartments] = useState()

 // Function to collect data
 const getApiData = () => {
   fetch('../data/logements.json')
     .then((res) => res.json())
     .then((data) => setApartments(data))
 }

useEffect(() => {
  getApiData()
}, [logements])*/

const getData = (id) => {
  const [apartments, setApartments] = useState()
  console.log(id)
  // Function to collect data
  const getApiData = () => {
    fetch('../../data/logements.json')
      .then((res) => res.json())
      .then((data) => setApartments(data))
  }

  useEffect(() => {
    getApiData()
  }, [getApiData])
  console.log(apartments)
  const data = id ? apartments && apartments.length > 0 && apartments.filter((appart) => appart.id == id) : data

  console.log(data)
  return data
}

export default getData
