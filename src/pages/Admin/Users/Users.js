import React from 'react'
import DBSidebar from '../../../components/SidebarAndAppbar/DBSidebar'
import UsersContent from './UsersContent'

function Users() {
  return (
    <DBSidebar component={UsersContent}/>
  )
}

export default Users