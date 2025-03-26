import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

function UserProtectedWrapper({ children }) {

    const token = localStorage.getItem('token');
    const [isLoading, setIsLoading] = useState(true);

    const { user, setUser } = useContext(UserDataContext)
    
    const navigate = useNavigate();
    
    
    useEffect(() => {
      console.log(token);
      if (!token) {
        navigate('/login');
      }
      
      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      }).catch(err => {
        console.log("err::",err);
        navigate('/login')
      })
    }, [ token ])


    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }

  return (
    <>
      {children}   
    </>
  )
}

export default UserProtectedWrapper
