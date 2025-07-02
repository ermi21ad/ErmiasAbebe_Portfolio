import { Box, Typography, Paper, Button } from '@mui/material'
import { InsertDriveFile } from '@mui/icons-material'

const projects = [
  {
    title: "FECE-Lab Management System",
    description: "A comprehensive lab management system built with HTML/CSS/JS, Node.js, and MySQL. Features include a QR code attendance system, lab report handling, admin/faculty dashboards, and equipment request tracking.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoYwp2Eu-OagqcIWrAWYOcWmKmQ3hbVERs5xXudvc8sCRMWKm5ymam6tGGAKW-G-mJn_7uWO1lomtcXYucNXMFuPL5HszLW1O9QXCGo3sUMyVAg8hl_Y595Jb6srMkpuHhPwi-oeYm47tcBGNRtM9ocNu7iJnd8_vUQrjizx5KKaj85rhdjZ7N7BluUHGMvj7E_b__Ls6YBxYUWd1xfKPXMAW05d_RcNi_vh8nOOSQ_dLRWRqODjMnoAtDfZwjAShqipCPDxfkWSU",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Fingerprint Voting System (Python)",
    description: "A secure and efficient voting system using fingerprint authentication. Currently being upgraded for the 2024-25 academic year.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgZFezwnlnE1M_8ErwZp9bpLRpoXwogki0ODBMIpgE04g3gNt2DW0VEeuHwd2O6n6NwHQyHq6y3cHEKg33o-0vBWL-Rkp4arQDJDbzq9ylnQ4GqDaC8x_1l0ZdjgYG8FUt3ROSr2aOFnma_zCDj91usbKdFQIG9qpLo4SBOv2yTWUkEuNmnVYMmXG6F6c_zka6vUxeRlNS6zUp6f_fkg63wJP8hi2xjhPVPnlAFjWhVxwj-buDL3jClLDIecX0tThRmQjnHLNsBCA",
    demoLink: "#",
    codeLink: "#"
  }
]

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8, px: { xs: 2, md: 4 }, bgcolor: 'background.paper' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Projects
      </Typography>
      
      {projects.map((project, index) => (
        <Paper 
          key={index}
          sx={{ 
            p: 3, 
            mb: 4,
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 3,
            bgcolor: 'background.paper'
          }}
        >
          <Box sx={{ 
            flex: 1,
            minHeight: 300,
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 2
          }} />
          
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {project.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="contained" href={project.demoLink}>
                View Demo
              </Button>
              <Button 
                variant="contained"
                startIcon={<InsertDriveFile />}
                href={project.codeLink}
                sx={{ 
                  backgroundColor: '#283039',
                  '&:hover': { backgroundColor: '#3b4754' }
                }}
              >
                View Code
              </Button>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  )
}