import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { gsap } from 'gsap';

const DataDeletionPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', pt: 12, pb: 8 }}>
      <Container maxWidth="md" ref={containerRef}>
        <Paper
          elevation={0}
          sx={{
            background: 'rgba(30, 36, 43, 0.5)',
            backdropFilter: 'blur(15px)',
            p: { xs: 4, sm: 6 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, background: 'linear-gradient(90deg, #48AFF0 0%, #00FFCC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Data Deletion Instructions
          </Typography>

          <Typography variant="body1" sx={{ color: '#E0E8EF', mb: 3, lineHeight: 1.8 }}>
            At Octacrest Corporate, we respect your privacy and give you full control over your personal data. If you wish to delete your account or any personal data we hold about you, please follow the instructions below.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 4, mb: 2 }}>
            How to Request Data Deletion
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            To initiate the deletion of your personal data, you must send a formal request to our support team. Please ensure that you send the email from the address associated with your interactions with us so we can verify your identity.
          </Typography>

          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 1, lineHeight: 1.8 }}>
            <strong>1. Email Us:</strong> Send an email to our official support address: <a href="mailto:hello@octacrestcorporate.com" style={{ color: '#48AFF0', textDecoration: 'none' }}>hello@octacrestcorporate.com</a>
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 1, lineHeight: 1.8 }}>
            <strong>2. Subject Line:</strong> Use the subject line <em>"Data Deletion Request"</em>.
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            <strong>3. Required Details:</strong> Include your full name, your registered email address, and specifically mention any vertical (e.g., CodeIt Consulting, Helix Conferences) if your data was submitted there.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 4, mb: 2 }}>
            Processing Time
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            Upon receiving your verified request, we will process your data deletion within 7 to 14 business days. We will notify you via email once your data has been completely and permanently removed from our active systems.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 4, mb: 2 }}>
            Data Retention Exceptions
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            Please note that we may be legally required to retain certain administrative, billing, or transaction records for compliance, accounting, and tax purposes even after a deletion request is fulfilled. These records will be kept securely and will not be used for marketing or general operations.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default DataDeletionPage;
