import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const faqs = [
    { question: 'How to contact with riders emergency?', answer: '' },
    { question: 'App installation failed, how to update system information?', answer: '' },
    { 
      question: 'Website response taking time, how to improve?', 
      answer: 'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic...'
    },
    { question: 'New update fixed all bug and issues', answer: '' },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{height:"100vh"}}> 

    <div style={{
        
      width: '900px',
      margin: '0 auto',
      padding: '2rem',
    
    }}>
      <Typography 
        variant="overline" 
        display="block" 
        gutterBottom 
        style={{
          textAlign: 'center', 
          color: '#FBB040', 
          fontWeight: 'bold', 
          letterSpacing: '2px'
        }}
      >
        FREQUENT QUESTION
      </Typography>
      
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        style={{ fontWeight: 700, color: '#1C1C1C', marginBottom: '1.5rem' }}
      >
        Do you have any question
      </Typography>
      
      {faqs.map((faq, index) => (
        <Accordion 
          key={index} 
          expanded={expanded === index} 
          onChange={handleChange(index)}
          style={{
            borderBottom: index !== faqs.length - 1 ? '1px solid #e0e0e0' : 'none',
            boxShadow: 'none'
          }}
        >
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            style={{ padding: '0 1.5rem', display: 'flex', alignItems: 'center' }}
          >
            {expanded === index ? (
              <RemoveIcon style={{ color: '#4CAF50', marginRight: '8px' }} />
            ) : (
              <AddIcon style={{ color: '#4CAF50', marginRight: '8px' }} />
            )}
            

            <Typography variant="subtitle1" style={{ fontWeight: 700, color: '#1C1C1C', fontSize:"18px",fontFamily:"DM Sans",lineHeight:"30px"}}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ padding: '0 1.5rem 1.5rem' }}>
            <Typography variant="body2" style={{ color: '#666666' }}>
              {faq.answer || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    </Box>
  );
}

export default FAQ;
