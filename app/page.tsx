// page.tsx
"use client";

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

// --- Styled Components for a 'Beautiful' Look ---

// Custom styled Box for the main background
const BirthdayContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(3),
  // Gradient background for a festive look
  background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', // Gold/Peach gradient
}));

// Custom styled Card for the wish output
const WishCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
  textAlign: 'center',
  maxWidth: 600,
  width: '100%',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)', // Stronger shadow
  borderRadius: 15, // Rounded corners
  background: 'white',
}));

// --- Main Component ---

export default function BirthdayWishPage() {
  // 1. State to store the best friend's name input
  const [bestieName, setBestieName] = useState('');
  
  // 2. State to store the name used for the final displayed wish
  const [displayedName, setDisplayedName] = useState('');

  // 3. State for handling the input field submission
  const handleGenerateWish = () => {
    // Only set the displayed name if the input is not empty
    if (bestieName.trim()) {
      setDisplayedName(bestieName.trim());
    }
  };
  
  // 4. State for handling the input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // Clear the displayed name when input changes to hide the old wish
      setDisplayedName('');
      setBestieName(event.target.value);
  }

  // --- Rendered Output Components ---

  const renderWishOutput = () => {
    // Check if a name has been submitted to display the wish
    if (!displayedName) {
      return null; // Don't render the wish card yet
    }

    return (
      <WishCard>
        <CardContent>
          <Typography variant="h3" component="div" gutterBottom sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
            🌟 Happy Birthday, {displayedName}! 🥳
          </Typography>
          <Typography variant="h5" component="p" sx={{ my: 3 }}>
            To my incredible bestie,
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#4a4a4a', lineHeight: 1.8 }}>
            May your special day be filled with all the joy, cake, and laughter you deserve! 
            Thank you for being the amazing person you are and for all the unforgettable moments. 
            Cheers to another year of adventures and ridiculous memories! Wishing you the very best.
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: 'medium' }}>
            Love you! ❤️
          </Typography>
        </CardContent>
      </WishCard>
    );
  };

  return (
    <BirthdayContainer maxWidth="md">
      <Box sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        padding: 5, 
        borderRadius: 2, 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        width: '100%',
        maxWidth: 500
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#880e4f', fontWeight: 'light' }}>
          Bestie Birthday Wish Generator
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 3 }}>
          Enter your best friend's name below!
        </Typography>

        <TextField
          label="Best Friend's Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={bestieName}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            // Allows hitting 'Enter' to submit the wish
            if (e.key === 'Enter') {
              handleGenerateWish();
            }
          }}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleGenerateWish}
          disabled={!bestieName.trim()}
          sx={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Pink/Orange gradient button
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
                opacity: 0.9,
            }
          }}
        >
          Generate Birthday Wish
        </Button>
      </Box>

      {/* Render the Wish Output component */}
      {renderWishOutput()}

    </BirthdayContainer>
  );
}