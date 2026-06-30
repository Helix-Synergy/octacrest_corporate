import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, Grid, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import helixAuraLogo from '../assets/images/aura-logo.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import PublicIcon from '@mui/icons-material/Public';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import GroupIcon from '@mui/icons-material/Group';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface AdvisoryField {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const AuraBusinessConsultingPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const industryRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.set([heroRef.current, statsRef.current, coreRef.current, industryRef.current, contactRef.current], {
      opacity: 0,
      y: 35
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.15
    });

    tl.to(heroRef.current, { opacity: 1, y: 0 }, 0)
      .to(statsRef.current, { opacity: 1, y: 0 }, 0.15)
      .to(coreRef.current, { opacity: 1, y: 0 }, 0.3)
      .to(industryRef.current, { opacity: 1, y: 0 }, 0.45)
      .to(contactRef.current, { opacity: 1, y: 0 }, 0.6);

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  const practices: AdvisoryField[] = [
    {
      title: "Management & Strategy Consulting",
      icon: <TrendingUpIcon sx={{ fontSize: '2.2rem' }} />,
      color: "#48AFF0",
      description: "Driving long-term strategic roadmaps, corporate restructuring, growth modeling, and governance architectures for international enterprises."
    },
    {
      title: "Operations Consulting",
      icon: <EngineeringOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      color: "#00FFCC",
      description: "Optimizing supply chain frameworks, operational workflows, resource allocations, and cost structures to maximize corporate yield."
    },
    {
      title: "Financial Advisory & Audit",
      icon: <AccountBalanceIcon sx={{ fontSize: '2.2rem' }} />,
      color: "#A259FF",
      description: "Evaluating financial risks, capital modeling, investment planning, and auditing standards to guarantee regulatory compliance."
    },
    {
      title: "HR & Talent Consulting",
      icon: <BadgeOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      color: "#FF5B8C",
      description: "Building management alignment programs, employee retention schemes, executive headhunting, and organizational capability reviews."
    }
  ];

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="Aura Business Consulting | Octacrest Corporate" description="Aura Business Consulting provides A-to-Z business consulting, strategic planning, and financial advisory services." url="https://octacrestcorporate.com/aura-business-consulting" />
      
      {/* Animated Glowing CSS Panning Background */}
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
            radial-gradient(circle at 85% 15%, rgba(72, 175, 240, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 15% 85%, rgba(162, 89, 255, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 50% 50%, rgba(0, 255, 204, 0.12) 0%, transparent 50%)
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
            src={helixAuraLogo} 
            alt="Aura Business Consulting Logo" 
            sx={{ 
              maxHeight: { xs: '60px', sm: '75px' }, 
              mb: 3,
              filter: 'drop-shadow(0 0 10px rgba(72, 175, 240, 0.4))',
              transition: 'transform 0.5s ease',
              '&:hover': { transform: 'scale(1.05)' }
            }} 
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: 1.5,
              background: 'linear-gradient(90deg, #48AFF0 0%, #00FFCC 50%, #A259FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(72,175,240,0.15)',
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '3.8rem' },
              mb: 2,
            }}
          >
            Aura Business Consulting
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
            Delivering data-driven, execution-ready business consulting services. We empower global 
            organizations with strategic planning, financial audit reviews, and optimized operational structures 
            to generate long-term corporate value.
          </Typography>
        </Box>

        {/* Corporate Metrics Grid */}
        <Box ref={statsRef} sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {[
              { label: 'Corporate Experience', value: '15+ Years', icon: <PublicIcon sx={{ color: '#48AFF0', fontSize: '2rem' }} /> },
              { label: 'Strategic Solutions Delivered', value: '200+', icon: <AssignmentTurnedInIcon sx={{ color: '#00FFCC', fontSize: '2rem' }} /> },
              { label: 'Key Industries Served', value: '10+', icon: <GroupIcon sx={{ color: '#A259FF', fontSize: '2rem' }} /> },
              { label: 'Strategic Retention Rate', value: '98%', icon: <StarBorderIcon sx={{ color: '#FF5B8C', fontSize: '2rem' }} /> }
            ].map((stat, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 36, 43, 0.45)',
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
                      background: 'rgba(30, 36, 43, 0.7)',
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

        {/* Practices Grid */}
        <Box ref={coreRef} sx={{ mb: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1, textAlign: 'center', textTransform: 'uppercase', fontSize: '1.25rem' }}>
            Advisory Practices
          </Typography>
          <Grid container spacing={3}>
            {practices.map((practice, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 36, 43, 0.6)',
                    backdropFilter: 'blur(10px)',
                    p: 4,
                    borderRadius: '20px',
                    border: '1.5px solid rgba(72, 175, 240, 0.12)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      background: 'rgba(30, 36, 43, 0.85)',
                      transform: 'translateY(-6px)',
                      borderColor: practice.color,
                      boxShadow: `0 8px 24px ${practice.color}1a`
                    }
                  }}
                >
                  <Box sx={{ color: practice.color, mb: 2, display: 'inline-flex' }}>
                    {practice.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#F5F8FA', fontSize: '1.15rem' }}>
                    {practice.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                    {practice.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Sectors Served */}
        <Paper
          ref={industryRef}
          elevation={0}
          sx={{
            background: 'rgba(30, 36, 43, 0.65)',
            backdropFilter: 'blur(15px)',
            p: { xs: 4, sm: 5 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            mb: 8,
            textAlign: 'center'
          }}
        >
          <Box sx={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #48AFF0 0%, #00FFCC 100%)', borderRadius: 2, mb: 4 }} />
          
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2.5, color: '#F5F8FA' }}>
            Core Industry Verticals
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 4, maxWidth: '800px', mx: 'auto', lineHeight: 1.7 }}>
            We bring customized frameworks and regulatory expertise to align business targets with industry standards. 
            Our primary advisory sectors include:
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {['Manufacturing & Supply Chain', 'Information Technology (IT)', 'Healthcare & Biological Sciences', 'Financial Services & Investment Groups', 'Retail & E-commerce', 'Educational Systems & Government Blocks'].map((sector, idx) => (
              <Chip
                key={idx}
                label={sector}
                sx={{
                  color: '#00FFCC',
                  borderColor: '#00FFCC',
                  border: '1px solid',
                  background: 'rgba(0, 255, 204, 0.08)',
                  px: 2,
                  py: 2.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(0, 255, 204, 0.2)',
                    transform: 'scale(1.02)'
                  }
                }}
              />
            ))}
          </Box>
        </Paper>

        {/* Contact and HQ */}
        <Paper
          ref={contactRef}
          elevation={0}
          sx={{
            background: 'rgba(30, 36, 43, 0.5)',
            backdropFilter: 'blur(15px)',
            p: { xs: 4, sm: 5 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.15)',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(90deg, #48AFF0 0%, #00FFCC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Consult Our Advisory Desk
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', maxWidth: '750px', mx: 'auto', mb: 5, lineHeight: 1.6 }}>
            Ready to design a strategic transformation path, schedule an operations audit, or discuss leadership alignments? 
            Contact our consulting desk.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ background: 'rgba(20, 26, 32, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#48AFF0', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <RoomOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Address Location
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                  Aura Business Consulting<br />
                  Hyderabad, Telangana, India
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ background: 'rgba(20, 26, 32, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00FFCC', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailOutlineIcon sx={{ fontSize: '1.1rem' }} /> Digital Mail
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Phone: <a href="tel:+917075782798" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>+91 7075 782 798</a><br />
                  Support Desk: <a href="mailto:hello@aurabusinessconsulting.pro" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>hello@aurabusinessconsulting.pro</a><br />
                  Corporate Link: <a href="https://aurabusinessconsulting.pro" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', textDecoration: 'none' }}>aurabusinessconsulting.pro</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          
        </Paper>
      </Box>
    </Box>
  );
};

export default AuraBusinessConsultingPage;

