import React from 'react'
import AdminSidebar from '../../../components/Sidebar/AdminSidebar'
import UsersContent from './UsersContent'

function Users() {
  return (
    <AdminSidebar component={UsersContent}/>
  )
}

export default Users