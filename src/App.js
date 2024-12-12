import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { db, storage } from './firebase';
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

function App() {
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [appLogo, setAppLogo] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch "notification" collection and get a single document's download URL
    const fetchNotification = async () => {
      try {
        // Get all documents from the 'notification' collection
        const querySnapshot = await getDocs(collection(db, "notification"));
        
        if (!querySnapshot.empty) {
          // Get the first document in the collection
          const firstDoc = querySnapshot.docs[0]; 
          console.log("data: ", firstDoc.data())
          // Assuming the document has a field called 'filePath' or 'fileName' that refers to the storage file path
          const downloadUrl = firstDoc.data().downloadUrl??''; 
          setDownloadUrl(downloadUrl|| '');
          const appLogoUrl = firstDoc.data().appLogoUrl??''; 
          setAppLogo(appLogoUrl || '')
        } else {
          console.error('No documents found in "notification" collection.');
        }
      } catch (error) {
        console.error('Error fetching document or download URL:', error);
      }finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchNotification();
  }, []);

  if (loading) {
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
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Loading data...
        </Typography>
      </Container>
    );
  }

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
        src={appLogo || ''} 
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
      {downloadUrl ? (
      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        startIcon={<DownloadIcon />} 
        sx={{ mb: 4 }}
         href={downloadUrl || ''} 
          target="_blank"
      >
        Download The App
      </Button>
    ) : (
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 4 }}
        >
          Loading download link...
        </Typography>
      )}

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
