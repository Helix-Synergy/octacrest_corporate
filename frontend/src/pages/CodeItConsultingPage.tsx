import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, Paper, Grid, Tabs, Tab, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import codeitLogo from '../assets/images/codeit-logo.png';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const CodeItConsultingPage: React.FC = () => {
  const [activeTechTab, setActiveTechTab] = useState<string>('dev');

  // Refs for entry animations
  const titleRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const techRef = useRef<HTMLDivElement | null>(null);
  const pillarsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.set([
      titleRef.current,
      statsRef.current,
      servicesRef.current,
      techRef.current,
      pillarsRef.current,
      contactRef.current
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
      .to(servicesRef.current, { opacity: 1, y: 0 }, 0.3)
      .to(techRef.current, { opacity: 1, y: 0 }, 0.45)
      .to(pillarsRef.current, { opacity: 1, y: 0 }, 0.55)
      .to(contactRef.current, { opacity: 1, y: 0 }, 0.7);

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  const services: Service[] = [
    {
      title: "Custom Software Development",
      description: "End-to-end engineering of bespoke web applications, mobile apps, and custom enterprise ERP/CRM suites tailored to your operational workflows.",
      icon: <TerminalOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#48AFF0"
    },
    {
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud architectures, serverless design, cloud migration, and CI/CD automation pipelines built on AWS, Azure, and Google Cloud Platform.",
      icon: <CloudQueueOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#00FFCC"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive vulnerability assessments, penetration testing, data encryption, secure firewalls, IAM, and active digital threat mitigation plans.",
      icon: <ShieldOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#A259FF"
    },
    {
      title: "Intelligent Automation (AI/ML)",
      description: "Integration of Robotic Process Automation (RPA), neural network models, machine learning pipelines, computer vision, and smart IoT device networks.",
      icon: <SmartToyOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#8CE85C"
    },
    {
      title: "Managed IT Services",
      description: "Proactive system monitoring, 24/7 technical help desk support, virtual CTO advisory, network configuration, and active business continuity planning.",
      icon: <SupportAgentOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
      accent: "#FF5B8C"
    }
  ];

  const techCategories = [
    {
      value: "dev",
      label: "Software & Web",
      techs: ["React.js / Next.js", "Node.js (Express)", "TypeScript", "Python (Django/FastAPI)", "Golang", "Swift & Kotlin", "React Native", "GraphQL & REST", "PostgreSQL & MongoDB"]
    },
    {
      value: "cloud",
      label: "Cloud & Infrastructure",
      techs: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Docker Containers", "Kubernetes (EKS/GKE)", "Terraform (IaC)", "Jenkins & GitHub Actions", "Nginx & Apache", "Prometheus & Grafana"]
    },
    {
      value: "security",
      label: "Cybersecurity Frameworks",
      techs: ["OWASP Security Standards", "Penetration Testing Tools", "WAF & Next-Gen Firewalls", "Zero-Trust Architecture", "SSL/TLS Data Encryption", "SIEM (Splunk)", "ISO 27001 Compliance", "Active Directory / IAM"]
    },
    {
      value: "ai",
      label: "AI & Smart Automation",
      techs: ["TensorFlow & PyTorch", "UiPath & Blue Prism (RPA)", "OpenCV (Computer Vision)", "IoT Gateways & Protocols", "Apache Spark (Big Data)", "Large Language Models (LLMs)", "Scikit-Learn ML", "Hadoop Ecosystem"]
    }
  ];

  const selectedTechStack = techCategories.find(cat => cat.value === activeTechTab);

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="CodeIt Consulting | IT & Software Solutions by Octacrest" description="Expert IT services for Software Development, QA, DevOps & Cloud solutions." url="https://octacrestcorporate.com/codeit-consulting" />

      {/* Animated Dynamic Tech Grid Background */}
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
            radial-gradient(circle at 50% 50%, rgba(0, 255, 204, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 91, 140, 0.08) 0%, transparent 40%)
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
            src={codeitLogo}
            alt="CodeIt Consulting Logo"
            sx={{
              maxHeight: { xs: '60px', sm: '75px' },
              mb: 3,
              filter: 'drop-shadow(0 0 10px rgba(72, 175, 240, 0.4))',
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
              background: 'linear-gradient(90deg, #48AFF0 0%, #00FFCC 50%, #A259FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(72,175,240,0.15)',
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4rem' },
              mb: 2,
            }}
          >
            Code It Consulting
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
            Transforming businesses through digital modernization. We build high-performance software,
            orchestrate scalable cloud infrastructures, and implement elite cybersecurity solutions.
          </Typography>
        </Box>

        {/* Technical Key Indicators */}
        <Box ref={statsRef} sx={{ mb: 8 }}>
          <Grid container spacing={3} justifyContent="center">
            {[
              { label: 'Uptime SLA Commitment', value: '99.9%', icon: <StorageOutlinedIcon sx={{ color: '#00FFCC', fontSize: '2rem' }} /> },
              { label: 'Enterprise Clients', value: '50+', icon: <GroupsOutlinedIcon sx={{ color: '#48AFF0', fontSize: '2rem' }} /> },
              { label: 'Successful Deployments', value: '120+', icon: <RocketLaunchOutlinedIcon sx={{ color: '#A259FF', fontSize: '2rem' }} /> },
              { label: 'Active Security Protocols', value: 'ISO 27001', icon: <VerifiedUserOutlinedIcon sx={{ color: '#8CE85C', fontSize: '2rem' }} /> }
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

        {/* Core Services Section */}
        <Box ref={servicesRef} sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 4,
              letterSpacing: 1,
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: '1.3rem'
            }}
          >
            Our Core Engineering Capabilities
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} md={index < 3 ? 4 : 6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 36, 43, 0.6)',
                    backdropFilter: 'blur(15px)',
                    p: 4,
                    borderRadius: '20px',
                    border: '1.5px solid rgba(72, 175, 240, 0.14)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      background: 'rgba(30, 36, 43, 0.8)',
                      transform: 'translateY(-6px)',
                      borderColor: service.accent,
                      boxShadow: `0 10px 24px rgba(${service.accent === '#48AFF0' ? '72, 175, 240' : service.accent === '#00FFCC' ? '0, 255, 204' : service.accent === '#A259FF' ? '162, 89, 255' : service.accent === '#8CE85C' ? '140, 232, 92' : '255, 91, 140'}, 0.15)`,
                    }
                  }}
                >
                  <Box sx={{ color: service.accent, mb: 2, display: 'inline-flex' }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#F5F8FA' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.7 }}>
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tech Stack Tabs */}
        <Paper
          ref={techRef}
          elevation={0}
          sx={{
            background: 'rgba(30, 36, 43, 0.65)',
            backdropFilter: 'blur(20px) saturate(180%)',
            p: { xs: 4, sm: 5 },
            borderRadius: '24px',
            border: '1.5px solid rgba(72, 175, 240, 0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            mb: 8,
          }}
        >
          <Box sx={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #48AFF0 0%, #00FFCC 100%)', borderRadius: 2, mb: 4 }} />

          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#F5F8FA', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <ConstructionOutlinedIcon sx={{ color: '#00FFCC' }} /> Technology Ecosystem
          </Typography>

          <Tabs
            value={activeTechTab}
            onChange={(e, val) => setActiveTechTab(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': {
                display: 'none',
              },
              '& .MuiTabs-flexContainer': {
                gap: 1.5,
              }
            }}
          >
            {techCategories.map((cat) => (
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
                  background: 'rgba(30, 36, 43, 0.3)',
                  transition: 'all 0.3s ease',
                  '&.Mui-selected': {
                    color: '#00FFCC',
                    background: 'rgba(0, 255, 204, 0.12)',
                    borderColor: '#00FFCC',
                    boxShadow: '0 0 15px rgba(0, 255, 204, 0.18)',
                  },
                  '&:hover': {
                    background: 'rgba(30, 36, 43, 0.6)',
                    borderColor: '#48AFF0',
                  }
                }}
              />
            ))}
          </Tabs>

          <Grid container spacing={2}>
            {selectedTechStack?.techs.map((tech, idx) => (
              <Grid item xs={6} sm={4} md={3} key={idx}>
                <Paper
                  sx={{
                    background: 'rgba(20, 26, 32, 0.5)',
                    p: 2.5,
                    borderRadius: '12px',
                    border: '1px solid rgba(72,175,240,0.08)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(20, 26, 32, 0.8)',
                      borderColor: '#48AFF0',
                      boxShadow: '0 0 12px rgba(72, 175, 240, 0.12)'
                    }
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#E0E8EF' }}>
                    {tech}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Operating Pillars */}
        <Box ref={pillarsRef} sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 4,
              letterSpacing: 1,
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: '1.3rem'
            }}
          >
            Why Enterprises Choose CodeIt
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: "Agile Sprints & Clear Delivery",
                desc: "We prioritize iterative development and clear feedback cycles, ensuring you receive fully tested increments of value at every stage.",
                color: "#48AFF0"
              },
              {
                title: "Elite Certified Talent",
                desc: "Our teams consist of AWS Certified Solutions Architects, CISSP certified cybersecurity specialists, and top-tier full stack engineers.",
                color: "#00FFCC"
              },
              {
                title: "Robust SLA Commitments",
                desc: "We stand behind our production deployments with bulletproof Service Level Agreements, providing high-availability configurations and disaster recovery stubs.",
                color: "#A259FF"
              }
            ].map((pillar, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(30, 36, 43, 0.4)',
                    backdropFilter: 'blur(10px)',
                    p: 4,
                    borderRadius: '16px',
                    border: '1.5px solid rgba(72, 175, 240, 0.12)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    '&:hover': {
                      background: 'rgba(30, 36, 43, 0.7)',
                      transform: 'translateY(-5px)',
                      borderColor: pillar.color,
                      boxShadow: `0 8px 24px rgba(${pillar.color === '#48AFF0' ? '72, 175, 240' : pillar.color === '#00FFCC' ? '0, 255, 204' : '162, 89, 255'}, 0.12)`,
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: pillar.color, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TimelineOutlinedIcon sx={{ fontSize: '1.25rem' }} /> {pillar.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A7B6C2', lineHeight: 1.6 }}>
                    {pillar.desc}
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
            Initiate Your Tech Project
          </Typography>
          <Typography variant="body1" sx={{ color: '#A7B6C2', maxWidth: '750px', mx: 'auto', mb: 5, lineHeight: 1.6 }}>
            Ready to design a custom SaaS, audit your server security, or migrate your databases to the cloud?
            Contact our consulting desk to schedule a technical discovery call.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ background: 'rgba(20, 26, 32, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#48AFF0', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PlaceOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Headquarters
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.6 }}>
                  CodeIt Consulting<br />
                  Mahaveer Radiance, CBI Colony<br />
                  Near Madhapur Metro Station, Hyderabad - 500081, Telangana, India
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ background: 'rgba(20, 26, 32, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00FFCC', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Contact Channels
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Phone 1: <a href="tel:+917075782798" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>+91 7075 782 798</a><br />
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ background: 'rgba(20, 26, 32, 0.5)', p: 3, borderRadius: '12px', border: '1px solid rgba(72,175,240,0.1)', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#A259FF', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailOutlinedIcon sx={{ fontSize: '1.1rem' }} /> Technical Desks
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E8EF', lineHeight: 1.8 }}>
                  Business: <a href="mailto:hello@codeitconsulting.pro" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>hello@codeitconsulting.pro</a><br />
                  Corporate: <a href="https://codeitconsulting.pro" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', textDecoration: 'none' }}>codeitconsulting.pro</a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>


        </Paper>
      </Box>
    </Box>
  );
};

export default CodeItConsultingPage;

