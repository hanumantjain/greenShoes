import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, isAdminAuthenticated }) => {
  return isAdminAuthenticated ? children : <Navigate to='/admin' />
}

export default PrivateRoute