import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, Grid, Tabs, Tab, Button, Avatar, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';

interface Conference {
  title: string;
  date: string;
  location: string;
  category: 'tech' | 'pharma' | 'medical' | 'agriculture';
  tag: string;
  link?: string;
}

const conferences: Conference[] = [
  // 2026 Events
  {
    title: "World Quantum Technology Summit",
    date: "September 24–25, 2026",
    location: "Hybrid / USA",
    category: "tech",
    tag: "Quantum & AI",
    link: "https://quantumtech.helixconferences.com/"
  },
  {
    title: "Zero-Trust Security & AI Defense Forum",
    date: "September 24–25, 2026",
    location: "Hybrid / USA",
    category: "tech",
    tag: "Cybersecurity",
    link: "https://zerotrust-ai.helixconferences.com/"
  },
  {
    title: "Smart Materials, Nanotech & Advanced Manufacturing Congress",
    date: "September 24–25, 2026",
    location: "Hybrid / USA",
    category: "tech",
    tag: "Nanotechnology",
    link: "https://smartmaterials.helixconferences.com/"
  },
  {
    title: "Advanced Materials & Clean Energy Forum",
    date: "September 24–25, 2026",
    location: "Hybrid / USA",
    category: "tech",
    tag: "Clean Energy",
    link: "https://advancedmaterials.helixconferences.com/"
  },
  {
    title: "Advanced Pharmaceutical Sciences Forum",
    date: "October 22–23, 2026",
    location: "Hybrid / USA",
    category: "pharma",
    tag: "Pharma Sciences",
    link: "https://pharmatech.helixconferences.com/"
  },
  {
    title: "AI Drug Discovery Conclave",
    date: "October 22–23, 2026",
    location: "Hybrid / USA",
    category: "pharma",
    tag: "Drug Discovery",
    link: "https://drugdiscovery.helixconferences.com/"
  },
  {
    title: "Cell & Gene Therapy Manufacturing Summit",
    date: "October 22–23, 2026",
    location: "Hybrid / USA",
    category: "pharma",
    tag: "Biotech",
    link: "https://cellgene.helixconferences.com/"
  },
  {
    title: "Real-World Evidence & Pharma Access Forum",
    date: "October 22–23, 2026",
    location: "Hybrid / USA",
    category: "pharma",
    tag: "Market Access",
    link: "https://pharma.helixconferences.com/"
  },
  {
    title: "Nursing & Nurse Practices Conclave",
    date: "November 19–20, 2026",
    location: "Hybrid / USA",
    category: "medical",
    tag: "Healthcare",
    link: "https://nursing.helixconferences.com/"
  },
  {
    title: "AI & Digital Nursing Forum",
    date: "November 19–20, 2026",
    location: "Hybrid / USA",
    category: "medical",
    tag: "Digital Health",
    link: "https://nursesummit.helixconferences.com/"
  },
  // 2027 Events
  {
    title: "Food, Agriculture & Environmental Sciences Forum",
    date: "April 26–27, 2027",
    location: "Hybrid / USA",
    category: "agriculture",
    tag: "Environment",
    link: "https://foodmeet.helixconferences.com/"
  },
  {
    title: "Food Microbiome Summit",
    date: "April 26–27, 2027",
    location: "Hybrid / USA",
    category: "agriculture",
    tag: "Food Science",
    link: "https://foodmicrobiome.helixconferences.com/"
  },
  {
    title: "Regenerative AgriTech Forum",
    date: "April 26–27, 2027",
    location: "Hybrid / USA",
    category: "agriculture",
    tag: "AgriTech",
    link: "https://agritech.helixconferences.com/"
  },
  {
    title: "Future FoodTech Expo",
    date: "April 26–27, 2027",
    location: "Hybrid / USA",
    category: "agriculture",
    tag: "Food Tech",
    link: "https://foodtech.helixconferences.com/"
  },
  {
    title: "Millets & Climate-Resilient Agriculture Summit",
    date: "April 26–27, 2027",
    location: "Hybrid / USA",
    category: "agriculture",
    tag: "Climate Action",
    link: "https://millets.helixconferences.com/"
  },
  {
    title: "Advanced Medical Practices Conclave",
    date: "May 24–25, 2027",
    location: "Hybrid / USA",
    category: "medical",
    tag: "Medical Practices",
    link: "https://mediclave.helixconferences.com/"
  },
  {
    title: "Digital Pathology & AI Diagnostics Congress",
    date: "May 24–25, 2027",
    location: "Hybrid / USA",
    category: "medical",
    tag: "AI Diagnostics",
    link: "https://digital-pathology.helixconferences.com/"
  },
  {
    title: "Precision Medicine Summit",
    date: "May 24–25, 2027",
    location: "Hybrid / USA",
    category: "medical",
    tag: "Precision Medicine",
    link: "https://precisionmedicine.helixconferences.com/"
  },
  {
    title: "Aesthetic Medicine & Cosmetic Innovation Summit",
    date: "May 24–25, 2027",
    location: "Hybrid / USA",
    category: "medical",
    tag: "Cosmetic Innovation",
    link: "https://cosmetology.helixconferences.com/"
  },
  {
    title: "International Conference on Applied Lifesciences",
    date: "June 29–30, 2027",
    location: "Hybrid / USA",
    category: "pharma",
    tag: "Lifesciences",
    link: "https://biocon.helixconferences.com/"
  }
];

const HelixConferencesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Refs for animations
  const titleRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const aboutCardRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.set([
      titleRef.current,
      statsRef.current,
      aboutCardRef.current,
      filterRef.current,
      gridRef.current,
      ctaRef.current
    ], {
      opacity: 0,
      y: 35
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.15
    });

    tl.to(titleRef.current, { opacity: 1, y: 0 }, 0)
      .to(statsRef.current, { opacity: 1, y: 0 }, 0.15)
      .to(aboutCardRef.current, { opacity: 1, y: 0 }, 0.3)
      .to(filterRef.current, { opacity: 1, y: 0 }, 0.45)
      .to(gridRef.current, { opacity: 1, y: 0 }, 0.55)
      .to(ctaRef.current, { opacity: 1, y: 0 }, 0.7);

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  const categories = [
    { value: 'all', label: 'All Conferences' },
    { value: 'pharma', label: 'Biotech & Pharma' },
    { value: 'tech', label: 'Tech & Engineering' },
    { value: 'medical', label: 'Medical & Nursing' },
    { value: 'agriculture', label: 'Agriculture & Food' }
  ];

  const filteredConferences = selectedCategory === 'all' 
    ? conferences 
    : conferences.filter(conf => conf.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'tech': return '#A259FF';
      case 'pharma': return '#00FFCC';
      case 'medical': return '#48AFF0';
      case 'agriculture': return '#8CE85C';
      default: return '#E0E8EF';
    }
  };

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="Helix Conferences | Octacrest Corporate" description="Helix Conferences expertly manages and organizes global events and conferences." url="https://octacrestcorporate.com/helix-conferences" />
      
      {/* Animated Dynamic Background */}
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
            radial-gradient(circle at 10% 20%, rgba(0, 255, 204, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 90% 15%, rgba(162, 89, 255, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 50% 80%, rgba(72, 175, 240, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(140, 232, 92, 0.12) 0%, transparent 40%)
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
        <Box ref={titleRef} sx={{ textAlign: 'center', mb: 6 }}>
          <Box 
            component="img" 
            src={helixConferencesLogo} 
            alt="Helix Conferences Logo" 
            sx={{ 
              maxHeight: { xs: '60px', sm: '80px' }, 
              mb: 3,
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 204, 0.3))',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
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
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4rem' },
              mb: 2,
            }}
          >
            Helix Conferences
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#A7B6C2',
              fontWeight: 400,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.05rem', sm: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Connecting the Global Scientific & Tech Community. Discover breakthrough innovations, 
            network with global leaders, and present cutting-edge research.
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Box ref={statsRef} sx={{ mb: 8 }}>
          <Grid container spacing={3} justifyContent="center">
            {[
              { label: 'Years of Experience', value: '6+', icon: <WorkHistoryOutlinedIcon sx={{ color: '#00FFCC', fontSize: '2rem' }} /> },
              { label: 'Conferences Organized', value: '150+', icon: <EventAvailableOutlinedIcon sx={{ color: '#48AFF0', fontSize: '2rem' }} /> },
              { label: 'Global Speakers & Professionals', value: '25,000+', icon: <GroupsOutlinedIcon sx={{ color: '#A259FF', fontSize: '2rem' }} /> },
              { label: 'Countries Reached', value: '30+', icon: <TravelExploreOutlinedIcon sx={{ color: '#8CE85C', fontSize: '2rem' }} /> }
            ].map((stat, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(35, 43, 51, 0.45)',
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
                      background: 'rgba(35, 43, 51, 0.7)',
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

        {/* Who We Are & Mission Cards */}
        <Paper
          ref={aboutCardRef}
          elevation={0}
          sx={{
            background: 'rgba(35, 43, 51, 0.65)',
            backdropFilter: 'blur(20px) saturate(180%)',
            p: { xs: 4, sm: 5 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            mb: 8,
            '&:hover': {
              boxShadow: '0 16px 48px rgba(72, 175, 240, 0.15)',
            },
          }}
        >
          <Box sx={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #00FFCC 0%, #A259FF 100%)', borderRadius: 2, mb: 4 }} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5, color: '#00FFCC' }}>
                <InfoOutlinedIcon /> About Helix Conferences
              </Typography>
              <Typography variant="body1" sx={{ color: '#E0E8EF', lineHeight: 1.8, fontSize: '1.05rem', textAlign: 'justify' }}>
                Helix Conferences is a premier global organizer of international scientific and tech events.
                We specialize in establishing multidisciplinary platforms where researchers, industry leaders, 
                healthcare practitioners, and technologists present breakthrough papers, exchange revolutionary 
                concepts, and establish strategic networks.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5, color: '#A259FF' }}>
                <RocketLaunchOutlinedIcon /> Rigorous Academic Standards
              </Typography>
              <Typography variant="body1" sx={{ color: '#E0E8EF', lineHeight: 1.8, fontSize: '1.05rem', textAlign: 'justify' }}>
                We hold all presentations and submissions to the highest peer-review standards. Our programs 
                bridge the gap between cutting-edge scientific achievements and scalable industrial applications, 
                offering delegates a dynamic environment to collaborate on hybrid, virtual, and physical stages.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Conference Category Navigation Tabs */}
        <Box ref={filterRef} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, letterSpacing: 1, textTransform: 'uppercase', fontSize: '1.25rem' }}>
            Featured Global Summits (2026 - 2027)
          </Typography>
          <Tabs
            value={selectedCategory}
            onChange={(e, val) => setSelectedCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              maxWidth: '100%',
              '& .MuiTabs-indicator': {
                display: 'none',
              },
              '& .MuiTabs-flexContainer': {
                gap: 1.5,
              }
            }}
          >
            {categories.map((cat) => (
              <Tab
                key={cat.value}
                value={cat.value}
                label={cat.label}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  minHeight: '40px',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  color: '#A7B6C2',
                  border: '1px solid rgba(72, 175, 240, 0.15)',
                  background: 'rgba(35, 43, 51, 0.3)',
                  transition: 'all 0.3s ease',
                  '&.Mui-selected': {
                    color: getCategoryColor(cat.value),
                    background: `rgba(${cat.value === 'all' ? '0, 255, 204' : cat.value === 'pharma' ? '0, 255, 204' : cat.value === 'tech' ? '162, 89, 255' : cat.value === 'medical' ? '72, 175, 240' : '140, 232, 92'}, 0.12)`,
                    borderColor: getCategoryColor(cat.value),
                    boxShadow: `0 0 15px rgba(${cat.value === 'all' ? '0, 255, 204' : cat.value === 'pharma' ? '0, 255, 204' : cat.value === 'tech' ? '162, 89, 255' : cat.value === 'medical' ? '72, 175, 240' : '140, 232, 92'}, 0.2)`,
                  },
                  '&:hover': {
                    background: 'rgba(35, 43, 51, 0.6)',
                    borderColor: '#48AFF0',
                  }
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Conferences Dynamic Grid */}
        <Box ref={gridRef} sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {filteredConferences.map((conf, index) => {
              const catColor = getCategoryColor(conf.category);
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      background: 'rgba(35, 43, 51, 0.45)',
                      backdropFilter: 'blur(10px)',
                      p: 3,
                      borderRadius: '18px',
                      border: '1px solid rgba(72,175,240,0.12)',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      '&:hover': {
                        background: 'rgba(35, 43, 51, 0.7)',
                        transform: 'translateY(-6px)',
                        borderColor: catColor,
                        boxShadow: `0 10px 24px rgba(${catColor === '#00FFCC' ? '0, 255, 204' : catColor === '#A259FF' ? '162, 89, 255' : catColor === '#48AFF0' ? '72, 175, 240' : '140, 232, 92'}, 0.15)`,
                      }
                    }}
                  >
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Chip 
                          label={conf.tag} 
                          size="small" 
                          sx={{ 
                            background: `rgba(${catColor === '#00FFCC' ? '0, 255, 204' : catColor === '#A259FF' ? '162, 89, 255' : catColor === '#48AFF0' ? '72, 175, 240' : '140, 232, 92'}, 0.12)`,
                            color: catColor, 
                            fontWeight: 700, 
                            border: `1px solid ${catColor}44`,
                            fontSize: '0.75rem',
                          }} 
                        />
                        <Chip 
                          label={conf.date.includes('2026') ? '2026' : '2027'} 
                          variant="outlined" 
                          size="small" 
                          sx={{ color: '#A7B6C2', borderColor: 'rgba(167, 182, 194, 0.3)', fontSize: '0.7rem' }} 
                        />
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          lineHeight: 1.4, 
                          mb: 3, 
                          color: '#F5F8FA',
                          fontSize: '1.1rem',
                        }}
                      >
                        {conf.title}
                      </Typography>
                    </Box>

                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, color: '#A7B6C2' }}>
                        <CalendarTodayOutlinedIcon sx={{ fontSize: '0.9rem', color: '#48AFF0' }} />
                        <Typography variant="caption" sx={{ fontWeight: 500 }}>
                          {conf.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, color: '#A7B6C2' }}>
                        <PlaceOutlinedIcon sx={{ fontSize: '0.9rem', color: '#00FFCC' }} />
                        <Typography variant="caption" sx={{ fontWeight: 500 }}>
                          {conf.location}
                        </Typography>
                      </Box>
                      <Button
                        component="a"
                        href={conf.link || "https://helixconferences.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: 'rgba(72, 175, 240, 0.3)',
                          color: '#F5F8FA',
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontSize: '0.8rem',
                          py: 1,
                          '&:hover': {
                            borderColor: catColor,
                            background: `${catColor}11`,
                            color: catColor
                          }
                        }}
                      >
                        Inquire / Register
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Contact and Corporate HQ section */}
        <Paper
          ref={ctaRef}
          elevation={0}
          sx={{
            background: 'rgba(35, 43, 51, 0.5)',
            backdropFilter: 'blur(15px)',
            p: { xs: 4, sm: 5 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.15)',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(90deg, #00FFCC 0%, #48AFF0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Connect With Our Conference Desk
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', maxWidth: '700px', mx: 'auto', mb: 5, lineHeight: 1.6 }}>
            Have queries regarding presentation submissions, sponsorships, or registration? Reach out directly to our official organizers.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ background: 'rgba(20, 26, 32, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00FFCC', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <VerifiedOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Head Office (Canada)
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                  Helix Conferences<br />
                  130 King St W, Suite 1900<br />
                  Toronto, ON M5X 1E3, Canada
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ background: 'rgba(20, 26, 32, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#48AFF0', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Phone Contact
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Phone: <a href="tel:+17036516096" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>+1-703-651-6096</a><br />
                  WhatsApp: <a href="https://wa.me/17036516096" target="_blank" rel="noopener noreferrer" style={{ color: '#48AFF0', textDecoration: 'none' }}>+1-703-651-6096</a>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ background: 'rgba(20, 26, 32, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#A259FF', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Electronic Mail
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Inquiries: <a href="mailto:hello@helixconferences.com" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>hello@helixconferences.com</a><br />
                  Official Site: <a href="https://helixconferences.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', textDecoration: 'none' }}>helixconferences.com</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>


        </Paper>
      </Box>
    </Box>
  );
};

export default HelixConferencesPage;

