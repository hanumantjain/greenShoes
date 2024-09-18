import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './userPages/Home';
import AdminLogin from './adminPages/AdminLogin';
import AdminHome from './adminPages/AdminHome';
import { useEffect, useState } from 'react';
import PrivateRoute from './adminComponents/PrivateRoute';
import NotFound from './components/NotFound';

function App() {
  const [isAdminAuthenticated, setisAdminAuthenticated] = useState(
    sessionStorage.getItem('isAdminAuthenticated') === 'true'
  )
  const navigate = useNavigate()

  useEffect(() => {
    sessionStorage.setItem('isAdminAuthenticated',isAdminAuthenticated)
  },[isAdminAuthenticated])

  const handleAdminLogin = (authStatus) => {
    setisAdminAuthenticated(authStatus)
    if(authStatus){
      navigate('/adminHome')
    }
  }

  const handleAdminLogOut = () => {
    setisAdminAuthenticated(false)
    sessionStorage.removeItem('isAdminAuthenticated')
    navigate('/admin')
  }
  
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/admin' 
          element={<AdminLogin onLogin={handleAdminLogin} />} />
         <Route 
            path='/adminHome' 
            element={
              <PrivateRoute isAdminAuthenticated={isAdminAuthenticated} >
              <AdminHome onLogOut={handleAdminLogOut}/>
              </PrivateRoute>
            } />
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
