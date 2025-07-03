import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3,
        textAlign: 'center',
        borderTop: '1px solid #283039'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Ermias Abebe. All rights reserved.
      </Typography>
    </Box>
  )
}