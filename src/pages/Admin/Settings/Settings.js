import React from 'react'
import DBSidebar from '../../../components/SidebarAndAppbar/DBSidebar'
import SettingsContent from './SettingsContent'

function Settings() {
  return (
    <DBSidebar component={SettingsContent}/>
  )
}

export default Settings