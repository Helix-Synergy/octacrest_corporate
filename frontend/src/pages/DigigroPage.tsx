import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, Grid, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import digigroLogo from '../assets/images/digigro-logo.png';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Service {
  title: string;
  icon: React.ReactNode;
  accent: string;
  description: string;
}

const DigigroPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const strategyRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.set([heroRef.current, statsRef.current, servicesRef.current, strategyRef.current, contactRef.current], {
      opacity: 0,
      y: 35
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.15
    });

    tl.to(heroRef.current, { opacity: 1, y: 0 }, 0)
      .to(statsRef.current, { opacity: 1, y: 0 }, 0.15)
      .to(servicesRef.current, { opacity: 1, y: 0 }, 0.3)
      .to(strategyRef.current, { opacity: 1, y: 0 }, 0.45)
      .to(contactRef.current, { opacity: 1, y: 0 }, 0.6);

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  const services: Service[] = [
    {
      title: "Conference Search Engine Optimization (SEO)",
      icon: <LanguageOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#00FFCC",
      description: "Optimizing scientific landing pages to rank for competitive keywords, ensuring medical professionals discover your events easily."
    },
    {
      title: "Targeted Paid Advertising (PPC)",
      icon: <AdsClickOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#48AFF0",
      description: "Managing custom PPC and paid social campaigns targetting specific research fields, physician databases, and nurses associations."
    },
    {
      title: "Social Media Amplification",
      icon: <CampaignOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#A259FF",
      description: "Deploying professional social campaigns to cultivate scientific communities, drive abstract submissions, and boost registration counts."
    },
    {
      title: "Event Branding & Creative Assets",
      icon: <PaletteOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#FF5B8C",
      description: "Designing corporate brochures, high-impact banners, program booklets, and certificate templates for digital and print distribution."
    }
  ];

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="DigiGro | Octacrest Corporate" description="DigiGro specializes in social media marketing, content creation, and digital advertising." url="https://octacrestcorporate.com/digigro" />
      
      {/* Panning Gradient Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          background: '#090B0E',
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(0, 255, 204, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 85%, rgba(72, 175, 240, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(162, 89, 255, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%',
          animation: 'backgroundPan 50s linear infinite alternate',
          '@keyframes backgroundPan': {
            '0%': { backgroundPosition: '0% 0%' },
            '100%': { backgroundPosition: '100% 100%' },
          },
          pointerEvents: 'none',
        }}
      />

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
        {/* Back to Home Link */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: '#A7B6C2',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(5px)',
              px: 2.5,
              py: 0.8,
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#00FFCC',
                borderColor: '#00FFCC',
                background: 'rgba(0, 255, 204, 0.05)',
                boxShadow: '0 0 10px rgba(0, 255, 204, 0.15)',
                transform: 'translateX(-3px)'
              }
            }}
          >
            Back to Home
          </Button>
        </Box>

        {/* Hero Section */}
        <Box ref={heroRef} sx={{ textAlign: 'center', mb: 6 }}>
          <Box 
            component="img" 
            src={digigroLogo} 
            alt="DigiGro Logo" 
            sx={{ 
              maxHeight: { xs: '65px', sm: '85px' }, 
              mb: 3,
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 204, 0.35))',
              transition: 'transform 0.5s ease',
              '&:hover': { transform: 'scale(1.05)' }
            }} 
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: 1.5,
              background: 'linear-gradient(90deg, #00FFCC 0%, #48AFF0 50%, #A259FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(0,255,204,0.15)',
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '3.8rem' },
              mb: 2,
            }}
          >
            DigiGro
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#48AFF0',
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2.5,
              fontSize: { xs: '1.05rem', sm: '1.25rem' }
            }}
          >
            DIGITAL MARKETING AEGIS
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#A7B6C2',
              fontWeight: 400,
              maxWidth: '850px',
              mx: 'auto',
              fontSize: { xs: '1.05rem', sm: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Specialized marketing solutions for global conferences. We drive event attendance and 
            academic engagement in healthcare, pharmacology, and nursing sectors through search engine 
            excellence, paid performance, and professional community campaigns.
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Box ref={statsRef} sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {[
              { label: 'Completed Campaigns', value: '100+', icon: <CampaignOutlinedIcon sx={{ color: '#00FFCC', fontSize: '2rem' }} /> },
              { label: 'Healthcare Summits Managed', value: '30+', icon: <LanguageOutlinedIcon sx={{ color: '#48AFF0', fontSize: '2rem' }} /> },
              { label: 'Attendance Multiplication', value: '3x', icon: <AnalyticsOutlinedIcon sx={{ color: '#A259FF', fontSize: '2rem' }} /> },
              { label: 'Scientific Focus Years', value: '10+', icon: <HandshakeOutlinedIcon sx={{ color: '#FF5B8C', fontSize: '2rem' }} /> }
            ].map((stat, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 35, 42, 0.45)',
                    backdropFilter: 'blur(10px)',
                    border: '1.5px solid rgba(72, 175, 240, 0.15)',
                    p: 3,
                    borderRadius: '16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    '&:hover': {
                      background: 'rgba(30, 35, 42, 0.7)',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 24px rgba(72, 176, 240, 0.15)',
                      borderColor: '#48AFF0'
                    }
                  }}
                >
                  {stat.icon}
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#F5F8FA' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A7B6C2', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Services Grid */}
        <Box ref={servicesRef} sx={{ mb: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1, textAlign: 'center', textTransform: 'uppercase', fontSize: '1.25rem' }}>
            Marketing Capabilities
          </Typography>
          <Grid container spacing={3}>
            {services.map((ser, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 35, 42, 0.5)',
                    backdropFilter: 'blur(10px)',
                    p: 4,
                    borderRadius: '20px',
                    border: '1.5px solid rgba(72, 175, 240, 0.12)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      background: 'rgba(30, 35, 42, 0.75)',
                      transform: 'translateY(-6px)',
                      borderColor: ser.accent,
                      boxShadow: `0 8px 24px ${ser.accent}1c`
                    }
                  }}
                >
                  <Box sx={{ color: ser.accent, mb: 2, display: 'inline-flex' }}>
                    {ser.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#F5F8FA', fontSize: '1.15rem' }}>
                    {ser.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                    {ser.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Methodology Section */}
        <Paper
          ref={strategyRef}
          elevation={0}
          sx={{
            background: 'rgba(30, 35, 42, 0.65)',
            backdropFilter: 'blur(15px)',
            p: { xs: 4, sm: 5 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            mb: 8,
          }}
        >
          <Box sx={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #00FFCC 0%, #48AFF0 100%)', borderRadius: 2, mb: 4 }} />
          
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2.5, color: '#F5F8FA', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <AnalyticsOutlinedIcon sx={{ color: '#00FFCC' }} /> Why Global Conferences Work with DigiGro
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 4, lineHeight: 1.7 }}>
            Scientific conferences have a highly niche target demographic. Generic marketing tools fall short. 
            DigiGro coordinates campaigns aligned with academic frameworks:
          </Typography>

          <Grid container spacing={3}>
            {[
              { title: 'Niche Segment Lists', desc: 'Sponsorship and abstract solicitation targetting accredited university departments and active researchers.' },
              { title: 'Search Intent Optimization', desc: 'Structuring search console listings so registration pages match clinical search trends.' },
              { title: 'Real-Time Analytics Dashboard', desc: 'Detailed campaign tracking to calculate Cost-Per-Acquisition (CPA) and registration conversion rates.' }
            ].map((st, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper
                  sx={{
                    background: 'rgba(20, 25, 30, 0.5)',
                    p: 3,
                    borderRadius: '12px',
                    border: '1px solid rgba(72,175,240,0.08)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(20, 25, 30, 0.8)',
                      borderColor: '#48AFF0'
                    }
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00FFCC', mb: 1.5 }}>
                    {st.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                    {st.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Contact Module */}
        <Paper
          ref={contactRef}
          elevation={0}
          sx={{
            background: 'rgba(30, 35, 42, 0.5)',
            backdropFilter: 'blur(15px)',
            p: { xs: 4, sm: 5 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.15)',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(90deg, #00FFCC 0%, #48AFF0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Promote Your Academic Event
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', maxWidth: '750px', mx: 'auto', mb: 5, lineHeight: 1.6 }}>
            Ready to design a digital marketing schedule that maximizes speaker registrations and scientific submissions? 
            Contact our campaign strategists.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00FFCC', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <RoomOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Headquarters
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                  DigiGro Media Office<br />
                  Hyderabad, Telangana, India
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#A259FF', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailOutlineIcon sx={{ fontSize: '1.1rem' }} /> Inquiries Desk
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Phone: <a href="tel:+917075782798" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>+91 7075 782 798</a><br />
                  Support: <a href="mailto:hello@digigro.online" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>hello@digigro.online</a><br />
                  Official Domain: <a href="https://digigro.online" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', textDecoration: 'none' }}>digigro.online</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          
        </Paper>
      </Box>
    </Box>
  );
};

export default DigigroPage;