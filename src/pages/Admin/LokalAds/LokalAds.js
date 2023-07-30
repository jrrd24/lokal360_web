import React from 'react'
import DBSidebar from '../../../components/DBSidebar'
import { Box } from '@mui/material'
import LokalAdsContent from './LokalAdsContent'

function LokalAds() {
  return (
    <Box>
        <DBSidebar component={LokalAdsContent}/>
    </Box>
  )
}

export default LokalAds