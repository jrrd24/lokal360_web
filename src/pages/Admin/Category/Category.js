import React from 'react'
import CategoryContent from './CategoryContent'
import AdminSidebar from '../../../components/Sidebar/AdminSidebar'

function Category() {
  return (
    <AdminSidebar component={CategoryContent}/>
  )
}

export default Category