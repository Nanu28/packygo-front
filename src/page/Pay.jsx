import React from 'react'
import { useParams } from 'react-router-dom'


const Pay = () => {
    const { total} = useParams();
  return (
    <div>{total}</div>
  )
}

export default Pay