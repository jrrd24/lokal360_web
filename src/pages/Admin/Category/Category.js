import React from 'react'
import CategoryContent from './CategoryContent'
import DBSidebar from '../../../components/SidebarAndAppbar/DBSidebar'

function Category() {
  return (
    <DBSidebar component={CategoryContent}/>
  )
}

export default Category