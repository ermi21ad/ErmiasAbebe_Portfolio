import { Box, Typography, TextField, Button, Grid } from '@mui/material'
import { GitHub, LinkedIn, Telegram, InsertDriveFile } from '@mui/icons-material'

const socialLinks = [
  { icon: <GitHub />, label: 'GitHub', url: '#' },
  { icon: <LinkedIn />, label: 'LinkedIn', url: '#' },
  { icon: <Telegram />, label: 'Telegram', url: '#' },
  { icon: <InsertDriveFile />, label: 'Download Resume', url: '#' }
]

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, px: { xs: 2, md: 4 }, bgcolor: 'background.paper' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact
      </Typography>
      
      <Box sx={{ maxWidth: '480px', mb: 4 }}>
        <TextField
          fullWidth
          label="Name"
          placeholder="Your Name"
          sx={{ mb: 3 }}
          InputProps={{
            sx: {
              borderRadius: '12px',
              backgroundColor: '#1b2127',
              border: '1px solid #3b4754',
              color: 'text.primary',
              height: '56px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              }
            }
          }}
        />
        
        <TextField
          fullWidth
          label="Email"
          placeholder="Your Email"
          sx={{ mb: 3 }}
          InputProps={{
            sx: {
              borderRadius: '12px',
              backgroundColor: '#1b2127',
              border: '1px solid #3b4754',
              color: 'text.primary',
              height: '56px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              }
            }
          }}
        />
        
        <TextField
          fullWidth
          label="Message"
          placeholder="Your Message"
          multiline
          rows={4}
          sx={{ mb: 3 }}
          InputProps={{
            sx: {
              borderRadius: '12px',
              backgroundColor: '#1b2127',
              border: '1px solid #3b4754',
              color: 'text.primary',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              }
            }
          }}
        />
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" size="large">
            Send Message
          </Button>
        </Box>
      </Box>
      
      <Grid container spacing={2} justifyContent="center">
        {socialLinks.map((item, index) => (
          <Grid item key={index}>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              width: '80px'
            }}>
              <Button
                href={item.url}
                target="_blank"
                sx={{ 
                  minWidth: 40,
                  height: 40,
                  backgroundColor: '#283039',
                  color: 'text.primary',
                  '&:hover': { backgroundColor: '#3b4754' },
                  borderRadius: '50%'
                }}
              >
                {item.icon}
              </Button>
              <Typography variant="body2" fontWeight="medium">{item.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}