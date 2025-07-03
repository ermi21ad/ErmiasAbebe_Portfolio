import { Box, Typography, Card, CardMedia, Button, Modal, Chip, Stack } from '@mui/material';
import { useState } from 'react';

const certificates = [
  {
    title: "Leadership in Student Union",
    image: "/p1.jpg",
    tags: ["Leadership", "Student Union"]
  },
  {
    title: "DAAP (Dereja)",
    image: "/p2.jpg",
    tags: ["Training", "Professional"]
  },
  {
    title: "Infoken Book and info. center",
    image: "/p3.jpg",
    tags: ["Information", "Library"]
  },
  {
    title: "Entrepreneurship",
    image: "/p4.jpg",
    tags: ["Business", "Startup"]
  }
];

export default function Certificates() {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box id="certificates" sx={{ 
      py: 8, 
      px: { xs: 2, md: 4 },
      bgcolor: 'background.paper',
      maxWidth: 1200,
      mx: 'auto'
    }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Certificates & Leadership
      </Typography>
      
      <Stack direction="row" flexWrap="wrap" gap={3} justifyContent="center">
        {certificates.map((cert, index) => (
          <Card 
            key={index}
            onClick={() => handleOpen(cert)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            sx={{
              width: { xs: '100%', sm: 280 },
              transition: 'transform 0.3s, box-shadow 0.3s',
              transform: hoveredCard === index ? 'translateY(-8px)' : 'none',
              boxShadow: hoveredCard === index ? 3 : 1,
              cursor: 'pointer',
              '&:hover': {
                boxShadow: 4
              }
            }}
          >
            <CardMedia
              component="img"
              image={cert.image}
              alt={cert.title}
              sx={{
                height: 200,
                objectFit: 'cover'
              }}
            />
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight="medium" gutterBottom>
                {cert.title}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {cert.tags?.map((tag, i) => (
                  <Chip key={i} label={tag} size="small" />
                ))}
              </Stack>
            </Box>
          </Card>
        ))}
      </Stack>

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
          p: 3,
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
              <Typography variant="h5" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
                {selectedCert.title}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                {selectedCert.tags?.map((tag, i) => (
                  <Chip key={i} label={tag} color="primary" size="small" />
                ))}
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}