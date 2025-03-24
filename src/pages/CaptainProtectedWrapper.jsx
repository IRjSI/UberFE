import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

function CaptainProtectedWrapper({ children }) {

    const  { token } = localStorage.getItem('token');

    const { captain, setCaptain } = useContext(CaptainDataContext)

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!token) {
          navigate('/captain-login');
      }
    }, [ token ])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    }).catch(err => {
      console.log(err);
      navigate('/captain-login')
    })

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

export default CaptainProtectedWrapper
