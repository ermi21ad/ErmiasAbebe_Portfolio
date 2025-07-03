import { Box, Typography, Grid, Paper } from '@mui/material';
import { Groups, WorkspacePremium } from '@mui/icons-material';

export default function About() {
  return (
    <Box id="about" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px' }}>
      A highly motivated Electrical and Computer Engineering graduate (Computer Stream) with strong foundations in software development, hardware maintenance, network infrastructure, and embedded systems. Equipped with hands-on experience and professional training from the Dereja Accelerator Program (DAAP), I possess both technical expertise and essential soft skills such as leadership, effective communication, teamwork, time management, adaptability, and problem-solving. My role in the Students' Union honed my organizational and coordination abilities, enhancing my responsibility and attention to detail. I am eager to contribute my diverse skills to a dynamic organization, grow professionally, and make a meaningful impact in engineering and technology.
      </Typography>
      
      <Grid container spacing={3}>
        {[
          { icon: <WorkspacePremium fontSize="large" />, title: 'Leadership in Food Sector (AMU-Student Union)' },
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