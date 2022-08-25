import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
/**
 *Fetch data from the API
 */

const getData = async (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return

    const getData = () => {
      fetch(url, {
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then(function (response) {
          if (response.ok) {
            response.json().then(function (myJson) {
              setData(myJson)
              console.log(myJson)
            })
          } else {
            console.log(response.status)
            const errorMsg = `${response.status} : ${response.statusText}`
            return <div className="error">{errorMsg}</div>
          }
        })
        .catch(function (error) {
          console.log(error)
          return <Navigate to="/error/" />
        })
    }
    getData()
  }, [url])
  console.log(data)
  return { data }
}

export default getData
