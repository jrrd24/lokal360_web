import React from 'react'
import { Box } from '@mui/material'
import DashboardShopContent from './DashboardShopContent'
import ShopSidebar from '../../../components/Sidebar/ShopSidebar'



function DashboardShop() {
  return (
    <Box>
      <ShopSidebar component={DashboardShopContent} />
    </Box>
  )
}

export default DashboardShop