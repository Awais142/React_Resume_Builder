import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Description as DescriptionIcon,
  AutoAwesome as AutoAwesomeIcon,
  Style as StyleIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <StyleIcon sx={{ fontSize: 40 }} />,
      title: 'Professional Templates',
      description: 'Choose from our collection of professionally designed templates.',
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: 'AI-Powered Assistance',
      description: 'Get intelligent suggestions to improve your resume content.',
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
      title: 'Easy Customization',
      description: 'Customize every aspect of your resume with our intuitive editor.',
    },
    {
      icon: <DownloadIcon sx={{ fontSize: 40 }} />,
      title: 'Multiple Formats',
      description: 'Export your resume in various formats including PDF and Word.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#2c3e50',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Create Your Professional Resume
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Build stunning resumes with AI-powered assistance
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => navigate('/create')}
              sx={{ mr: 2 }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              onClick={() => navigate('/templates')}
            >
              View Templates
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  {feature.icon}
                  <Typography variant="h6" component="h3" sx={{ my: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Ready to Build Your Professional Resume?
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => navigate('/create')}
            >
              Start Building Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
