import { Box, Typography, Paper } from '@mui/material'

export default function Internship() {
  return (
    <Box id="internship" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Internship
      </Typography>
      
      <Paper sx={{ 
        p: 3, 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 3,
        bgcolor: 'background.paper'
      }}>
        <Box sx={{ flex: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Amhara Pipe Factory PLC - ICT Dept
          </Typography>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            16-Week Internship
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gained hands-on experience in setting up physical network infrastructure, 
            configuring TP-Link routers, monitoring analog CCTV systems with DVR, 
            and diagnosing/fixing PC hardware and software issues.
          </Typography>
        </Box>
        <Box sx={{ 
          flex: 1,
          minHeight: 200,
          backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuA7xS1QgoM_W-bxSYdWqvuR8fgzISk6vrbmcmAyvD5_Kiq62m6rjs1BG07btUMy1vhiMZEWybDw1jLrretIyNk08lKtHhsepSkxqbTaqPJVJlXGGsFmYOVFck6uSCV65cAMl9HeMerMXmaaEF5ogaV748mpc1h_9MTYvf-YRPlyChksIPzlX_r9A5tbb4lO1GiBoVUxwobOcph-LSOKwpRA3tUkHLFyWpmmF5YQcWS8dQTAHZOZ3DOlqDUO7MYKOssacfaEUDjSTCQ)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2
        }} />
      </Paper>
    </Box>
  )
}