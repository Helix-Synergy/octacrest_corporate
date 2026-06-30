

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      background: 'rgba(255, 255, 255, 0.03)', // Light transparent background
      backdropFilter: 'blur(24px)', // Apply blur effect
      WebkitBackdropFilter: 'blur(24px)', // For Safari compatibility
      borderTop: '1.5px solid rgba(72, 176, 240, 0.18)', // Adjust border color/transparency
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)', // Add subtle shadow
      color: '#A7B6C2', // Keep text color for contrast
      textAlign: 'center',
      py: 1,
      position: 'relative',
      bottom: 0,
      fontSize: '0.95rem',
      letterSpacing: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: { xs: 2, md: 3 }, // Responsive horizontal padding
      flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
      gap: { xs: 1, md: 0 }, // Gap between items when stacked
      zIndex: 1000, // Ensure it's above other content if necessary
    }}
  >
    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
      <Typography variant="body2" sx={{ mb: { xs: 0.5, md: 0 } }}>
        © {new Date().getFullYear()} Octacrest Corporate. All rights reserved.
      </Typography>
      <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
        <Typography variant="caption" component={Link} to="/privacy-policy" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#48AFF0' } }}>
          Privacy Policy
        </Typography>
        <Typography variant="caption" component={Link} to="/terms-of-service" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#48AFF0' } }}>
          Terms of Service
        </Typography>
        <Typography variant="caption" component={Link} to="/data-deletion" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#48AFF0' } }}>
          Data Deletion
        </Typography>
      </Stack>
    </Box>

    {/* Social Media Icons */}
    <Stack
      direction="row"
      spacing={{ xs: 0.5, md: 1 }} // Smaller spacing on small screens
      sx={{ flexWrap: 'wrap', justifyContent: 'center' }} // Allow icons to wrap and center them
    >
      <IconButton
        aria-label="Facebook"
        color="inherit"
        href="https://www.facebook.com/profile.php?id=61582586356276" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#1877F2' } }}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        aria-label="Twitter"
        color="inherit"
        href="https://x.com/octacrestcorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#1DA1F2' } }}
      >
        < XIcon />
      </IconButton>
      <IconButton
        aria-label="Instagram"
        color="inherit"
        href="https://www.instagram.com/octacrestcorporate/" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#E4405F' } }}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        color="inherit"
        href="https://www.linkedin.com/company/octacrestcorporate" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#0A66C2' } }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        aria-label="YouTube"
        color="inherit"
        href="https://www.youtube.com/channel/UC46qLBZU5MH8VXIiTUvX4jw" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#FF0000' } }}
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        aria-label="Reddit"
        color="inherit"
        href="https://www.reddit.com/user/New-Preparation-1946/" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#FF4500' } }}
      >
        <RedditIcon />
      </IconButton>
    </Stack>
  </Box>
);

export default Footer;