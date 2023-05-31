/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
        {cart.map(item => <li>{item.tipo}</li>)}
    </div>
  )
}

export default Cart