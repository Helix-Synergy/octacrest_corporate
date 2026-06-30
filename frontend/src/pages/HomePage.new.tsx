import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CardSwap, { Card } from '../components/CardSwap';
import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
import codeitLogo from '../assets/images/codeit-logo.png';
import peptidesLogo from '../assets/images/peptides-logo.png';
import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
import helixEscrollLogo from '../assets/images/E-VolveLogo.png';
import digigroLogo from '../assets/images/digigro-logo.png';
import helixAuraLogo from '../assets/images/aura-logo.png';
import helixChannelEightLogo from '../assets/images/channel8-logo.png';

const HERO_TEXT = '#F5F8FA';
const SUB_COMPANIES = [
  { label: 'HELIX CONFERENCES', image: helixConferencesLogo, description: 'Curating World-class Biotech, Pharma & Life Science Events that shape the Future.' },
  { label: 'CODEIT CONSULTING', image: codeitLogo, description: 'Expert IT services for Software Development, QA, DevOps & Cloud solutions.' },
  { label: 'PEPTIDES KNOWLEDGE PARK', image: peptidesLogo, description: '18+ years of Scientific Excellence in Research, Lab services, Molecular Biology & Education support.' },
  { label: 'CHANNEL8', image: helixChannelEightLogo, description: 'Your Go-To YouTube Channel for diverse content including Food, Business, Technology, and Lifestyle. Engaging Videos, Entertainment, and Insights.' },
  { label: 'HELIX ESCROLL', image: helixEscrollLogo, description: '' },
  { label: 'DIGIGRO', image: digigroLogo, description: 'Specializing in Social Media Marketing, Content Creation, and Digital Advertising. Boost Your Online Presence, Drive Engagement, and Grow Your Brand.' },
  { label: 'AURA BUSINESS CONSULTING', image: helixAuraLogo, description: 'Providing A-to-Z Business Consulting Services, including Strategic Planning, Market Analysis, Financial Advisory, and Operational Excellence. Comprehensive Solutions for Growth.' },
  { label: 'HELIX OPEN ACCESS JOURNALS', image: helixJournalsLogo, description: 'Peer-reviewed International Journals in Science, Technology, Health & Agriculture.' },
];

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const isTablet = window.innerWidth >= 600 && window.innerWidth < 960;

  const renderMobileView = () => (
    <Box sx={{ textAlign: 'center', py: 4, position: 'relative', minHeight: 400 }}>
      <CardSwap
        width={340}
        height={220}
        cardDistance={50}
        verticalDistance={60}
        delay={3500}
        pauseOnHover={true}
        skewAmount={8}
        easing="elastic"
      >
        {SUB_COMPANIES.map((company, idx) => (
          <Card key={idx} customClass="shadow-lg">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img src={company.image} alt={company.label} style={{ width: 80, height: 80, objectFit: 'contain', borderRadius: 16, marginBottom: 12 }} />
              <Typography variant="h6" sx={{ color: HERO_TEXT, fontWeight: 700, fontSize: '1rem', mb: 1 }}>{company.label}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', textAlign: 'center', px: 2 }}>{company.description}</Typography>
            </Box>
          </Card>
        ))}
      </CardSwap>
    </Box>
  );

  const renderTabletView = () => (
    <Box sx={{ textAlign: 'center', py: 4, position: 'relative', minHeight: 400 }}>
      <CardSwap
        width={420}
        height={260}
        cardDistance={60}
        verticalDistance={70}
        delay={4000}
        pauseOnHover={true}
        skewAmount={7}
        easing="elastic"
      >
        {SUB_COMPANIES.map((company, idx) => (
          <Card key={idx} customClass="shadow-xl">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img src={company.image} alt={company.label} style={{ width: 100, height: 100, objectFit: 'contain', borderRadius: 18, marginBottom: 14 }} />
              <Typography variant="h6" sx={{ color: HERO_TEXT, fontWeight: 700, fontSize: '1.15rem', mb: 1 }}>{company.label}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', textAlign: 'center', px: 2 }}>{company.description}</Typography>
            </Box>
          </Card>
        ))}
      </CardSwap>
    </Box>
  );

  // Desktop fallback (simple message)
  const renderDesktopView = () => (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mb: 4 }}>
        Welcome to Helix Synergy Corp
      </Typography>
      <Typography variant="h5" sx={{ color: '#A7B6C2', fontWeight: 400, mb: 2 }}>
        Innovative Synergy Solutions with a Global Impression.
      </Typography>
      <Typography variant="body1" sx={{ color: '#fff', opacity: 0.7 }}>
        Please view on mobile or tablet for interactive card experience.
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', background: '#0A0A0A' }}>
      {(isMobile && !isTablet) ? renderMobileView() : isTablet ? renderTabletView() : renderDesktopView()}
    </Box>
  );
};

export default HomePage;
