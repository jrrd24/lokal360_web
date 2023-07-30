import { Box } from '@mui/material'
import React from 'react'
import DBSidebarShop from '../../../components/Sidebar/ShopSidebar'
import AnalyticsShopContent from './AnalyticsShopContent'

function AnalyticsShop() {
  return (
    <Box>
        <DBSidebarShop component={AnalyticsShopContent}/>
    </Box>
  )
}

export default AnalyticsShop