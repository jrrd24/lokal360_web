import React from 'react'
import AdminSidebar from '../../../components/Sidebar/AdminSidebar'
import { Box } from '@mui/material'
import LokalAdsContent from './LokalAdsContent'

function LokalAds() {
  return (
    <Box>
        <AdminSidebar component={LokalAdsContent}/>
    </Box>
  )
}

export default LokalAds