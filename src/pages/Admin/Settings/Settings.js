import React from 'react'
import AdminSidebar from '../../../components/Sidebar/AdminSidebar'
import SettingsContent from './SettingsContent'

function Settings() {
  return (
    <AdminSidebar component={SettingsContent}/>
  )
}

export default Settings