import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, Grid, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import helixChannelEightLogo from '../assets/images/channel8-logo.png';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import RadioOutlinedIcon from '@mui/icons-material/RadioOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Sector {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const Channel8Page: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const sectorsRef = useRef<HTMLDivElement | null>(null);
  const partnershipsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.set([heroRef.current, statsRef.current, sectorsRef.current, partnershipsRef.current, contactRef.current], {
      opacity: 0,
      y: 35
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.15
    });

    tl.to(heroRef.current, { opacity: 1, y: 0 }, 0)
      .to(statsRef.current, { opacity: 1, y: 0 }, 0.15)
      .to(sectorsRef.current, { opacity: 1, y: 0 }, 0.3)
      .to(partnershipsRef.current, { opacity: 1, y: 0 }, 0.45)
      .to(contactRef.current, { opacity: 1, y: 0 }, 0.6);

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  const sectors: Sector[] = [
    { title: 'Health & Wellness', icon: <HealthAndSafetyOutlinedIcon sx={{ fontSize: '2rem' }} />, color: '#FF5B8C', description: 'Insights on medical advancements, active lifestyles, and preventive care guidance.' },
    { title: 'Finance & Markets', icon: <AccountBalanceWalletOutlinedIcon sx={{ fontSize: '2rem' }} />, color: '#00FFCC', description: 'Credible reports on personal wealth, stock changes, and international market trends.' },
    { title: 'Education & Careers', icon: <SchoolOutlinedIcon sx={{ fontSize: '2rem' }} />, color: '#48AFF0', description: 'Interviews with leading professors, skill development paths, and corporate career roadmaps.' },
    { title: 'Automobiles & Tech', icon: <DirectionsCarFilledOutlinedIcon sx={{ fontSize: '2rem' }} />, color: '#A259FF', description: 'In-depth reviews of latest electric vehicles, smart engines, and autonomous driving specs.' },
    { title: 'Food & Culinary Arts', icon: <RestaurantOutlinedIcon sx={{ fontSize: '2rem' }} />, color: '#FF9E2A', description: 'Showcasing worldwide culinary trends, gourmet reviews, and dietary innovations.' },
    { title: 'Travel & Exploration', icon: <TravelExploreOutlinedIcon sx={{ fontSize: '2rem' }} />, color: '#00FF88', description: 'Travel guides detailing exotic locations, sustainable journeys, and cultural landmarks.' },
    { title: 'Technology & Computing', icon: <ComputerOutlinedIcon sx={{ fontSize: '2rem' }} />, color: '#00D4FF', description: 'Covering AI systems, cloud breakthroughs, consumer devices, and software engineering.' },
    { title: 'Innovation & Research', icon: <LightbulbOutlinedIcon sx={{ fontSize: '2rem' }} />, color: '#E8D45C', description: 'Highlighting futuristic startups, deep-tech research, and patent applications.' }
  ];

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="Channel8 | Octacrest Corporate" description="Channel8 is a diverse YouTube channel covering food, business, technology, and lifestyle." url="https://octacrestcorporate.com/channel8" />

      {/* Panning Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          background: '#08090C',
          backgroundImage: `
            radial-gradient(circle at 80% 20%, rgba(255, 91, 140, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(162, 89, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(72, 175, 240, 0.1) 0%, transparent 50%)
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
                color: '#FF5B8C',
                borderColor: '#FF5B8C',
                background: 'rgba(255, 91, 140, 0.05)',
                boxShadow: '0 0 10px rgba(255, 91, 140, 0.15)',
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
            src={helixChannelEightLogo}
            alt="Channel 8 Network Logo"
            sx={{
              maxHeight: { xs: '65px', sm: '85px' },
              mb: 3,
              filter: 'drop-shadow(0 0 10px rgba(255, 91, 140, 0.35))',
              transition: 'transform 0.5s ease',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: 1.5,
              background: 'linear-gradient(90deg, #FF5B8C 0%, #A259FF 50%, #48AFF0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(255,91,140,0.15)',
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '3.8rem' },
              mb: 2,
            }}
          >
            CHANNEL8 NETWORK
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#00FFCC',
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2.5,
              fontSize: { xs: '1.05rem', sm: '1.25rem' }
            }}
          >
            ONE NETWORK. INFINITE VOICES.
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
            A dynamic digital media and content broadcasting company. Delivering credible, engaging,
            and informative stories across multiple digital platforms. We empower diverse viewpoints
            to create global impact.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box ref={statsRef} sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {[
              { label: 'Content Verticals', value: '8', icon: <LiveTvOutlinedIcon sx={{ color: '#FF5B8C', fontSize: '2rem' }} /> },
              { label: 'Active Listeners / Day', value: '10K+', icon: <RadioOutlinedIcon sx={{ color: '#00FFCC', fontSize: '2rem' }} /> },
              { label: 'Partnered Brands', value: '100+', icon: <HandshakeOutlinedIcon sx={{ color: '#48AFF0', fontSize: '2rem' }} /> },
              { label: 'Combined Digital Reach', value: '500K+', icon: <ForumOutlinedIcon sx={{ color: '#A259FF', fontSize: '2rem' }} /> }
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

        {/* Sectors Grid */}
        <Box ref={sectorsRef} sx={{ mb: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1, textAlign: 'center', textTransform: 'uppercase', fontSize: '1.25rem' }}>
            Our Broadcasting Verticals
          </Typography>
          <Grid container spacing={3}>
            {sectors.map((sec, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 35, 42, 0.5)',
                    backdropFilter: 'blur(10px)',
                    p: 3.5,
                    borderRadius: '20px',
                    border: '1.5px solid rgba(72, 175, 240, 0.12)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      background: 'rgba(30, 35, 42, 0.75)',
                      transform: 'translateY(-6px)',
                      borderColor: sec.color,
                      boxShadow: `0 8px 24px ${sec.color}1c`
                    }
                  }}
                >
                  <Box sx={{ color: sec.color, mb: 2, display: 'inline-flex' }}>
                    {sec.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#F5F8FA', fontSize: '1.1rem' }}>
                    {sec.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                    {sec.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Brand Integration / Campaigns */}
        <Paper
          ref={partnershipsRef}
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
          <Box sx={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #FF5B8C 0%, #A259FF 100%)', borderRadius: 2, mb: 4 }} />

          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2.5, color: '#F5F8FA', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <HandshakeOutlinedIcon sx={{ color: '#00FFCC' }} /> Partner with Channel 8
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 4, lineHeight: 1.7 }}>
            We work alongside innovative creators, agencies, and global enterprises to broadcast impactful narratives.
            Accelerate your business reach with our targeted digital solutions:
          </Typography>

          <Grid container spacing={3}>
            {[
              { title: 'Digital Campaigns', desc: 'Custom content campaigns tailored to specific demographics, achieving high engagement and conversions.' },
              { title: 'Sponsored Content', desc: 'Dedicated segments, review series, or podcast features highlighting products and technological upgrades.' },
              { title: 'Brand Integrations', desc: 'Seamless placement of brand concepts within high-traffic videos and articles across our media networks.' }
            ].map((p, idx) => (
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
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                    {p.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Contact and HQ */}
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
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(90deg, #FF5B8C 0%, #A259FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Initiate a Media Campaign
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', maxWidth: '750px', mx: 'auto', mb: 5, lineHeight: 1.6 }}>
            Ready to broadcast your message to a highly receptive audience?
            Contact our editorial or sponsorship desks to explore packages.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FF5B8C', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <RoomOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Address Location
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                  Channel 8 Network<br />
                  Mahaveer Radiance, CBI Colony<br />
                  Near Madhapur Metro Station, Hyderabad - 500081, Telangana, India
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#A259FF', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailOutlineIcon sx={{ fontSize: '1.1rem' }} /> Support Channels
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Editorial & Sponsorships: <a href="mailto:hello@channel8network.online" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>hello@channel8network.online</a><br />
                  Official Domain: <a href="https://channel8network.online" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', textDecoration: 'none' }}>channel8network.online</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>


        </Paper>
      </Box>
    </Box>
  );
};

export default Channel8Page;

