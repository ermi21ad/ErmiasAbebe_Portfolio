import { Box, Typography, Card, CardMedia, Chip, Stack } from '@mui/material';
import { useState } from 'react';

export default function Internship() {
  const [hovered, setHovered] = useState(false);

  const skills = [
    "Network Infrastructure", 
    "Router Configuration", 
    "CCTV Systems", 
    "Hardware Repair",
    "Software Troubleshooting"
  ];

  return (
    <Box id="internship" sx={{ 
      py: 8, 
      px: { xs: 2, md: 4 },
      bgcolor: 'background.paper',
      maxWidth: 1200,
      mx: 'auto'
    }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Internship Experience
      </Typography>
      
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? 3 : 1,
          '&:hover': {
            boxShadow: 4
          }
        }}
      >
        <CardMedia
          component="img"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xS1QgoM_W-bxSYdWqvuR8fgzISk6vrbmcmAyvD5_Kiq62m6rjs1BG07btUMy1vhiMZEWybDw1jLrretIyNk08lKtHhsepSkxqbTaqPJVJlXGGsFmYOVFck6uSCV65cAMl9HeMerMXmaaEF5ogaV748mpc1h_9MTYvf-YRPlyChksIPzlX_r9A5tbb4lO1GiBoVUxwobOcph-LSOKwpRA3tUkHLFyWpmmF5YQcWS8dQTAHZOZ3DOlqDUO7MYKOssacfaEUDjSTCQ"
          alt="Amhara Pipe Factory"
          sx={{
            width: { md: 400 },
            height: { xs: 200, md: 'auto' },
            objectFit: 'cover'
          }}
        />
        
        <Box sx={{ 
          flex: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Box>
            <Typography variant="body1" color="text.secondary">
              Amhara Pipe Factory PLC - ICT Department
            </Typography>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 1 }}>
              16-Week Intensive Internship
            </Typography>
            <Typography variant="body1" paragraph>
              Gained hands-on experience in setting up physical network infrastructure, 
              configuring TP-Link routers, monitoring analog CCTV systems with DVR, 
              and diagnosing/fixing PC hardware and software issues.
            </Typography>
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" fontWeight="medium" gutterBottom>
              Key Skills Gained:
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill, index) => (
                <Chip 
                  key={index} 
                  label={skill} 
                  size="small" 
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}