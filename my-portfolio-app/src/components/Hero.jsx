import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Box 
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        px: 4,
        position: 'relative'
      }}
    >
      {/* Animated Photo Card */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '40px',
          border: '5px solid #0c7ff2',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        <img 
          src="/p6.jpg" // Replace with your photo path
          alt="Ermias Abebe"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </motion.div>

      <Box sx={{ textAlign: 'center' }}>
        <Button 
          variant="contained" 
          size="small"
          sx={{
            mb: 3,
            backgroundColor: 'primary.dark',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          Electrical & Computer Engineer - 2025
        </Button>
        
        <Typography variant="h1" fontWeight="black" gutterBottom sx={{ 
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          lineHeight: 1.2
        }}>
          Ermias Abebe
        </Typography>
        
        <Typography variant="h5" sx={{ 
          mb: 4,
          color: 'primary.light',
          fontWeight: 400
        }}>
          Graduate Engineer | Network & Systems Enthusiast | Full-stack Web Developer
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              px: 4,
              fontWeight: 'bold',
            }}
          >
            Download Resume
          </Button>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              px: 4,
              fontWeight: 'bold',
              backgroundColor: '#283039',
              '&:hover': { backgroundColor: '#3b4754' }
            }}
            href="#projects"
          >
            View Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
}