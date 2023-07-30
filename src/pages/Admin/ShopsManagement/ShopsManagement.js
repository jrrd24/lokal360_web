import React from 'react'
import AdminSidebar from '../../../components/Sidebar/AdminSidebar'
import ShopsManagementContent from './ShopsManagementContent'


function ShopsManagement() {
  return (
    <AdminSidebar component={ShopsManagementContent}/>
  )
}

export default ShopsManagement