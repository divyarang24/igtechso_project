import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const FeatureCards = () => {
  const features = [
    { number: '80K+', description: 'We have more than students', color: 'orange' },
    { number: '150+', description: 'Free online tutorials videos available', color: 'red' },
    { number: '90+', description: 'Daily updated blog post maintain', color: 'pink' },
    { number: '& 3M', description: 'Job posted everydays with qualification', color: 'purple' },
  ];

  return (
    <Box sx={{ height: "70vh", mt: 40, textAlign: 'center' ,position:'relative' , left:"20%"}}>
      <Grid container spacing={4} sx={{ padding: '2rem' }}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={6} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2rem',
                    backgroundColor: '#f9f9f9',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)', 
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" fontWeight="bold" sx={{ color: feature.color }}>
                      {feature.number}
                    </Typography>
                    <Typography color="text.secondary">{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureCards;
