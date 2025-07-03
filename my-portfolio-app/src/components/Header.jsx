import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: 'background.default',
        borderBottom: '1px solid #283039',
        py: 1
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </g>
          </svg>
          <Typography variant="h6" fontWeight="bold">ERMIAS-ABEBE-ZEWDIE</Typography>
        </Box>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
          {['About', 'Skills', 'Internship', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <Typography 
              key={item} 
              variant="body2" 
              fontWeight="medium"
              component="a"
              href={`#${item.toLowerCase()}`}
              sx={{ 
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' }
              }}
            >
              {item}
            </Typography>
          ))}
          
          <IconButton 
            onClick={() => setDarkMode(!darkMode)}
            sx={{ 
              backgroundColor: '#283039',
              color: 'text.primary',
              '&:hover': { backgroundColor: '#3b4754' }
            }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          
          <Avatar 
            src="/p6.jpg" 
            sx={{ 
              width: 40, 
              height: 40,
              border: '2px solid #0c7ff2'
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}