// src/pages/OurVerticalsPage.tsx

import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Sub-company logos (matching paths in src/pages/HomePage.tsx)
import helixConferencesLogo from "../assets/images/helix-conferences-logo.png";
import codeitLogo from "../assets/images/codeit-logo.png";
import peptidesLogo from "../assets/images/peptides-logo.png";
import helixJournalsLogo from "../assets/images/helix-journals-logo.png";
import helixEscrollLogo from "../assets/images/E-VolveLogo.png";
import digigroLogo from "../assets/images/digigro-logo.png";
import helixAuraLogo from "../assets/images/aura-logo.png";
import helixChannelEightLogo from "../assets/images/channel8-logo.png";

const VERTICALS = [
  {
    label: "HELIX CONFERENCES",
    to: "https://helixconferences.com/",
    internalPath: "/helix-conferences",
    image: helixConferencesLogo,
    description: "Curating World-class Biotech, Pharma & Life Science Events that shape the Future.",
    tag: "Life Sciences & Events",
    color: "#00FFCC"
  },
  {
    label: "CODEIT CONSULTING",
    to: "https://codeitconsulting.pro/",
    internalPath: "/codeit-consulting",
    image: codeitLogo,
    description: "Expert IT services for Software Development, QA, DevOps & Cloud solutions.",
    tag: "Information Technology",
    color: "#48AFF0"
  },
  {
    label: "PEPTIDES KNOWLEDGE PARK",
    to: "https://peptides.co.in/",
    internalPath: "/peptides-knowledge-park",
    image: peptidesLogo,
    description: "18+ years of Scientific Excellence in Research, Lab services, Molecular Biology & Education support.",
    tag: "Biotech & Lab Services",
    color: "#A259FF"
  },
  {
    label: "CHANNEL8",
    to: "https://channel8network.online/",
    internalPath: "/channel8",
    image: helixChannelEightLogo,
    description: "Your Go-To YouTube Channel for diverse content including Food, Business, Technology, and Lifestyle. Engaging Videos, Entertainment, and Insights.",
    tag: "Digital Media & YouTube",
    color: "#FF007F"
  },
  {
    label: "E-Volve",
    to: "https://evolvemagazine.online/",
    internalPath: "/e-volve",
    image: helixEscrollLogo,
    description: "Digital Abstract Archives from Global Conferences in Science, Pharma & Technology.",
    tag: "Academic Marketing",
    color: "#48AFF0"
  },
  {
    label: "DIGIGRO",
    to: "https://digigro.online/",
    internalPath: "/digigro",
    image: digigroLogo,
    description: "Specializing in Social Media Marketing, Content Creation, and Digital Advertising. Boost Your Online Presence, Drive Engagement, and Grow Your Brand.",
    tag: "Digital Marketing",
    color: "#00FFCC"
  },
  {
    label: "AURA BUSINESS CONSULTING",
    to: "https://aurabusinessconsulting.pro/",
    internalPath: "/aura-business-consulting",
    image: helixAuraLogo,
    description: "Providing A-to-Z Business Consulting Services, including Strategic Planning, Market Analysis, Financial Advisory, and Operational Excellence. Comprehensive Solutions for Growth.",
    tag: "Strategic Advisory",
    color: "#A259FF"
  },
  {
    label: "HELIX OPEN ACCESS JOURNALS",
    to: "https://helixjournals.com/",
    internalPath: "/helix-journals",
    image: helixJournalsLogo,
    description: "Peer-reviewed International Journals in Science, Technology, Health & Agriculture.",
    tag: "Scientific Publishing",
    color: "#FFD700"
  },
];

const OurVerticalsPage: React.FC = () => {
  const navigate = useNavigate();

  // Refs for GSAP
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 });
    
    // Create entry timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.2
    });

    tl.to(titleRef.current, { opacity: 1, y: 0 }, 0)
      .to(subtitleRef.current, { opacity: 1, y: 0 }, 0.15);

    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.children;
      gsap.set(cards, { opacity: 0, y: 40 });
      tl.to(cards, { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 }, 0.3);
    }

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Fixed background with vibrant gradients - Z-index -2 (lowest) */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          background: '#0A0A0A',
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
          `,
          backgroundSize: '200% 200%',
          animation: 'backgroundPan 60s linear infinite alternate',
          '@keyframes backgroundPan': {
            '0%': { backgroundPosition: '0% 0%' },
            '100%': { backgroundPosition: '100% 100%' },
          },
          pointerEvents: 'none',
        }}
      />

      {/* Main Container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          color: '#F5F8FA',
          py: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 4, md: 6 },
          position: 'relative',
          zIndex: 1,
          flexGrow: 1,
        }}
      >
        {/* Title */}
        <Box ref={titleRef} sx={{ mb: 2, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: 1.5,
              background: 'linear-gradient(90deg, #A259FF 0%, #48AFF0 50%, #00FFCC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(0,255,204,0.15)',
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.6rem' },
            }}
          >
            Our Verticals
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box ref={subtitleRef} sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#A7B6C2',
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              maxWidth: '800px',
              lineHeight: 1.6,
              textAlign: 'center'
            }}
          >
            Explore our diverse ecosystem of specialized divisions pushing boundaries in technology, 
            research, marketing, media, and advisory services.
          </Typography>
        </Box>

        {/* Verticals Grid */}
        <Box
          ref={cardsContainerRef}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
            width: '100%',
            mx: 'auto'
          }}
        >
          {VERTICALS.map((vertical, idx) => (
            <Paper
              key={idx}
              elevation={0}
              onClick={() => navigate(vertical.internalPath)}
              sx={{
                background: '#FFFFFF',
                borderRadius: '20px',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1.5px solid rgba(72, 175, 240, 0.12)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  borderColor: vertical.color,
                  boxShadow: `0 12px 35px rgba(0, 0, 0, 0.12), 0 0 20px ${vertical.color}25`,
                  '& .vertical-img': {
                    transform: 'scale(1.05)',
                  }
                }
              }}
            >
              <Box
                sx={{
                  height: '100px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  className="vertical-img"
                  src={vertical.image}
                  alt={vertical.label}
                  sx={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease',
                  }}
                />
              </Box>

              {/* Description Removed */}

              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(vertical.internalPath);
                }}
                sx={{
                  background: 'linear-gradient(90deg, #1E232A 0%, #2A313C 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  width: '100%',
                  py: 1.2,
                  borderRadius: '30px',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease',
                  mt: 'auto',
                  '&:hover': {
                    background: vertical.color,
                    color: '#0A0A0A',
                    boxShadow: `0 6px 20px ${vertical.color}50`,
                  }
                }}
              >
                Know More
              </Button>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurVerticalsPage;
