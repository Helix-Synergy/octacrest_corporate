import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface JournalEntry {
  title: string;
  icon: React.ReactNode;
  color: string;
  scope: string;
}

const HelixJournalsPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const journalsRef = useRef<HTMLDivElement | null>(null);
  const processRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.set([heroRef.current, statsRef.current, journalsRef.current, processRef.current, contactRef.current], {
      opacity: 0,
      y: 35
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.15
    });

    tl.to(heroRef.current, { opacity: 1, y: 0 }, 0)
      .to(statsRef.current, { opacity: 1, y: 0 }, 0.15)
      .to(journalsRef.current, { opacity: 1, y: 0 }, 0.3)
      .to(processRef.current, { opacity: 1, y: 0 }, 0.45)
      .to(contactRef.current, { opacity: 1, y: 0 }, 0.6);

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  const journals: JournalEntry[] = [
    {
      title: "Journal of Nursing & Care Practices",
      icon: <HealingOutlinedIcon sx={{ fontSize: '2rem' }} />,
      color: "#FF5B8C",
      scope: "Highlighting clinical nursing methods, healthcare management policies, patient safety analysis, and nursing training guides."
    },
    {
      title: "Journal of Immunology & Clinical Research",
      icon: <ScienceOutlinedIcon sx={{ fontSize: '2rem' }} />,
      color: "#00FFCC",
      scope: "Covering research in cellular immunology, allergy diagnoses, vaccines development, immunotherapy trials, and auto-immune tracking."
    },
    {
      title: "Journal of Applied Chemistry & Materials",
      icon: <AutoStoriesOutlinedIcon sx={{ fontSize: '2rem' }} />,
      color: "#FF9E2A",
      scope: "Focusing on chemical synthesis breakthroughs, materials engineering, polymers, nano-technologies, and industrial catalysis."
    },
    {
      title: "Journal of Computer Science & Intelligent Systems",
      icon: <LaptopMacOutlinedIcon sx={{ fontSize: '2rem' }} />,
      color: "#48AFF0",
      scope: "Covering neural networks, cloud computing paradigms, cyber security frameworks, IoT applications, and machine learning models."
    },
    {
      title: "Journal of Pharmaceutical Sciences & Drug Design",
      icon: <MedicationLiquidOutlinedIcon sx={{ fontSize: '2rem' }} />,
      color: "#A259FF",
      scope: "Highlighting novel drug discovery, pharmacokinetics analysis, drug delivery setups, toxicological assessments, and biopharmaceutics."
    }
  ];

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="Helix Open Access Journals | Octacrest Corporate" description="Peer-reviewed International Journals in Science, Technology, Health & Agriculture." url="https://octacrestcorporate.com/helix-journals" />
      
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
            radial-gradient(circle at 15% 15%, rgba(162, 89, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 85%, rgba(0, 255, 204, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 91, 140, 0.1) 0%, transparent 50%)
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
            src={helixJournalsLogo} 
            alt="Helix Journals Logo" 
            sx={{ 
              maxHeight: { xs: '65px', sm: '85px' }, 
              mb: 3,
              filter: 'drop-shadow(0 0 10px rgba(162, 89, 255, 0.35))',
              transition: 'transform 0.5s ease',
              '&:hover': { transform: 'scale(1.05)' }
            }} 
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: 1.5,
              background: 'linear-gradient(90deg, #A259FF 0%, #00FFCC 50%, #FF5B8C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(162,89,255,0.15)',
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '3.8rem' },
              mb: 2,
            }}
          >
            Helix Journals
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
            OPEN ACCESS SCIENTIFIC & MEDICAL JOURNALS
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
            Preserving and disseminating high-impact peer-reviewed clinical, pharmaceutical, chemical, and 
            technological research. We offer rigorous reviews, rapid open-access indexing, and global 
            bibliographic archiving.
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Box ref={statsRef} sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {[
              { label: 'Open-Access Journals', value: '5', icon: <LibraryBooksOutlinedIcon sx={{ color: '#A259FF', fontSize: '2rem' }} /> },
              { label: 'Rapid Peer Review Timeline', value: '21 Days', icon: <SpeedOutlinedIcon sx={{ color: '#00FFCC', fontSize: '2rem' }} /> },
              { label: 'Published Science Articles', value: '500+', icon: <HistoryEduOutlinedIcon sx={{ color: '#FF9E2A', fontSize: '2rem' }} /> },
              { label: 'Average Journal Metrics', value: '1.8 IF', icon: <StarBorderIcon sx={{ color: '#FF5B8C', fontSize: '2rem' }} /> }
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

        {/* Journals Grid */}
        <Box ref={journalsRef} sx={{ mb: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1, textAlign: 'center', textTransform: 'uppercase', fontSize: '1.25rem' }}>
            Our Peer-Reviewed Portfolio
          </Typography>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {journals.map((journal, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
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
                      borderColor: journal.color,
                      boxShadow: `0 8px 24px ${journal.color}1c`
                    }
                  }}
                >
                  <Box sx={{ color: journal.color, mb: 2, display: 'inline-flex' }}>
                    {journal.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#F5F8FA', fontSize: '1.05rem', lineHeight: 1.4 }}>
                    {journal.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                    {journal.scope}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Manuscript Submission Workflow */}
        <Paper
          ref={processRef}
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
          <Box sx={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #A259FF 0%, #00FFCC 100%)', borderRadius: 2, mb: 4 }} />
          
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2.5, color: '#F5F8FA', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <HistoryEduOutlinedIcon sx={{ color: '#00FFCC' }} /> Manuscript Submission & Review Process
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', mb: 4, lineHeight: 1.7 }}>
            Helix Journals ensures structural accuracy, methodological validity, and linguistic clarity 
            through our dual-blind peer review system:
          </Typography>

          <Grid container spacing={3}>
            {[
              { title: '1. Submission & Scope Check', desc: 'Authors submit manuscripts online. Our editors assess alignment with the journal scope and check for academic plagiarism.' },
              { title: '2. Blind Peer Review', desc: 'Accredited clinical and technical reviewers examine methodology, experimental data, and logic consistency.' },
              { title: '3. Copyediting & Indexing', desc: 'Accepted manuscripts go through proofreading, formatting, DOI generation, and open-access publishing.' }
            ].map((step, idx) => (
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
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                    {step.desc}
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
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(90deg, #A259FF 0%, #00FFCC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Submit Your Manuscript
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', maxWidth: '750px', mx: 'auto', mb: 5, lineHeight: 1.6 }}>
            Ready to publish your research in one of our open-access journals? 
            Contact our editorial boards or email your draft files directly.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#A259FF', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <RoomOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Address Location
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                  Helix Journals Office<br />
                  Hyderabad, Telangana, India
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ background: 'rgba(20, 25, 30, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00FFCC', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailOutlineIcon sx={{ fontSize: '1.1rem' }} /> Editorial Desks
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Support: <a href="mailto:editorial@helixjournals.com" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>editorial@helixjournals.com</a><br />
                  Official Domain: <a href="https://helixjournals.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', textDecoration: 'none' }}>helixjournals.com</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          
        </Paper>
      </Box>
    </Box>
  );
};

export default HelixJournalsPage;