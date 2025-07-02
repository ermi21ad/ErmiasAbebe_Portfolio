import { Box, Typography, Grid, Paper } from '@mui/material';
import { Groups, WorkspacePremium } from '@mui/icons-material';

export default function About() {
  return (
    <Box id="about" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px' }}>
        Recent Electrical and Computer Engineering (Computer Stream) graduate from Arba Minch University with a strong foundation in networking, hardware/software maintenance, and web development. Completed a 16-week industry internship at Amhara Pipe Factory ICT Department, gaining practical experience in network setup, CCTV configuration, and computer maintenance. Demonstrated leadership and teamwork skills through active participation in the Student Union and Infoken Center. Seeking opportunities in the ETO sector, particularly within the marine industry.
      </Typography>
      
      <Grid container spacing={3}>
        {[
          { icon: <WorkspacePremium fontSize="large" />, title: 'Leadership in Food Sector (Student Union)' },
          { icon: <WorkspacePremium fontSize="large" />, title: 'DAAP (Dereja)' },
          { icon: <WorkspacePremium fontSize="large" />, title: 'Entrepreneurship Training' },
          { icon: <Groups fontSize="large" />, title: 'Infoken Membership' },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ 
              p: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              border: '1px solid #3b4754',
              height: '100%',
              backgroundColor: 'background.paper'
            }}>
              {item.icon}
              <Typography variant="body1" fontWeight="bold">{item.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}