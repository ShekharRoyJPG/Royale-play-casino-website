import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function App() {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        py: 4, 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      {/* Logo Section */}
      <Box 
        component="img" 
        src="https://firebasestorage.googleapis.com/v0/b/royale-play-casino.firebasestorage.app/o/Logo.png?alt=media&token=0e8900e2-6b5f-46a3-b3e7-05a9b5079476" 
        alt="App Logo" 
        sx={{ 
          width: '150px', 
          height: '150px', 
          mb: 3 
        }} 
      />

      {/* Welcome Note */}
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 2 
        }}
      >
        Welcome to Our App
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ mb: 4, color: 'text.secondary' }}
      >
        Experience the ultimate convenience at your fingertips. Get started now and explore the features that make us stand out!
      </Typography>

      {/* Download Button */}
      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        startIcon={<DownloadIcon />} 
        sx={{ mb: 4 }}
      >
        Download The App
      </Button>

      {/* Customer Support Section */}
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          fontWeight: 'bold', 
          mt: 6, 
          mb: 2 
        }}
      >
        Customer Support
      </Typography>

      <Card 
        sx={{ 
          width: '100%', 
          p: 2, 
          mb: 4 
        }}
      >
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            
            {/* Call Us Section */}
            <Grid item xs={12} sm={4} textAlign="center">
              <SupportAgentIcon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>Call Us</Typography>
              <Typography variant="body2" color="text.secondary">+919883638435</Typography>
            </Grid>

            {/* Mobile Support Section */}
            <Grid item xs={12} sm={4} textAlign="center">
              <PhoneIcon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>Mobile Support</Typography>
              <Typography variant="body2" color="text.secondary">+919883638435</Typography>
            </Grid>

            {/* Email Support Section */}
            <Grid item xs={12} sm={4} textAlign="center">
              <EmailIcon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>Email Us</Typography>
              <Typography variant="body2" color="text.secondary">royaleplaycasino@gmail.com</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
