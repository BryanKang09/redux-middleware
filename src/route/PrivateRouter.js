import React from 'react'
// import ProductAll from '../page/ProductAll'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({authenticate}) => {
  return (authenticate==true?<ProductDetail/>:<Navigate to="/login"/>
  )
}

export default PrivateRouter
