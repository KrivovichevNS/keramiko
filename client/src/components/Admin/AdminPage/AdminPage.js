import React from 'react'
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { selectAuthUser } from '../../../slices/adminSlice';
import AdminMenuPage from '../AdminMenuPage/AdminMenuPage';
import LoginPage from '../LoginPage/LoginPage';

const AdminPage = () => {
  const authUser = useSelector(selectAuthUser)
  return (
    authUser.authUser
      ? <AdminMenuPage />
      : <LoginPage />
  )
}

export default AdminPage