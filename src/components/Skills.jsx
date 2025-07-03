import { Box, Typography, Paper, Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import { Computer, Settings, Lan, Build } from '@mui/icons-material'

const skillCategories = [
  {
    icon: <Computer />,
    name: 'Web Dev',
    skills: ['HTML', 'CSS', 'JS', 'Tailwind', 'Node.js', 'React','Material UI','bootstrap' ,'Python', 'Arduino', 'MySQL', 'MongoDB']
  },
  {
    icon: <Settings />,
    name: 'Systems',
    skills: ['OS install', 'Antivirus', 'Backups', 'Diagnostics']
  },
  {
    icon: <Lan />,
    name: 'Networking',
    skills: ['IP setup', 'Routing', 'LAN/Wi-Fi config']
  },
  {
    icon: <Build />,
    name: 'Tools',
    skills: ['Github', 'VS Code', 'XAMPP','Arduino IDE']
  }
]

export default function Skills() {
  const [value, setValue] = useState(0)

  return (
    <Box id="skills" sx={{ py: 8, px: { xs: 2, md: 4 }, bgcolor: 'background.paper' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Skills
      </Typography>
      
      <Tabs 
        value={value} 
        onChange={(e, newValue) => setValue(newValue)}
        variant="scrollable"
        sx={{ 
          borderBottom: '1px solid #3b4754',
          mb: 3,
          '& .MuiTabs-indicator': {
            backgroundColor: 'primary.main',
            height: 3
          }
        }}
      >
        {skillCategories.map((category, index) => (
          <Tab 
            key={index}
            label={category.name}
            icon={category.icon}
            iconPosition="start"
            sx={{
              minHeight: 'auto',
              py: 1.5,
              '&.Mui-selected': { color: 'text.primary' }
            }}
          />
        ))}
      </Tabs>
      
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {skillCategories[value].skills.map((skill, index) => (
          <Paper key={index} sx={{ 
            px: 3,
            py: 1,
            backgroundColor: '#283039',
          }}>
            <Typography variant="body2">{skill}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}