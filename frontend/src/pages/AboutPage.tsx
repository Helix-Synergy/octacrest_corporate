// src/pages/AboutPage.tsx

import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import { gsap } from 'gsap';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import founderImage from '../assets/images/founder_surya.JPG';

const AboutPage: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  // Refs for GSAP animations
  const pageContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const contentCardRef = useRef<HTMLDivElement | null>(null);
  const pillarsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount

    // Set initial GSAP states
    gsap.set([
      titleRef.current,
      subtitleRef.current,
      contentCardRef.current,
      pillarsRef.current
    ], {
      opacity: 0,
      y: 30,
    });

    // Create entry animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.2
    });

    tl.to(titleRef.current, { opacity: 1, y: 0 }, 0)
      .to(subtitleRef.current, { opacity: 1, y: 0 }, 0.15)
      .to(contentCardRef.current, { opacity: 1, y: 0 }, 0.3)
      .to(pillarsRef.current, { opacity: 1, y: 0, duration: 1.0 }, 0.45);

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="About Us | Octacrest Corporate" description="Learn more about Octacrest Corporate and our commitment to excellence in diverse domains." url="https://octacrestcorporate.com/about" />
      
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
        ref={pageContainerRef}
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
        <Box ref={titleRef} sx={{ mb: 2, display: 'inline-block' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: 1.5,
              background: 'linear-gradient(90deg, #00FFCC 0%, #48AFF0 50%, #A259FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(0,255,204,0.15)',
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.6rem' },
            }}
          >
            About Octacrest Corporate
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box ref={subtitleRef} sx={{ mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#A7B6C2',
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              maxWidth: '800px',
              lineHeight: 1.6,
            }}
          >
            A multi-domain global conglomerate driving innovation, scientific research, 
            information technology, and strategic business solutions.
          </Typography>
        </Box>

        {/* Core Content Glass Card */}
        <Paper
          ref={contentCardRef}
          elevation={0}
          sx={{
            background: 'rgba(35, 43, 51, 0.65)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            p: { xs: 4, sm: 5, md: 6 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4), inset 0 0 15px rgba(255,255,255,0.02)',
            mb: 6,
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
            '&:hover': {
              boxShadow: '0 16px 48px rgba(72, 175, 240, 0.15), 0 0 25px rgba(0, 255, 204, 0.1)',
            },
          }}
        >
          <Box sx={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #00FFCC 0%, #A259FF 100%)', borderRadius: 2, mb: 4 }} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5, color: '#00FFCC' }}>
                <InfoOutlinedIcon /> Who We Are
              </Typography>
              <Typography variant="body1" sx={{ color: '#E0E8EF', lineHeight: 1.8, fontSize: '1.05rem', textAlign: 'justify' }}>
                Octacrest Corporate (formerly Helix Synergy Corp) stands as a prominent holding corporation managing a comprehensive portfolio of global brands. We bridge the gap between high-level scientific achievements and ground-breaking technological services, creating strategic connections that shape industries worldwide.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5, color: '#48AFF0' }}>
                  <RocketLaunchOutlinedIcon /> Our Mission
                </Typography>
                <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.7, fontSize: '0.95rem', textAlign: 'justify' }}>
                  Our mission is to empower growth and orchestrate success across scientific, digital, and commercial spaces. By uniting top-tier experts and advanced technologies, we deliver operational excellence and peerless values that create deep, lasting impressions on a global scale.
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5, color: '#A259FF' }}>
                  <LanguageOutlinedIcon /> Our Global Presence
                </Typography>
                <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.7, fontSize: '0.95rem', textAlign: 'justify' }}>
                  With deep footholds in major strategic locations including Canada and India, Octacrest Corporate ensures seamless integration and high-speed execution. Our cross-continental ecosystem connects research centers, consulting agencies, and creative content divisions, offering uninterrupted business continuity.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Founder Section */}
        <Paper
          elevation={0}
          sx={{
            background: 'rgba(35, 43, 51, 0.65)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            p: { xs: 4, sm: 5, md: 6 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4), inset 0 0 15px rgba(255,255,255,0.02)',
            mb: 6,
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
            '&:hover': {
              boxShadow: '0 16px 48px rgba(162, 89, 255, 0.15), 0 0 25px rgba(162, 89, 255, 0.1)',
            },
          }}
        >
          <Box sx={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #A259FF 0%, #48AFF0 100%)', borderRadius: 2, mb: 4 }} />
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: 4, lg: 6 }, alignItems: { xs: 'center', lg: 'flex-start' } }}>
            
            {/* Founder Image */}
            <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src={founderImage}
                alt="Dr. Surya Anjani Kumar Sarva"
                sx={{
                  width: { xs: 200, sm: 250, md: 280 },
                  height: { xs: 200, sm: 250, md: 280 },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid rgba(72, 175, 240, 0.3)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  mb: 2
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#F5F8FA', textAlign: 'center' }}>
                Dr. Surya Anjani Kumar Sarva
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#48AFF0', fontWeight: 600, textAlign: 'center', mb: 2 }}>
                Founder – Octacrest Corporate
              </Typography>
            </Box>

            {/* Founder Bio Text */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ color: '#E0E8EF', lineHeight: 1.8, fontSize: '1.05rem', textAlign: 'justify', mb: 3 }}>
                Dr. Surya Anjani Kumar Sarva is a distinguished Academician, Researcher, and Professional with extensive expertise in Life Sciences, Biotechnology, Bioinformatics, Applied Molecular Biology, and Information Technology. As the Founder of Octacrest Corporate, he is committed to promoting innovation, education, research excellence, and sustainable business development across diversified sectors.
              </Typography>

              <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.7, fontSize: '0.95rem', textAlign: 'justify', mb: 3 }}>
                With over 20 years of experience in postgraduate teaching, research guidance, and professional consulting, Dr. Surya has mentored numerous students and researchers through academic projects, dissertations, and field-based research programs. His teaching philosophy focuses on conceptual understanding, practical exposure, and skill-oriented learning that prepares students for both research and industry careers.
              </Typography>

              <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.7, fontSize: '0.95rem', textAlign: 'justify', mb: 3 }}>
                Dr. Surya completed his doctoral studies with interdisciplinary research focused on Plant Biotechnology, Environmental Biology, and Applied Animal Sciences. His major research interests include: Plant Biotechnology & Animal Biotechnology, Environmental Monitoring and Bioindicators, Parasitology and Vector Biology, Vrukshayurveda Sustainable Development, & Biodiversity Conservation. He has actively contributed to scientific advancement through research publications, conference presentations, academic workshops, and participation in national and international seminars.
              </Typography>

              <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.7, fontSize: '0.95rem', textAlign: 'justify', mb: 3 }}>
                Apart from academics and research, Dr. Surya possesses strong expertise in Information Technology and Project Management. He previously served as a Project Delivery Head in a prestigious organization, where he successfully managed complex IT projects involving customization, implementation, troubleshooting, and strategic delivery management. His professional qualifications include certifications in Six Sigma and PMP (Project Management Professional), enabling him to deliver high-quality solutions and achieve exceptional client satisfaction.
              </Typography>

              <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.7, fontSize: '0.95rem', textAlign: 'justify', mb: 3 }}>
                In the FMCG and cosmetics sector, Dr. Surya has established a remarkable presence through the formulation and development of cosmetics, skincare, haircare, perfumery, and aromatic products. His deep understanding of aromatics and product innovation has contributed significantly to the manufacturing of high-quality wellness and personal care solutions. Dr. Surya also has extensive knowledge in: Business Consulting, Digital Marketing, E-Publishing, Brand Development, and Strategic Business Growth.
              </Typography>

              <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8, fontSize: '1rem', textAlign: 'justify', fontWeight: 500 }}>
                Through his multidisciplinary expertise and visionary leadership, he created Octacrest Corporate as a synergistic platform that integrates education, research, technology, consulting, manufacturing, and digital solutions under one ecosystem. Dr. Surya is widely respected for his professionalism, leadership qualities, ethical values, and dedication to societal development through science, innovation, and entrepreneurship. His vision is to foster excellence in education, encourage innovative biological research, and create sustainable business opportunities that positively impact society.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Columns: Core Pillars */}
        <Box ref={pillarsRef}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1, color: '#F5F8FA', textTransform: 'uppercase', fontSize: '1.3rem' }}>
            Our Strategic Operating Pillars
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
            
            {/* Pillar 1 */}
            <Paper
              elevation={0}
              sx={{
                background: 'rgba(35, 43, 51, 0.4)',
                backdropFilter: 'blur(10px)',
                p: 3,
                borderRadius: '16px',
                border: '1px solid rgba(72,175,240,0.12)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(35, 43, 51, 0.7)',
                  transform: 'translateY(-5px)',
                  borderColor: '#00FFCC',
                  boxShadow: '0 8px 24px rgba(0, 255, 204, 0.1)',
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#00FFCC', display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleOutlineOutlinedIcon sx={{ fontSize: '1.25rem' }} /> Life Sciences & Research
              </Typography>
              <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                Underpinning biological advancements through Peptide research at Peptides Knowledge Park, and driving knowledge-sharing with Helix Open Access Journals and global biotech/pharma conferences.
              </Typography>
            </Paper>

            {/* Pillar 2 */}
            <Paper
              elevation={0}
              sx={{
                background: 'rgba(35, 43, 51, 0.4)',
                backdropFilter: 'blur(10px)',
                p: 3,
                borderRadius: '16px',
                border: '1px solid rgba(72,175,240,0.12)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(35, 43, 51, 0.7)',
                  transform: 'translateY(-5px)',
                  borderColor: '#48AFF0',
                  boxShadow: '0 8px 24px rgba(72, 176, 240, 0.1)',
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#48AFF0', display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleOutlineOutlinedIcon sx={{ fontSize: '1.25rem' }} /> IT & Software Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                Delivering custom SaaS development, DevOps pipelines, QA automation, and next-gen cloud architectures through CodeIt Consulting to modern enterprises.
              </Typography>
            </Paper>

            {/* Pillar 3 */}
            <Paper
              elevation={0}
              sx={{
                background: 'rgba(35, 43, 51, 0.4)',
                backdropFilter: 'blur(10px)',
                p: 3,
                borderRadius: '16px',
                border: '1px solid rgba(72,175,240,0.12)',
                transition: 'all 0.3s ease',
                gridColumn: { xs: '1', sm: '1 / span 2', md: 'auto' },
                '&:hover': {
                  background: 'rgba(35, 43, 51, 0.7)',
                  transform: 'translateY(-5px)',
                  borderColor: '#A259FF',
                  boxShadow: '0 8px 24px rgba(162, 89, 255, 0.1)',
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#A259FF', display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleOutlineOutlinedIcon sx={{ fontSize: '1.25rem' }} /> Digital Growth & Media
              </Typography>
              <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                Broadcasting creative visual media on Channel8, managing sophisticated multi-channel campaigns with DigiGro & E-Volve, and guiding corporate structures via Aura Business Consulting.
              </Typography>
            </Paper>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
