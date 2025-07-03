import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Telegram,
  InsertDriveFile,
  Phone,
  ContentCopy
} from '@mui/icons-material';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { icon: <GitHub />, label: 'GitHub', url: 'https://github.com/ermi21ad' },
  { icon: <LinkedIn />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ermias-abebe-0a8b702b4' },
  { icon: <Telegram />, label: 'Telegram', url: 'https://t.me/Jeremiah1994' },
  { icon: <InsertDriveFile />, label: 'Resume', url: 'https://drive.google.com/file/d/106abaYs-M5zqZJiiNLzVT8nFk_mLdIgJ/view?usp=sharing' },
  { icon: <Phone />, label: 'Call Me', url: 'tel:+251965335366' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill all fields',
        severity: 'error'
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_tj6betf',
        'template_3kj97ye',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'z0h_V5tWTwO-G0swa'
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+251965335366');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box id="contact" sx={{ py: 8, px: { xs: 2, md: 4 }, bgcolor: 'background.paper' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Get In Touch
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '480px', mb: 4 }}>
        <TextField
          fullWidth
          name="name"
          label="Name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
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
          name="email"
          type="email"
          label="Email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
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
          name="message"
          label="Message"
          placeholder="Your Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
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

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Phone color="primary" sx={{ mr: 1 }} />
            <Typography variant="body1" sx={{ mr: 1 }}>
              +251 965335366
            </Typography>
            <IconButton
              size="small"
              onClick={handleCopyPhone}
              sx={{ color: copied ? 'primary.main' : 'text.secondary' }}
            >
              <ContentCopy fontSize="small" />
            </IconButton>
            {copied && (
              <Typography variant="caption" color="primary" sx={{ ml: 1 }}>
                Copied!
              </Typography>
            )}
          </Box>

          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={isLoading}
            sx={{
              background: 'linear-gradient(90deg, #0c7ff2 0%, #00a8ff 100%)',
              boxShadow: '0 4px 15px rgba(12,127,242,0.3)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(12,127,242,0.4)'
              },
              '&:disabled': {
                opacity: 0.7
              }
            }}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>
      </Box>

      <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 3 }}>
        Or connect with me through:
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {socialLinks.map((item, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                width: '80px'
              }}
            >
              <Button
                href={item.url}
                target="_blank"
                sx={{
                  minWidth: 40,
                  height: 40,
                  backgroundColor: '#283039',
                  color: 'text.primary',
                  '&:hover': {
                    backgroundColor: '#3b4754',
                    transform: 'translateY(-2px)'
                  },
                  borderRadius: '50%',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.icon}
              </Button>
              <Typography variant="body2" fontWeight="medium">{item.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
