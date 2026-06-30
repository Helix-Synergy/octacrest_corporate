import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, Grid, Tabs, Tab, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import evolveLogo from '../assets/images/evolve.png';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import MediationOutlinedIcon from '@mui/icons-material/MediationOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface SectionDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TabData {
  value: string;
  label: string;
  icon: React.ReactElement;
  accent: string;
  description: string;
  items: SectionDetail[];
}

const HelixEScrollPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('archive');

  const heroRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const tabSectionRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.set([heroRef.current, statsRef.current, tabSectionRef.current, contactRef.current], {
      opacity: 0,
      y: 35
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.15
    });

    tl.to(heroRef.current, { opacity: 1, y: 0 }, 0)
      .to(statsRef.current, { opacity: 1, y: 0 }, 0.15)
      .to(tabSectionRef.current, { opacity: 1, y: 0 }, 0.3)
      .to(contactRef.current, { opacity: 1, y: 0 }, 0.45);

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  const data: TabData[] = [
    {
      value: 'archive',
      label: 'Digital Abstract Archives',
      icon: <LibraryBooksOutlinedIcon />,
      accent: '#FF5B8C',
      description: 'A global digital repository preserving and highlighting high-impact research abstracts from international science, tech, and pharma conferences.',
      items: [
        { title: 'Global Science Archives', description: 'Academic and experimental science papers, preserving findings across chemistry, biology, and environment.', icon: <ScienceOutlinedIcon /> },
        { title: 'Pharmaceutical Archives', description: 'Curated summaries of pharmaceutical developments, drug formulations, clinical studies, and trials.', icon: <MediationOutlinedIcon /> },
        { title: 'Tech & Engineering Archives', description: 'Preserving conference abstracts covering computer science, ML architectures, cybersecurity, and IoT.', icon: <StorageOutlinedIcon /> }
      ]
    },
    {
      value: 'magazine',
      label: 'Digital Magazine',
      icon: <ImportContactsOutlinedIcon />,
      accent: '#00FFCC',
      description: 'A forward-looking digital publication curating intellectual and social stories to empower global communities.',
      items: [
        { title: 'Education & Careers', description: 'Actionable guidance, skill pathways, academic insights, and mentorship logs for learners.', icon: <LibraryBooksOutlinedIcon /> },
        { title: 'Science & Environment', description: 'Deep dives on ecological sustainability, green technology, climate solutions, and scientific breakthroughs.', icon: <ScienceOutlinedIcon /> },
        { title: 'Health & Well-being', description: 'Credible articles covering healthcare updates, wellness tips, diet analytics, and mental health discussions.', icon: <ForumOutlinedIcon /> },
        { title: 'Social & Career Awareness', description: 'Exploring modern career transitions, social changes, digital literacy, and economic shifts.', icon: <MenuBookOutlinedIcon /> }
      ]
    }
  ];

  const currentTab = data.find(item => item.value === activeTab) || data[0];

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="Helix Escroll | Octacrest Corporate" description="Helix Escroll provides expert digital marketing, SEO, and content marketing services." url="https://octacrestcorporate.com/e-volve" />

      {/* Dynamic Visual Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          background: '#090A0C',
          backgroundImage: `
            radial-gradient(circle at 85% 85%, rgba(255, 91, 140, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 15% 15%, rgba(0, 255, 204, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(162, 89, 255, 0.1) 0%, transparent 45%)
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
            src={evolveLogo}
            alt="E-Volve Logo"
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
              background: 'linear-gradient(90deg, #FF5B8C 0%, #A259FF 50%, #00FFCC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(255,91,140,0.15)',
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '3.8rem' },
              mb: 2,
            }}
          >
            e-Volve
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
            A dynamic digital ecosystem serving as a comprehensive archive of scientific, pharmaceutical, and
            technological research abstracts, paired with a modern digital magazine empowering readers worldwide.
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Box ref={statsRef} sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {[
              { label: 'Conference Abstracts Preserved', value: '10,000+', icon: <StorageOutlinedIcon sx={{ color: '#FF5B8C', fontSize: '2rem' }} /> },
              { label: 'Global Summits Archived', value: '50+', icon: <TimelineOutlinedIcon sx={{ color: '#00FFCC', fontSize: '2rem' }} /> },
              { label: 'Magazine Topics Covered', value: '20+', icon: <LibraryBooksOutlinedIcon sx={{ color: '#48AFF0', fontSize: '2rem' }} /> },
              { label: 'Monthly Readers', value: '100K+', icon: <ForumOutlinedIcon sx={{ color: '#A259FF', fontSize: '2rem' }} /> }
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

        {/* Interactive Tabs */}
        <Box ref={tabSectionRef} sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={(e, val) => setActiveTab(val)}
              sx={{
                '& .MuiTabs-indicator': { display: 'none' },
                '& .MuiTabs-flexContainer': { gap: 2 }
              }}
            >
              {data.map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  iconPosition="start"
                  label={tab.label}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    minHeight: '45px',
                    padding: '8px 22px',
                    borderRadius: '25px',
                    color: '#A7B6C2',
                    border: '1px solid rgba(72, 175, 240, 0.15)',
                    background: 'rgba(30, 35, 42, 0.3)',
                    transition: 'all 0.3s ease',
                    gap: 1,
                    '&.Mui-selected': {
                      color: tab.accent,
                      background: `rgba(${tab.value === 'archive' ? '255, 91, 140' : '0, 255, 204'}, 0.12)`,
                      borderColor: tab.accent,
                      boxShadow: `0 0 15px rgba(${tab.value === 'archive' ? '255, 91, 140' : '0, 255, 204'}, 0.2)`
                    },
                    '&:hover': {
                      background: 'rgba(30, 35, 42, 0.6)',
                      borderColor: '#48AFF0'
                    }
                  }}
                />
              ))}
            </Tabs>
          </Box>

          <Paper
            elevation={0}
            sx={{
              background: 'rgba(30, 35, 42, 0.65)',
              backdropFilter: 'blur(15px)',
              p: 4,
              borderRadius: '20px',
              border: `1.5px solid ${currentTab.accent}33`,
              mb: 4,
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" sx={{ color: '#E0E8EF', lineHeight: 1.8, fontSize: '1.05rem' }}>
              {currentTab.description}
            </Typography>
          </Paper>

          <Grid container spacing={3}>
            {currentTab.items.map((item, idx) => (
              <Grid item xs={12} md={currentTab.items.length === 3 ? 4 : 6} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 35, 42, 0.45)',
                    backdropFilter: 'blur(10px)',
                    p: 4,
                    borderRadius: '16px',
                    border: '1px solid rgba(72,175,240,0.1)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      background: 'rgba(30, 35, 42, 0.7)',
                      transform: 'translateY(-6px)',
                      borderColor: currentTab.accent,
                      boxShadow: `0 8px 24px ${currentTab.accent}1a`
                    }
                  }}
                >
                  <Box sx={{ color: currentTab.accent, mb: 2, display: 'inline-flex' }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#F5F8FA', fontSize: '1.15rem' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

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
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(90deg, #FF5B8C 0%, #00FFCC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Submit Research or Inquire
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', maxWidth: '750px', mx: 'auto', mb: 5, lineHeight: 1.6 }}>
            Would you like to archive your conference research abstracts on E-Volve, submit a magazine article,
            or partner with us? Connect with our editors.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FF5B8C', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <RoomOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Location
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                  E-Volve Magazine & Archives<br />
                  Hyderabad, Telangana, India
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00FFCC', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WhatsAppIcon sx={{ fontSize: '1.1rem' }} /> WhatsApp Desk
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Support: <a href="tel:+17036516096" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>+1-703-651-6096</a>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#48AFF0', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailOutlineIcon sx={{ fontSize: '1.1rem' }} /> Digital Mail
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Phone: <a href="tel:+917075782798" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>+91 7075 782 798</a><br />
                  Mail: <a href="mailto:evolvemagazineonline@gmail.com" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>evolvemagazineonline@gmail.com</a><br />
                  Official Site: <a href="https://evolvemagazine.online" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', textDecoration: 'none' }}>evolvemagazine.online</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>


        </Paper>
      </Box>
    </Box>
  );
};

export default HelixEScrollPage;
