import React, { useState } from 'react'

const BitcoinIndex = () => {
  let [price, setPrice] = useState('')

  return (
    <p>Current Price (AUD): {price}</p>
  )
}

export default BitcoinIndex