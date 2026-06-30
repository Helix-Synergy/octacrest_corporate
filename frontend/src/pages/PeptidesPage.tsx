import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, Grid, Tabs, Tab, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import peptidesLogo from '../assets/images/peptides-logo.png';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ProgramDetail {
  title: string;
  code: string;
  description: string;
}

interface TabData {
  value: string;
  label: string;
  icon: React.ReactElement;
  accent: string;
  description: string;
  programs: ProgramDetail[];
}

const PeptidesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('academic');
  
  // Refs for entry animations
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
      value: 'academic',
      label: 'Academic Assist',
      icon: <SchoolOutlinedIcon />,
      accent: '#00FFCC',
      description: 'Strengthening scientific capabilities through hands-on educational projects, workshops, and certified training courses.',
      programs: [
        { title: 'Academic Projects', code: 'PROJ', description: 'Curriculum-aligned final year projects for undergraduate and postgraduate students in life sciences.' },
        { title: 'Conferences & Seminars', code: 'CONF', description: 'National and international seminars highlighting key advancements in biotechnology & molecular biology.' },
        { title: 'Skill Development', code: 'SKID', description: 'Practical skills laboratory training including chromatography, culturing, and molecular assay techniques.' },
        { title: 'Industrial Tours', code: 'INTO', description: 'Guided visits to pharmaceutical production units and biotechnology research laboratories.' },
        { title: 'Professional Internships', code: 'INTERN', description: 'Immersive 1 to 6 months programs working alongside senior research scientists.' },
        { title: 'E-Learning Support', code: 'E-LEARN', description: 'Online self-paced modules covering regulatory requirements, clinical trials, and pharmacology basics.' }
      ]
    },
    {
      value: 'corporate',
      label: 'Corporate Astute',
      icon: <BusinessCenterOutlinedIcon />,
      accent: '#48AFF0',
      description: 'Providing advanced testing, writing, and training services to global pharmaceutical and life science entities.',
      programs: [
        { title: 'Analyte Assessment Services', code: 'AAS', description: 'High-accuracy characterization and assessment of chemical analytes and peptide sequences.' },
        { title: 'Contract Research Services', code: 'CRS', description: 'Custom bio-analytical testing, peptide synthesis, and assay validations for pharmaceutical labs.' },
        { title: 'Faculty Upskilling Services', code: 'FUSS', description: 'Professional workshops and training seminars designed to keep academic faculty updated on industry tools.' },
        { title: 'Research Writing Services', code: 'RAWS', description: 'Expert assistance in medical writing, manuscript preparation, clinical reports, and grant proposals.' }
      ]
    },
    {
      value: 'career',
      label: 'Career Saga',
      icon: <AssignmentIndOutlinedIcon />,
      accent: '#A259FF',
      description: 'Bridging the gap between biotechnology studies and active recruitment in leading pharmaceutical companies.',
      programs: [
        { title: 'Job-Oriented Training', code: 'JOT', description: 'Intensive courses focused on skills highly sought after by industrial QC/QA, research, and regulatory departments.' },
        { title: 'Placement Assistance', code: 'PLAST', description: 'Career counseling, resume crafting, and active interview coordination with top-tier partners.' },
        { title: 'Advanced Industrial Reach', code: 'AIR', description: 'Nurturing collaborations that bring corporate recruitment drives directly to candidates.' },
        { title: 'Peptides Assistance Membership', code: 'PAM', description: 'Lifetime access to Peptides lab resources, research advisories, and placement newsletters.' }
      ]
    }
  ];

  const currentTab = data.find(item => item.value === activeTab) || data[0];

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="Peptides Knowledge Park | Octacrest Corporate" description="Peptides Knowledge Park specializes in cutting-edge peptide research and related services." url="https://octacrestcorporate.com/peptides-knowledge-park" />
      
      {/* Dynamic Background */}
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
            radial-gradient(circle at 15% 15%, rgba(0, 255, 204, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 85%, rgba(72, 175, 240, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 10%, rgba(162, 89, 255, 0.12) 0%, transparent 45%)
          `,
          backgroundSize: '200% 200%',
          animation: 'backgroundPan 45s linear infinite alternate',
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
            src={peptidesLogo} 
            alt="Peptides Knowledge Park Logo" 
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
            Peptides Knowledge Park
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
            A premier biotech, molecular biology, and pharmaceutical science hub. Delivering certified student workshops, 
            contract research services, and job-oriented placements to bridge the gap between academic and industry requirements.
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Box ref={statsRef} sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {[
              { label: 'Years of Excellence', value: '18+', icon: <ScienceOutlinedIcon sx={{ color: '#00FFCC', fontSize: '2rem' }} /> },
              { label: 'Students Trained', value: '5,000+', icon: <SchoolOutlinedIcon sx={{ color: '#48AFF0', fontSize: '2rem' }} /> },
              { label: 'Academic Projects Guided', value: '50+', icon: <GroupsOutlinedIcon sx={{ color: '#A259FF', fontSize: '2rem' }} /> },
              { label: 'Advanced Lab Services', value: '15+', icon: <BusinessCenterOutlinedIcon sx={{ color: '#FF5B8C', fontSize: '2rem' }} /> }
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

        {/* Interactive Tabs Section */}
        <Box ref={tabSectionRef} sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, letterSpacing: 1, textTransform: 'uppercase', fontSize: '1.25rem' }}>
              Explore Services & Offerings
            </Typography>
            <Tabs
              value={activeTab}
              onChange={(e, val) => setActiveTab(val)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                maxWidth: '100%',
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
                      background: `rgba(${tab.value === 'academic' ? '0, 255, 204' : tab.value === 'corporate' ? '72, 175, 240' : '162, 89, 255'}, 0.12)`,
                      borderColor: tab.accent,
                      boxShadow: `0 0 15px rgba(${tab.value === 'academic' ? '0, 255, 204' : tab.value === 'corporate' ? '72, 175, 240' : '162, 89, 255'}, 0.2)`
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

          {/* Tab Description */}
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
            <Typography variant="body1" sx={{ color: '#E0E8EF', lineHeight: 1.8, fontSize: '1.08rem', fontStyle: 'italic' }}>
              "{currentTab.description}"
            </Typography>
          </Paper>

          {/* Tab Services Grid */}
          <Grid container spacing={3}>
            {currentTab.programs.map((prog, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 35, 42, 0.45)',
                    backdropFilter: 'blur(10px)',
                    p: 3.5,
                    borderRadius: '16px',
                    border: '1px solid rgba(72,175,240,0.1)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      background: 'rgba(30, 35, 42, 0.7)',
                      transform: 'translateY(-6px)',
                      borderColor: currentTab.accent,
                      boxShadow: `0 8px 24px ${currentTab.accent}1c`
                    }
                  }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="caption" sx={{ fontWeight: 800, color: currentTab.accent, letterSpacing: 1.5 }}>
                        {prog.code}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#F5F8FA', fontSize: '1.15rem' }}>
                      {prog.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                      {prog.description}
                    </Typography>
                  </Box>
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
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(90deg, #00FFCC 0%, #48AFF0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Get in Touch with Peptides Knowledge Park
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', maxWidth: '750px', mx: 'auto', mb: 5, lineHeight: 1.6 }}>
            Ready to initiate your final-year academic project, request specialized bio-analytical research support, 
            or sign up for Placement training? Contact our help desk today.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00FFCC', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <RoomOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Address Location
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                  Peptides Knowledge Park<br />
                  Mahaveer Radiance, CBI Colony<br />
                  Near Madhapur Metro Station, Hyderabad - 500081, Telangana, India
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#48AFF0', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocalPhoneOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Call Channels
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Support Office: <a href="tel:+917997940959" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>+91 7997 040 959</a><br />
                  General Queries: <a href="mailto:hello@peptides.co.in" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>hello@peptides.co.in</a>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#A259FF', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailOutlineIcon sx={{ fontSize: '1.1rem' }} /> Digital Mail
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Inquiries: <a href="mailto:hello@peptides.co.in" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>hello@peptides.co.in</a><br />
                  Official Site: <a href="https://peptides.co.in" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', textDecoration: 'none' }}>peptides.co.in</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          
        </Paper>
      </Box>
    </Box>
  );
};

export default PeptidesPage;

