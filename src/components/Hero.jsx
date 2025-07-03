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
        background: 'radial-gradient(ellipse at bottom, rgba(12,127,242,0.1) 0%, rgba(0,0,0,0) 70%)',
        px: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(12,127,242,0.15) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          top: '20%',
          left: '10%',
          zIndex: -1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(12,127,242,0.1) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          bottom: '10%',
          right: '15%',
          zIndex: -1
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        style={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '40px',
          border: '5px solid #0c7ff2',
          boxShadow: '0 15px 40px rgba(12,127,242,0.4)',
          position: 'relative',
          zIndex: 1
        }}
        whileHover={{ scale: 1.02 }}
      >
        <img 
          src="/p6.jpg" 
          alt="Ermias Abebe"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(1.05) contrast(1.05)'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to top, rgba(12,127,242,0.7) 0%, transparent 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '8px'
        }}>
          <Typography variant="body2" sx={{ 
            color: 'white', 
            fontWeight: 'bold',
            fontSize: '0.8rem',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)'
          }}>
            Electrical & Computer Engineer
          </Typography>
        </div>
      </motion.div>

      <Box sx={{ 
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Button 
            variant="contained" 
            size="small"
            sx={{
              mb: 3,
              background: 'linear-gradient(90deg, #0c7ff2 0%, #00a8ff 100%)',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(12,127,242,0.3)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(12,127,242,0.4)'
              }
            }}
          >
            Electrical & Computer Engineer - 2025
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Typography variant="h1" fontWeight="black" gutterBottom sx={{ 
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            lineHeight: 1.2,
            background: 'linear-gradient(90deg, #0c7ff2 0%, #00d4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Ermias Abebe
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Typography variant="h5" sx={{ 
            mb: 4,
            color: 'text.secondary',
            fontWeight: 400,
            maxWidth: '600px',
            mx: 'auto'
          }}>
             Engineer | Web Developer |  Network & Systems Enthusiast
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              px: 4,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #0c7ff2 0%, #00a8ff 100%)',
              boxShadow: '0 4px 15px rgba(12,127,242,0.3)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(12,127,242,0.4)'
              }
            }}
            href="https://drive.google.com/file/d/106abaYs-M5zqZJiiNLzVT8nFk_mLdIgJ/view?usp=sharing"
          >
            Download Resume
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            sx={{ 
              px: 4,
              fontWeight: 'bold',
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
                backgroundColor: 'rgba(12,127,242,0.05)'
              }
            }}
            href="#projects"
          >
            View Projects
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}