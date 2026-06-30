import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { gsap } from 'gsap';

const TermsPage: React.FC = () => {
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
            Terms of Service
          </Typography>

          <Typography variant="body1" sx={{ color: '#E0E8EF', mb: 3, lineHeight: 1.8 }}>
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 4, mb: 2 }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            By accessing or using the Octacrest Corporate website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access our services.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 4, mb: 2 }}>
            2. Use of Services
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            Our platform provides information regarding conferences, publications, and consulting. You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 4, mb: 2 }}>
            3. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            All content, trademarks, logos, and materials on this website are the property of Octacrest Corporate and its respective verticals. You may not reproduce, distribute, or otherwise use our intellectual property without prior written consent.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 4, mb: 2 }}>
            4. Limitation of Liability
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            Octacrest Corporate shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services or for the cost of procurement of substitute goods and services.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, color: '#F5F8FA', mt: 4, mb: 2 }}>
            5. Modifications to Terms
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 3, lineHeight: 1.8 }}>
            We reserve the right to revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsPage;
