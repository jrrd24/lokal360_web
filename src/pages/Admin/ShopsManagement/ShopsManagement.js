import React from 'react'
import DBSidebar from '../../../components/SidebarAndAppbar/DBSidebar'
import ShopsManagementContent from './ShopsManagementContent'


function ShopsManagement() {
  return (
    <DBSidebar component={ShopsManagementContent}/>
  )
}

export default ShopsManagement