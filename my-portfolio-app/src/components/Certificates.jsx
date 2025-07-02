import { Box, Typography, Grid, Button, Modal } from '@mui/material'
import { useState } from 'react'

const certificates = [
  {
    title: "Leadership in Student Union",
    image: "/p1.jpg" 
  },
  {
    title: "DAAP (Dereja)",
    image: "/p2.jpg" 
  },
  {
    title: "Infoken Book and info. center",
    image: "/p3.jpg" 
  },
  {
    title: "Entrepreneurship ",
    image: "/p4.jpg" 
  }
]

export default function Certificates() {
  const [open, setOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  const handleOpen = (cert) => {
    setSelectedCert(cert)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <Box id="certificates" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Certificates & Leadership
      </Typography>
      
      <Grid container spacing={3}>
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Button 
              onClick={() => handleOpen(cert)} 
              sx={{ 
                p: 0, 
                textAlign: 'left', 
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                <Box sx={{ 
                  aspectRatio: '1/1',
                  backgroundImage: `url(${cert.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)'
                  }
                }} />
                <Typography variant="body1" fontWeight="medium">
                  {cert.title}
                </Typography>
              </Box>
            </Button>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{
          outline: 'none',
          maxWidth: '90%',
          maxHeight: '90%',
          bgcolor: 'background.paper',
          p: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {selectedCert && (
            <>
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '80vh',
                  display: 'block',
                  borderRadius: 1,
                  objectFit: 'contain'
                }}
              />
              <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
                {selectedCert.title}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  )
}