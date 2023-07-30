import React from 'react'
import { Box } from '@mui/material'
import DashboardShopContent from './DashboardShopContent'
import DBSidebarShop from '../../../components/DBSidebarShop'



function DashboardShop() {
  return (
    <Box>
      <DBSidebarShop component={DashboardShopContent} />
    </Box>
  )
}

export default DashboardShop