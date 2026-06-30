// import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/Octacrest Corporate Pvt Ltd.Only.logo.png'; // Main company logo
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import useMediaQuery from '@mui/material/useMediaQuery';

// // Sub-company logos (assuming these paths are correct in src/assets/images)
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixEscrollLogo from '../assets/images/helix-e-scroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';

// // NEW IMPORTS for the new companies with updated paths
// import helixAuraLogo from '../assets/images/aura-logo.png';
// import helixChannelEightLogo from '../assets/images/channel8-logo.png';
// import { none } from 'ol/centerconstraint';

// // Ensure ScrollTrigger plugin is registered
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // This defines the maximum spread distance for desktop
// const BASE_BLUR_BG_SIZE = 450; // Main logo blur background size
// const BASE_LOGO_SIZE = 300; // Main company logo size

// const BASE_SUB_COMPANY_LOGO_SIZE = 140; // Base size for peripheral logos

// // Constants for scroll thresholds
// const SCROLL_THRESHOLD_SCROLL_TO_TOP_BUTTON = 800; // Pixels scrolled before button appears
// const NAVBAR_HEIGHT_DESKTOP = 64; // Approximate height of AppBar on desktop
// const NAVBAR_HEIGHT_MOBILE = 56; // Approximate height of AppBar on mobile

// const SUB_COMPANIES = [
//     { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating World-class Biotech, Pharma & Life Science Events that shape the Future.' },
//     { label: 'CODEIT CONSULTING', to: 'https://codeitconsulting.pro/', image: codeitLogo, description: 'Expert IT services for Software Development, QA, DevOps & Cloud solutions.' },
//     { label: 'PEPTIDES KNOWLEDGE PARK', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of Scientific Excellence in Research, Lab services, Molecular Biology & Education support.' },
//     { label: 'CHANNEL8', to: '/channel8', image: helixChannelEightLogo, description: 'Your Go-To YouTube Channel for diverse content including Food, Business, Technology, and Lifestyle. Engaging Videos, Entertainment, and Insights.' },
//     { label: 'HELIX ESCROLL', to: '/helix-e-scroll', image: helixEscrollLogo, description: '10+ years of experience in Digital Marketing, SEO & content marketing.' },
//     { label: 'DIGIGRO', to: '/digigro', image: digigroLogo, description: 'Specializing in Social Media Marketing, Content Creation, and Digital Advertising. Boost Your Online Presence, Drive Engagement, and Grow Your Brand.' },
//     { label: 'AURA BUSINESS CONSULTING', to: '/aura-business-consulting', image: helixAuraLogo, description: 'Providing A-to-Z Business Consulting Services, including Strategic Planning, Market Analysis, Financial Advisory, and Operational Excellence. Comprehensive Solutions for Growth.' },
//     { label: 'HELIX OPEN ACCESS JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed International Journals in Science, Technology, Health & Agriculture.' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//     position: 'absolute',
//     width: BASE_BLUR_BG_SIZE,
//     height: BASE_BLUR_BG_SIZE,
//     borderRadius: '20%',
//     background: 'rgba(255, 255, 255, 0.18)',
//     zIndex: 1,
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%, -50%)',
//     opacity: 1,
//     filter: 'blur(10px)',
//     [theme.breakpoints.down('md')]: {
//         width: BASE_BLUR_BG_SIZE * 0.8,
//         height: BASE_BLUR_BG_SIZE * 0.8,
//     },
//     [theme.breakpoints.down('sm')]: {
//         width: BASE_BLUR_BG_SIZE * 0.6,
//         height: BASE_BLUR_BG_SIZE * 0.6,
//     },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//     width: BASE_LOGO_SIZE,
//     height: BASE_LOGO_SIZE,
//     borderRadius: '20%',
//     zIndex: 2,
//     position: 'absolute',
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%, -50%)',
//     opacity: 1,
//     [theme.breakpoints.down('md')]: {
//         width: BASE_LOGO_SIZE * 0.8,
//         height: BASE_LOGO_SIZE * 0.8,
//     },
//     [theme.breakpoints.down('sm')]: {
//         width: BASE_LOGO_SIZE * 0.6,
//         height: BASE_LOGO_SIZE * 0.6,
//     },
// }));

// const HeroContainer = styled(Box)(() => ({
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'transparent',
//     flexDirection: 'column',
//     overflow: 'hidden',
//     paddingTop: '0vh',
// }));

// const HomePage: React.FC = () => {
//     const theme = useTheme();
//     const heroRef = useRef<HTMLDivElement | null>(null); // Corrected typo here: HTMLDivLement -> HTMLDivElement
//     const logoRef = useRef<HTMLImageElement | null>(null);
//     const blurBgRef = useRef<HTMLDivElement | null>(null);
//     const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//     const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//     const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//     const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//     const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//     const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Up to 600px
//     const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Up to 960px

//     // Adjusted radius for better visibility of all subcompanies
//     const currentRadius = isSmallScreen
//         ? BASE_HEX_RADIUS * 0.30
//         : isMediumScreen
//         ? BASE_HEX_RADIUS * 0.42
//         : BASE_HEX_RADIUS * 0.50;

//     // Calculate dynamic Navbar height offset for ScrollTrigger
//     const dynamicNavbarOffset = isMediumScreen ? NAVBAR_HEIGHT_MOBILE : NAVBAR_HEIGHT_DESKTOP;

//     useEffect(() => {
//         // Scroll to top on component mount (for initial load)
//         window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//         // This is crucial to ensure ScrollTrigger calculates positions correctly after scroll reset
//         ScrollTrigger.refresh(true);

//         const updateDimensions = () => {
//             if (heroRef.current) {
//                 setContainerDimensions({
//                     width: heroRef.current.offsetWidth,
//                     height: heroRef.current.offsetHeight,
//                 });
//             }
//         };

//         updateDimensions();
//         window.addEventListener('resize', updateDimensions);

//         return () => {
//             window.removeEventListener('resize', updateDimensions);
//         };
//     }, []);

//     useEffect(() => {
//         if (!logoRef.current || !blurBgRef.current) {
//             return;
//         }

//         gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//         gsap.set([blurBgRef.current, logoRef.current], { opacity: 1, scale: 1, rotate: 0 });

//         const entryAnimationTl = gsap.timeline({
//             paused: false,
//             onComplete: () => {
//                 if (initialLogoRotationTweenRef.current) {
//                     initialLogoRotationTweenRef.current.play();
//                 }
//                 if (logoPulseTweenRef.current) {
//                     logoPulseTweenRef.current.play();
//                 }
//             },
//         });

//         entryAnimationTl
//             .fromTo([blurBgRef.current, logoRef.current],
//                 { opacity: 0, scale: 0.5 },
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     duration: 0.8,
//                     ease: 'power2.out',
//                 }
//             )
//             .fromTo(logoRef.current,
//                 { rotate: 0 },
//                 {
//                     rotate: -720,
//                     duration: 1.5,
//                     ease: 'power3.inOut',
//                 }, ">-0.4"
//             );

//         return () => {
//             entryAnimationTl.kill();
//         };
//     }, []);

//     const center = {
//         x: containerDimensions.width / 2,
//         y: containerDimensions.height / 2,
//     };

//     const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//     const finalPositions = SUB_COMPANIES.map((_, i) => {
//         return {
//             x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//             y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//         };
//     });

//     useEffect(() => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         if (initialLogoRotationTweenRef.current) { initialLogoRotationTweenRef.current.kill(); initialLogoRotationTweenRef.current = null; }
//         if (finalLogoRotationTweenRef.current) { finalLogoRotationTweenRef.current.kill(); finalLogoRotationTweenRef.current = null; }
//         if (logoPulseTweenRef.current) { logoPulseTweenRef.current.kill(); logoPulseTweenRef.current = null; }

//         if (
//             !heroRef.current ||
//             !logoRef.current ||
//             !blurBgRef.current ||
//             !peripheralLinksContainerRef.current ||
//             !scrollToTopButtonRef.current ||
//             containerDimensions.width === 0 ||
//             containerDimensions.height === 0
//         ) {
//             return;
//         }

//         initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//             rotate: '+=360',
//             duration: 15,
//             ease: 'none',
//             repeat: -1,
//             paused: true,
//         });

//         logoPulseTweenRef.current = gsap.to(logoRef.current, {
//             scale: 1.05,
//             duration: 0.2,
//             yoyo: true,
//             repeat: -1,
//             ease: "power1.inOut",
//             delay: 0.5,
//             repeatDelay: 2.8,
//             paused: true,
//         });

//         const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: heroRef.current,
//                 start: `top top+=${dynamicNavbarOffset}`,
//                 end: '+=2500',
//                 scrub: 1,
//                 pin: true,
//                 // markers: true, // Uncomment this line temporarily to debug ScrollTrigger markers
//                 onEnter: () => {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//                     if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//                 },
//                 onLeave: () => {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//                     if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//                 },
//                 onEnterBack: () => {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//                     if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//                 },
//                 onLeaveBack: () => {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//                     if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//                 },
//             },
//         });

//         tl.to(
//             logoRef.current,
//             {
//                 rotate: 0,
//                 duration: 0.8,
//                 ease: 'power2.out',
//             },
//             0
//         )
//         .to(
//             blurBgRef.current,
//             {
//                 opacity: 0,
//                 filter: 'blur(0px)',
//                 duration: 0.8,
//                 ease: 'power2.out',
//             },
//             0
//         );

//         subCompanyElements.forEach((el, i) => {
//             const finalPos = finalPositions[i];

//             const currentSubCompanyLogoSize = isSmallScreen
//                 ? BASE_SUB_COMPANY_LOGO_SIZE * 0.45
//                 : isMediumScreen
//                 ? BASE_SUB_COMPANY_LOGO_SIZE * 0.75
//                 : BASE_SUB_COMPANY_LOGO_SIZE * 0.9;

//             // const offset = currentSubCompanyLogoSize / 2; // This is used in the Link's `left` and `top` style

//             // --- MODIFIED: Ensure logos are visible and animate scale and position ---
//             gsap.set(el as HTMLElement, {
//                 opacity: 1, // Keep visible from the start
//                 scale: 0,   // Start very small
//                 // Calculate initial x, y to place them at the center of the hero container
//                 x: center.x - (finalPos.x), // Offset from final position to center
//                 y: center.y - (finalPos.y), // Offset from final position to center
//                 transformOrigin: 'center center',
//             });

//             tl.to(
//                 el,
//                 {
//                     opacity: 1, // Ensure opacity is 1 during animation
//                     scale: 1,   // Grow to full size
//                     x: 0,       // Move to their final calculated absolute position (relative to their initial transform offset)
//                     y: 0,
//                     duration: 1.2,
//                     ease: 'back.out(1.7)',
//                     filter: 'drop-shadow(0px 0px 8px rgba(0,255,204,0.7))',
//                 },
//                 "<0.2"
//             );

//             tl.to(el, {
//                 filter: 'none',
//                 duration: 0.6,
//                 ease: 'power1.out'
//             }, ">0.2")
//         });

//         finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//             rotate: '+=360',
//             duration: 15,
//             ease: 'none',
//             repeat: -1,
//             paused: true,
//         });

//         gsap.to(scrollToTopButtonRef.current, {
//             opacity: 1,
//             pointerEvents: 'auto',
//             scrollTrigger: {
//                 trigger: heroRef.current,
//                 start: `top-=${SCROLL_THRESHOLD_SCROLL_TO_TOP_BUTTON}`,
//                 toggleActions: 'play none none reverse',
//             },
//         });

//         ScrollTrigger.refresh();

//         return () => {
//             tl.kill();
//             if (initialLogoRotationTweenRef.current) { initialLogoRotationTweenRef.current.kill(); }
//             if (finalLogoRotationTweenRef.current) { finalLogoRotationTweenRef.current.kill(); }
//             if (logoPulseTweenRef.current) { logoPulseTweenRef.current.kill(); }
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, [currentRadius, containerDimensions, dynamicNavbarOffset, isSmallScreen, isMediumScreen]);

//     return (
//         <>
//             <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//                 {/* Fixed Background with Gradients */}
//                 <Box
//                     sx={{
//                         position: 'fixed',
//                         top: 0,
//                         left: 0,
//                         width: '100vw',
//                         height: '100vh',
//                         minHeight: '100vh',
//                         zIndex: -1,
//                         background: '#0A0A0A',
//                         backgroundImage: `
//                             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//                             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//                             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//                             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//                         `,
//                         filter: 'none',
//                         borderRadius: '0',
//                         pointerEvents: 'none',
//                     }}
//                 />

//                 {/* Hero Section Title and Subtitle */}
//                 <Typography
//                     variant="h2"
//                     sx={{
//                         color: HERO_TEXT,
//                         fontWeight: 800,
//                         letterSpacing: 2,
//                         textShadow: '0 2px 12px #000',
//                         zIndex: 3,
//                         textAlign: 'center',
//                         fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//                         mt: { xs: '60px', sm: '80px', md: '80px' },
//                         px: 2,
//                     }}
//                 >
//                     Welcome to Helix Synergy Corp
//                 </Typography>
//                 <Typography
//                     variant="h5"
//                     sx={{
//                         color: '#A7B6C2',
//                         fontWeight: 400,
//                         letterSpacing: 1,
//                         zIndex: 3,
//                         textAlign: 'center',
//                         fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//                         mt: 2,
//                         mb: 8,
//                         px: 2,
//                     }}
//                 >
//                     Innovative Synergy Solutions with a Global Impression.
//                 </Typography>

//                 {/* Main Hero Container for animations */}
//                 <HeroContainer
//                     ref={heroRef}
//                     sx={{
//                         height: 'auto',
//                         minHeight: { xs: `calc(100vh - ${NAVBAR_HEIGHT_MOBILE}px)`, md: `calc(100vh - ${NAVBAR_HEIGHT_DESKTOP}px)` },
//                         width: '100%',
//                         maxWidth: { xs: '100%', md: 900, lg: 1200 },
//                         margin: '0 auto',
//                         position: 'relative',
//                         overflow: 'visible', // Keep visible for elements to spread
//                         display: 'block',
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: '100%',
//                             height: '100%',
//                             minHeight: '400px', // Fallback min height
//                             position: 'relative',
//                             maxWidth: '100%',
//                         }}
//                     >
//                         <StyledBlurBackground ref={blurBgRef} />
//                         <CenterLogo ref={logoRef} src={logo} alt="Helix Synergy Corp Logo" />

//                         {/* Peripheral Links Container */}
//                         <Box ref={peripheralLinksContainerRef}>
//                             {finalPositions.map((pos, i) => {
//                                 const currentSubCompanyLogoSize = isSmallScreen
//                                     ? BASE_SUB_COMPANY_LOGO_SIZE * 0.45
//                                     : isMediumScreen
//                                     ? BASE_SUB_COMPANY_LOGO_SIZE * 0.75
//                                     : BASE_SUB_COMPANY_LOGO_SIZE * 0.9;
//                                 const offset = currentSubCompanyLogoSize / 2;

//                                 return (
//                                     <Tooltip
//                                         title={SUB_COMPANIES[i].description}
//                                         placement={isSmallScreen ? "bottom" : "top"}
//                                         key={i}
//                                         componentsProps={{
//                                             tooltip: {
//                                                 sx: {
//                                                     borderRadius:'10px',
//                                                     fontSize: { xs: '0.8rem', sm: '1rem' },
//                                                     padding: '8px 12px',
//                                                     maxWidth: '250px',
//                                                 },
//                                             },
//                                         }}
//                                     >
//                                         <Link
//                                             component={RouterLink}
//                                             to={SUB_COMPANIES[i].to}
//                                             target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                                             aria-label={SUB_COMPANIES[i].label + ' website link'}
//                                             sx={{
//                                                 position: 'absolute',
//                                                 width: currentSubCompanyLogoSize,
//                                                 height: currentSubCompanyLogoSize,
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                                 boxSizing: 'border-box',
//                                                 cursor: 'pointer',
//                                                 zIndex: 2,
//                                                 // Position elements relative to the parent Box
//                                                 left: pos.x - offset,
//                                                 top: pos.y - offset,
//                                                 textDecoration: 'none',
//                                                 // Initial opacity and transform are now handled by GSAP set/to
//                                                 background: 'white',
//                                                 borderRadius: '50%',
//                                                 padding: '8px',
//                                                 '& img': {
//                                                     transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                                                     filter: 'grayscale(0%) brightness(100%)',
//                                                     boxShadow: 'none',
//                                                     borderRadius:'10%',
//                                                 },
//                                                 '&:hover img': {
//                                                     transform: 'scale(1.1) translateY(-5px)',
//                                                     filter: 'grayscale(0%) brightness(120%)',
//                                                 },
//                                                 '&:hover': {
//                                                     boxShadow: '0 0 15px rgba(0, 255, 204, 0.8)',
//                                                 }
//                                             }}
//                                         >
//                                             <img
//                                                 src={SUB_COMPANIES[i].image}
//                                                 alt={SUB_COMPANIES[i].label + ' Logo'}
//                                                 style={{
//                                                     width: '100%',
//                                                     height: '100%',
//                                                     objectFit: 'contain',
//                                                     boxSizing: 'border-box',
//                                                     borderRadius:'10%',
//                                                 }}
//                                             />
//                                         </Link>
//                                     </Tooltip>
//                                 );
//                             })}
//                         </Box>
//                     </Box>
//                 </HeroContainer>

//                 {/* Scroll To Top Button */}
//                 <Button
//                     ref={scrollToTopButtonRef}
//                     variant="contained"
//                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                     sx={{
//                         position: 'fixed',
//                         bottom: 70,
//                         right: 20,
//                         display:'none',
//                         zIndex: 100000,
//                         backgroundColor: 'rgba(255, 255, 255, 0.23)',
//                         '&:hover': {
//                             backgroundColor: 'rgba(181, 181, 181, 0.41)',
//                         },
//                         borderRadius: '50%',
//                         width: 30,
//                         height: 30,
//                         minWidth: 0,
//                         padding: 0,
//                         opacity: 0,
//                         pointerEvents: 'none',
//                         transition: 'opacity 0.3s ease-in-out',
//                     }}
//                     className="scroll-to-top-button"
//                 >
//                     <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//                 </Button>
//             </Box>
//         </>
//     );
// };

// export default HomePage;

// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, MobileStepper, useTheme, Tooltip } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/Octacrest Corporate Pvt Ltd.Only.logo.png'; // Main company logo
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import useMediaQuery from '@mui/material/useMediaQuery';

// // Sub-company logos (assuming these paths are correct in src/assets/images)
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixEscrollLogo from '../assets/images/helix-e-scroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// import helixAuraLogo from '../assets/images/aura-logo.png';
// import helixChannelEightLogo from '../assets/images/channel8-logo.png';

// // Ensure ScrollTrigger plugin is registered
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // This defines the maximum spread distance for desktop
// const BASE_BLUR_BG_SIZE = 450; // Main logo blur background size
// const BASE_LOGO_SIZE = 300; // Main company logo size
// const BASE_SUB_COMPANY_LOGO_SIZE = 140; // Base size for peripheral logos

// // Constants for scroll thresholds and mobile
// const SCROLL_THRESHOLD_SCROLL_TO_TOP_BUTTON = 800; // Pixels scrolled before button appears
// const NAVBAR_HEIGHT_DESKTOP = 64; // Approximate height of AppBar on desktop
// const NAVBAR_HEIGHT_MOBILE = 56; // Approximate height of AppBar on mobile
// const MOBILE_LOGO_SIZE = 120;
// const MOBILE_ANIMATION_DURATION = 1.2;

// const SUB_COMPANIES = [
//     { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating World-class Biotech, Pharma & Life Science Events that shape the Future.' },
//     { label: 'CODEIT CONSULTING', to: 'https://codeitconsulting.pro/', image: codeitLogo, description: 'Expert IT services for Software Development, QA, DevOps & Cloud solutions.' },
//     { label: 'PEPTIDES KNOWLEDGE PARK', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of Scientific Excellence in Research, Lab services, Molecular Biology & Education support.' },
//     { label: 'CHANNEL8', to: '/channel8', image: helixChannelEightLogo, description: 'Your Go-To YouTube Channel for diverse content including Food, Business, Technology, and Lifestyle. Engaging Videos, Entertainment, and Insights.' },
//     { label: 'HELIX ESCROLL', to: '/helix-e-scroll', image: helixEscrollLogo, description: '10+ years of experience in Digital Marketing, SEO & content marketing.' },
//     { label: 'DIGIGRO', to: '/digigro', image: digigroLogo, description: 'Specializing in Social Media Marketing, Content Creation, and Digital Advertising. Boost Your Online Presence, Drive Engagement, and Grow Your Brand.' },
//     { label: 'AURA BUSINESS CONSULTING', to: '/aura-business-consulting', image: helixAuraLogo, description: 'Providing A-to-Z Business Consulting Services, including Strategic Planning, Market Analysis, Financial Advisory, and Operational Excellence. Comprehensive Solutions for Growth.' },
//     { label: 'HELIX OPEN ACCESS JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed International Journals in Science, Technology, Health & Agriculture.' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//     position: 'absolute',
//     width: BASE_BLUR_BG_SIZE,
//     height: BASE_BLUR_BG_SIZE,
//     borderRadius: '20%',
//     background: 'rgba(255, 255, 255, 0.18)',
//     zIndex: 1,
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%, -50%)',
//     opacity: 1,
//     filter: 'blur(10px)',
//     [theme.breakpoints.down('md')]: {
//         width: BASE_BLUR_BG_SIZE * 0.8,
//         height: BASE_BLUR_BG_SIZE * 0.8,
//     },
//     [theme.breakpoints.down('sm')]: {
//         width: BASE_BLUR_BG_SIZE * 0.6,
//         height: BASE_BLUR_BG_SIZE * 0.6,
//     },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//     width: BASE_LOGO_SIZE,
//     height: BASE_LOGO_SIZE,
//     borderRadius: '20%',
//     zIndex: 2,
//     position: 'absolute',
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%, -50%)',
//     opacity: 1,
//     [theme.breakpoints.down('md')]: {
//         width: BASE_LOGO_SIZE * 0.8,
//         height: BASE_LOGO_SIZE * 0.8,
//     },
//     [theme.breakpoints.down('sm')]: {
//         width: BASE_LOGO_SIZE * 0.6,
//         height: BASE_LOGO_SIZE * 0.6,
//     },
// }));

// const HeroContainer = styled(Box)(() => ({
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'transparent',
//     flexDirection: 'column',
//     overflow: 'hidden',
//     paddingTop: '0vh',
// }));

// // NEW: Styled Components for Mobile with forwardRef
// const AnimatedLogo = styled(
//     React.forwardRef<HTMLDivElement, { children?: React.ReactNode }>((props, ref) => <Box ref={ref} {...props} />)
// )(({ theme }) => ({
//     position: 'absolute',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     opacity: 0,
//     zIndex: 2,
// }));

// // NEW: Styled Container for Mobile Sunrise/Sunset UI
// const SunriseSunsetContainer = styled(Box)(({ theme }) => ({
//     position: 'relative',
//     width: '100%',
//     height: '60vh',
//     minHeight: '400px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
// }));

// // NEW: Styled Main Logo for Mobile
// const MainLogoFinal = styled('img')(({ theme }) => ({
//     width: MOBILE_LOGO_SIZE * 0.7,
//     height: MOBILE_LOGO_SIZE * 0.7,
//     borderRadius: '20%',
//     marginTop: theme.spacing(4),
// }));

// const HomePage: React.FC = () => {
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//     const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//     // Mobile state and refs
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [showMainLogo, setShowMainLogo] = useState(false);
//     const mobileAnimationRef = useRef<gsap.core.Timeline | null>(null);
//     const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
//     const mainLogoRef = useRef<HTMLImageElement>(null);
//     const mobileContainerRef = useRef<HTMLDivElement>(null);

//     // Desktop refs
//     const heroRef = useRef<HTMLDivElement | null>(null);
//     const logoRef = useRef<HTMLImageElement | null>(null);
//     const blurBgRef = useRef<HTMLDivElement | null>(null);
//     const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//     const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);
//     const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//     const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//     const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//     const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//     // Adjusted radius for better visibility of all subcompanies
//     const currentRadius = isSmallScreen
//         ? BASE_HEX_RADIUS * 0.30
//         : isMediumScreen
//             ? BASE_HEX_RADIUS * 0.42
//             : BASE_HEX_RADIUS * 0.50;

//     // Calculate dynamic Navbar height offset for ScrollTrigger
//     const dynamicNavbarOffset = isMediumScreen ? NAVBAR_HEIGHT_MOBILE : NAVBAR_HEIGHT_DESKTOP;

//     // Desktop effects
//     useEffect(() => {
//         if (isMobile) return; // Skip desktop setup on mobile

//         window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//         ScrollTrigger.refresh(true);

//         const updateDimensions = () => {
//             if (heroRef.current) {
//                 setContainerDimensions({
//                     width: heroRef.current.offsetWidth,
//                     height: heroRef.current.offsetHeight,
//                 });
//             }
//         };

//         updateDimensions();
//         window.addEventListener('resize', updateDimensions);

//         return () => {
//             window.removeEventListener('resize', updateDimensions);
//         };
//     }, [isMobile]);

//     useEffect(() => {
//         if (isMobile || !logoRef.current || !blurBgRef.current) {
//             return;
//         }

//         gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//         gsap.set([blurBgRef.current, logoRef.current], { opacity: 1, scale: 1, rotate: 0 });

//         const entryAnimationTl = gsap.timeline({
//             paused: false,
//             onComplete: () => {
//                 if (initialLogoRotationTweenRef.current) {
//                     initialLogoRotationTweenRef.current.play();
//                 }
//                 if (logoPulseTweenRef.current) {
//                     logoPulseTweenRef.current.play();
//                 }
//             },
//         });

//         entryAnimationTl
//             .fromTo([blurBgRef.current, logoRef.current],
//                 { opacity: 0, scale: 0.5 },
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     duration: 0.8,
//                     ease: 'power2.out',
//                 }
//             )
//             .fromTo(logoRef.current,
//                 { rotate: 0 },
//                 {
//                     rotate: -720,
//                     duration: 1.5,
//                     ease: 'power3.inOut',
//                 }, ">-0.4"
//             );

//         return () => {
//             entryAnimationTl.kill();
//         };
//     }, [isMobile]);

//     const center = {
//         x: containerDimensions.width / 2,
//         y: containerDimensions.height / 2,
//     };

//     const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//     const finalPositions = SUB_COMPANIES.map((_, i) => {
//         return {
//             x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//             y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//         };
//     });

//     useEffect(() => {
//         if (isMobile) return; // Skip desktop animations on mobile

//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         if (initialLogoRotationTweenRef.current) { initialLogoRotationTweenRef.current.kill(); initialLogoRotationTweenRef.current = null; }
//         if (finalLogoRotationTweenRef.current) { finalLogoRotationTweenRef.current.kill(); finalLogoRotationTweenRef.current = null; }
//         if (logoPulseTweenRef.current) { logoPulseTweenRef.current.kill(); logoPulseTweenRef.current = null; }

//         if (
//             !heroRef.current ||
//             !logoRef.current ||
//             !blurBgRef.current ||
//             !peripheralLinksContainerRef.current ||
//             !scrollToTopButtonRef.current ||
//             containerDimensions.width === 0 ||
//             containerDimensions.height === 0
//         ) {
//             return;
//         }

//         initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//             rotate: '+=360',
//             duration: 15,
//             ease: 'none',
//             repeat: -1,
//             paused: true,
//         });

//         logoPulseTweenRef.current = gsap.to(logoRef.current, {
//             scale: 1.05,
//             duration: 0.2,
//             yoyo: true,
//             repeat: -1,
//             ease: "power1.inOut",
//             delay: 0.5,
//             repeatDelay: 2.8,
//             paused: true,
//         });

//         const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: heroRef.current,
//                 start: `top top+=${dynamicNavbarOffset}`,
//                 end: '+=2500',
//                 scrub: 1,
//                 pin: true,
//                 onEnter: () => {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//                     if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//                 },
//                 onLeave: () => {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//                     if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//                 },
//                 onEnterBack: () => {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//                     if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//                 },
//                 onLeaveBack: () => {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//                     if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//                 },
//             },
//         });

//         tl.to(
//             logoRef.current,
//             {
//                 rotate: 0,
//                 duration: 0.8,
//                 ease: 'power2.out',
//             },
//             0
//         )
//             .to(
//                 blurBgRef.current,
//                 {
//                     opacity: 0,
//                     filter: 'blur(0px)',
//                     duration: 0.8,
//                     ease: 'power2.out',
//                 },
//                 0
//             );

//         subCompanyElements.forEach((el, i) => {
//             const finalPos = finalPositions[i];

//             const currentSubCompanyLogoSize = isSmallScreen
//                 ? BASE_SUB_COMPANY_LOGO_SIZE * 0.45
//                 : isMediumScreen
//                     ? BASE_SUB_COMPANY_LOGO_SIZE * 0.75
//                     : BASE_SUB_COMPANY_LOGO_SIZE * 0.9;
//             const offset = currentSubCompanyLogoSize / 2;

//             gsap.set(el as HTMLElement, {
//                 opacity: 1,
//                 scale: 0,
//                 x: center.x - (finalPos.x),
//                 y: center.y - (finalPos.y),
//                 transformOrigin: 'center center',
//             });

//             tl.to(
//                 el,
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     x: 0,
//                     y: 0,
//                     duration: 1.2,
//                     ease: 'back.out(1.7)',
//                     filter: 'drop-shadow(0px 0px 8px rgba(0,255,204,0.7))',
//                 },
//                 "<0.2"
//             );

//             tl.to(el, {
//                 filter: 'none',
//                 duration: 0.6,
//                 ease: 'power1.out'
//             }, ">0.2")
//         });

//         finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//             rotate: '+=360',
//             duration: 15,
//             ease: 'none',
//             repeat: -1,
//             paused: true,
//         });

//         gsap.to(scrollToTopButtonRef.current, {
//             opacity: 1,
//             pointerEvents: 'auto',
//             scrollTrigger: {
//                 trigger: heroRef.current,
//                 start: `top-=${SCROLL_THRESHOLD_SCROLL_TO_TOP_BUTTON}`,
//                 toggleActions: 'play none none reverse',
//             },
//         });

//         ScrollTrigger.refresh();

//         return () => {
//             tl.kill();
//             if (initialLogoRotationTweenRef.current) { initialLogoRotationTweenRef.current.kill(); }
//             if (finalLogoRotationTweenRef.current) { finalLogoRotationTweenRef.current.kill(); }
//             if (logoPulseTweenRef.current) { logoPulseTweenRef.current.kill(); }
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, [currentRadius, containerDimensions, dynamicNavbarOffset, isSmallScreen, isMediumScreen, isMobile]);

//     // NEW: Mobile-specific sunrise/sunset animation
//     useEffect(() => {
//         if (!isMobile || !mobileContainerRef.current) return;

//         if (mobileAnimationRef.current) {
//             mobileAnimationRef.current.kill();
//             mobileAnimationRef.current = null;
//         }

//         // Initialize all logos to dim state
//         gsap.set(logoRefs.current, {
//             opacity: 0,
//             y: -80,
//             scale: 0.9,
//             filter: 'grayscale(100%) brightness(60%)',
//             boxShadow: '0 0 0px rgba(0,0,0,0)'
//         });
//         if (mainLogoRef.current) {
//             gsap.set(mainLogoRef.current, { opacity: 0, y: 40, scale: 0.9 });
//         }

//         const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

//         SUB_COMPANIES.forEach((_, index) => {
//             const el = logoRefs.current[index];
//             if (!el) return;

//             tl.call(() => setActiveIndex(index));

//             // Sunrise
//             tl.to(el, {
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 duration: 0.8,
//                 ease: 'power2.out',
//                 filter: 'grayscale(0%) brightness(100%)',
//                 boxShadow: '0 0 22px rgba(0,255,204,0.8)'
//             }, index === 0 ? '+=0' : `+=${MOBILE_ANIMATION_DURATION}`);

//             // Golden hour hold
//             tl.to(el, { y: -8, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: 1 });

//             // Sunset
//             tl.to(el, {
//                 opacity: 0,
//                 y: -80,
//                 scale: 0.9,
//                 duration: 0.8,
//                 ease: 'power2.in',
//                 filter: 'grayscale(100%) brightness(60%)',
//                 boxShadow: '0 0 0px rgba(0,0,0,0)'
//             }, '>0.4');
//         });

//         // Final main logo
//         tl.call(() => { setActiveIndex(SUB_COMPANIES.length); setShowMainLogo(true); });
//         tl.fromTo(mainLogoRef.current,
//             { opacity: 0, y: 40, scale: 0.9 },
//             { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)' }
//         );
//         tl.to(mainLogoRef.current, { duration: 1.5 });
//         tl.to(mainLogoRef.current, { opacity: 0, y: 30, duration: 0.6, ease: 'power2.in' });
//         tl.call(() => { setShowMainLogo(false); setActiveIndex(0); });

//         mobileAnimationRef.current = tl;

//         return () => {
//             if (mobileAnimationRef.current) {
//                 mobileAnimationRef.current.kill();
//                 mobileAnimationRef.current = null;
//             }
//         };
//     }, [isMobile]);

//     // NEW: Handle manual navigation for mobile
//     const handleStepChange = (step: number) => {
//         if (mobileAnimationRef.current) {
//             mobileAnimationRef.current.pause();
//         }

//         // Hide all logos before showing the selected one
//         gsap.set(logoRefs.current, { opacity: 0, y: -100, scale: 0.8 });
//         gsap.set(mainLogoRef.current, { opacity: 0, y: 50, scale: 0.8 });

//         if (step < SUB_COMPANIES.length) {
//             setShowMainLogo(false);
//             const logoElement = logoRefs.current[step];
//             if (logoElement) {
//                 gsap.set(logoElement, {
//                     opacity: 1,
//                     y: 0,
//                     scale: 1,
//                     ease: 'power2.out',
//                 });
//             }
//         } else {
//             setShowMainLogo(true);
//         }

//         setActiveIndex(step);
//     };

//     const renderMobileView = () => (
//         <Box sx={{ textAlign: 'center', py: 4 }}>
//             <SunriseSunsetContainer ref={mobileContainerRef}>
//                 {SUB_COMPANIES.map((company, index) => (
//                     <AnimatedLogo
//                         key={index}
//                         ref={(el): void => { logoRefs.current[index] = el; }}
//                         sx={{
//                             width: MOBILE_LOGO_SIZE,
//                             height: MOBILE_LOGO_SIZE,
//                         }}
//                     >
//                         <Tooltip title={company.description} placement="top">
//                             <Link
//                                 component={RouterLink}
//                                 to={company.to}
//                                 target={company.to.startsWith('http') ? '_blank' : '_self'}
//                                 sx={{
//                                     display: 'block',
//                                     textDecoration: 'none',
//                                     '&:hover': {
//                                         transform: 'scale(1.05)',
//                                         transition: 'transform 0.3s ease',
//                                     }
//                                 }}
//                             >
//                                 <img
//                                     src={company.image}
//                                     alt={company.label}
//                                     style={{
//                                         width: '100%',
//                                         height: '100%',
//                                         objectFit: 'contain',
//                                         borderRadius: '15%',
//                                         boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
//                                     }}
//                                 />
//                             </Link>
//                         </Tooltip>
//                         <Typography
//                             variant="h6"
//                             sx={{
//                                 mt: 2,
//                                 color: HERO_TEXT,
//                                 fontWeight: 600,
//                                 fontSize: '1rem',
//                             }}
//                         >
//                             {company.label}
//                         </Typography>
//                     </AnimatedLogo>
//                 ))}

//                 {showMainLogo && (
//                     <Box sx={{ position: 'absolute', bottom: 0, zIndex: 3 }}>
//                         <MainLogoFinal
//                             ref={mainLogoRef}
//                             src={logo}
//                             alt="Helix Synergy Corp Logo"
//                         />
//                     </Box>
//                 )}
//             </SunriseSunsetContainer>

//             <MobileStepper
//                 variant="dots"
//                 steps={SUB_COMPANIES.length + 1}
//                 position="static"
//                 activeStep={activeIndex}
//                 sx={{
//                     justifyContent: 'center',
//                     background: 'transparent',
//                     mt: 2,
//                     '& .MuiMobileStepper-dot': {
//                         backgroundColor: 'rgba(255,255,255,0.4)',
//                         '&.Mui-active': {
//                             backgroundColor: theme.palette.primary.main,
//                         }
//                     }
//                 }}
//                 nextButton={null}
//                 backButton={null}
//             />

//             <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
//                 <Button
//                     variant="outlined"
//                     onClick={() => handleStepChange(
//                         activeIndex > 0 ? activeIndex - 1 : SUB_COMPANIES.length
//                     )}
//                     sx={{ color: HERO_TEXT, borderColor: HERO_TEXT }}
//                 >
//                     Previous
//                 </Button>
//                 <Button
//                     variant="outlined"
//                     onClick={() => handleStepChange(
//                         activeIndex < SUB_COMPANIES.length ? activeIndex + 1 : 0
//                     )}
//                     sx={{ color: HERO_TEXT, borderColor: HERO_TEXT }}
//                 >
//                     Next
//                 </Button>
//                 <Button
//                     variant="outlined"
//                     onClick={() => {
//                         if (mobileAnimationRef.current) {
//                             if (mobileAnimationRef.current.paused()) {
//                                 mobileAnimationRef.current.play();
//                             } else {
//                                 mobileAnimationRef.current.pause();
//                             }
//                         }
//                     }}
//                     sx={{ color: HERO_TEXT, borderColor: HERO_TEXT }}
//                 >
//                     {mobileAnimationRef.current?.paused() ? 'Play' : 'Pause'}
//                 </Button>
//             </Box>

//             <Typography
//                 variant="body2"
//                 sx={{
//                     color: 'rgba(255,255,255,0.7)',
//                     mt: 2,
//                     fontStyle: 'italic'
//                 }}
//             >
//                 Swipe left/right or use buttons to navigate
//             </Typography>
//         </Box>
//     );

//     const renderDesktopView = () => (
//         <HeroContainer
//             ref={heroRef}
//             sx={{
//                 height: 'auto',
//                 minHeight: { xs: `calc(100vh - ${NAVBAR_HEIGHT_MOBILE}px)`, md: `calc(100vh - ${NAVBAR_HEIGHT_DESKTOP}px)` },
//                 width: '100%',
//                 maxWidth: { xs: '100%', md: 900, lg: 1200 },
//                 margin: '0 auto',
//                 position: 'relative',
//                 overflow: 'visible',
//                 display: 'block',
//             }}
//         >
//             <Box
//                 sx={{
//                     width: '100%',
//                     height: '100%',
//                     minHeight: '400px',
//                     position: 'relative',
//                     maxWidth: '100%',
//                 }}
//             >
//                 <StyledBlurBackground ref={blurBgRef} />
//                 <CenterLogo ref={logoRef} src={logo} alt="Helix Synergy Corp Logo" />

//                 {/* Peripheral Links Container */}
//                 <Box ref={peripheralLinksContainerRef}>
//                     {finalPositions.map((pos, i) => {
//                         const currentSubCompanyLogoSize = isSmallScreen
//                             ? BASE_SUB_COMPANY_LOGO_SIZE * 0.45
//                             : isMediumScreen
//                                 ? BASE_SUB_COMPANY_LOGO_SIZE * 0.75
//                                 : BASE_SUB_COMPANY_LOGO_SIZE * 0.9;
//                         const offset = currentSubCompanyLogoSize / 2;

//                         return (
//                             <Tooltip
//                                 title={SUB_COMPANIES[i].description}
//                                 placement={isSmallScreen ? "bottom" : "top"}
//                                 key={i}
//                                 componentsProps={{
//                                     tooltip: {
//                                         sx: {
//                                             borderRadius: '10px',
//                                             fontSize: { xs: '0.8rem', sm: '1rem' },
//                                             padding: '8px 12px',
//                                             maxWidth: '250px',
//                                         },
//                                     },
//                                 }}
//                             >
//                                 <Link
//                                     component={RouterLink}
//                                     to={SUB_COMPANIES[i].to}
//                                     target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                                     aria-label={SUB_COMPANIES[i].label + ' website link'}
//                                     sx={{
//                                         position: 'absolute',
//                                         width: currentSubCompanyLogoSize,
//                                         height: currentSubCompanyLogoSize,
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         boxSizing: 'border-box',
//                                         cursor: 'pointer',
//                                         zIndex: 2,
//                                         left: pos.x - offset,
//                                         top: pos.y - offset,
//                                         textDecoration: 'none',
//                                         background: 'white',
//                                         borderRadius: '50%',
//                                         padding: '8px',
//                                         '& img': {
//                                             transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                                             filter: 'grayscale(0%) brightness(100%)',
//                                             boxShadow: 'none',
//                                             borderRadius: '10%',
//                                         },
//                                         '&:hover img': {
//                                             transform: 'scale(1.1) translateY(-5px)',
//                                             filter: 'grayscale(0%) brightness(120%)',
//                                         },
//                                         '&:hover': {
//                                             boxShadow: '0 0 15px rgba(0, 255, 204, 0.8)',
//                                         }
//                                     }}
//                                 >
//                                     <img
//                                         src={SUB_COMPANIES[i].image}
//                                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                                         style={{
//                                             width: '100%',
//                                             height: '100%',
//                                             objectFit: 'contain',
//                                             boxSizing: 'border-box',
//                                             borderRadius: '10%',
//                                         }}
//                                     />
//                                 </Link>
//                             </Tooltip>
//                         );
//                     })}
//                 </Box>
//             </Box>
//         </HeroContainer>
//     );

//     return (
//         <>
//             <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//                 {/* Fixed Background with Gradients */}
//                 <Box
//                     sx={{
//                         position: 'fixed',
//                         top: 0,
//                         left: 0,
//                         width: '100vw',
//                         height: '100vh',
//                         minHeight: '100vh',
//                         zIndex: -1,
//                         background: '#0A0A0A',
//                         backgroundImage: `
//                             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//                             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//                             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//                             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//                         `,
//                         filter: 'none',
//                         borderRadius: '0',
//                         pointerEvents: 'none',
//                     }}
//                 />

//                 {/* Hero Section Title and Subtitle */}
//                 <Typography
//                     variant="h2"
//                     sx={{
//                         color: HERO_TEXT,
//                         fontWeight: 800,
//                         letterSpacing: 2,
//                         textShadow: '0 2px 12px #000',
//                         zIndex: 3,
//                         textAlign: 'center',
//                         fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//                         mt: { xs: '60px', sm: '80px', md: '80px' },
//                         px: 2,
//                     }}
//                 >
//                     Welcome to Helix Synergy Corp
//                 </Typography>
//                 <Typography
//                     variant="h5"
//                     sx={{
//                         color: '#A7B6C2',
//                         fontWeight: 400,
//                         letterSpacing: 1,
//                         zIndex: 3,
//                         textAlign: 'center',
//                         fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//                         mt: 2,
//                         mb: 8,
//                         px: 2,
//                     }}
//                 >
//                     Innovative Synergy Solutions with a Global Impression.
//                 </Typography>

//                 {/* Main Hero Container for animations - Conditional Render */}
//                 {isMobile ? renderMobileView() : renderDesktopView()}

//                 {/* Scroll To Top Button */}
//                 <Button
//                     ref={scrollToTopButtonRef}
//                     variant="contained"
//                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                     sx={{
//                         position: 'fixed',
//                         bottom: 70,
//                         right: 20,
//                         display: isMobile ? 'none' : 'flex',
//                         zIndex: 100000,
//                         backgroundColor: 'rgba(255, 255, 255, 0.23)',
//                         '&:hover': {
//                             backgroundColor: 'rgba(181, 181, 181, 0.41)',
//                         },
//                         borderRadius: '50%',
//                         width: 30,
//                         height: 30,
//                         minWidth: 0,
//                         padding: 0,
//                         opacity: 0,
//                         pointerEvents: 'none',
//                         transition: 'opacity 0.3s ease-in-out',
//                     }}
//                     className="scroll-to-top-button"
//                 >
//                     <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//                 </Button>
//             </Box>
//         </>
//     );
// };

// export default HomePage;

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import LightRays from "../components/LightRays";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Stack,
  Tooltip,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import logo from "../assets/logo/Octacrest Corporate Pvt Ltd.Only.logo.png"; // Main company logo
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useMediaQuery from "@mui/material/useMediaQuery";

// Sub-company logos (assuming these paths are correct in src/assets/images)
import helixConferencesLogo from "../assets/images/helix-conferences-logo.png";
import codeitLogo from "../assets/images/codeit-logo.png";
import peptidesLogo from "../assets/images/peptides-logo.png";
import helixJournalsLogo from "../assets/images/helix-journals-logo.png";
import helixEscrollLogo from "../assets/images/E-VolveLogo.png";
import digigroLogo from "../assets/images/digigro-logo.png";
import helixAuraLogo from "../assets/images/aura-logo.png";
import helixChannelEightLogo from "../assets/images/channel8-logo.png";
import CardSwap from "../components/CardSwap";
import { Card } from "../components/CardSwap";
import StackComponent from "../components/Stack";

// Ensure ScrollTrigger plugin is registered
gsap.registerPlugin(ScrollTrigger);

const HERO_TEXT = "#F5F8FA";

// Define base sizes and radii
const BASE_HEX_RADIUS = 380; // This defines the maximum spread distance for desktop
const BASE_BLUR_BG_SIZE = 550; // Main logo blur background size
const BASE_LOGO_SIZE = 300; // Main company logo size
const BASE_SUB_COMPANY_LOGO_SIZE = 140; // Base size for peripheral logos

// Constants for scroll thresholds and mobile
const SCROLL_THRESHOLD_SCROLL_TO_TOP_BUTTON = 800; // Pixels scrolled before button appears
const NAVBAR_HEIGHT_DESKTOP = 64; // Approximate height of AppBar on desktop
const NAVBAR_HEIGHT_MOBILE = 56; // Approximate height of AppBar on mobile
const MOBILE_LOGO_SIZE = 120;
const MOBILE_CARD_WIDTH = 300;
const MOBILE_CARD_HEIGHT = 110;
const MOBILE_CARD_HEIGHT_ACTIVE = 250;
const MOBILE_CARD_VERTICAL_GAP = 24;

const SUB_COMPANIES = [
  {
    label: "HELIX CONFERENCES",
    to: "https://helixconferences.com/",
    image: helixConferencesLogo,
    description:
      "Curating World-class Biotech, Pharma & Life Science Events that shape the Future.",
  },
  {
    label: "CODEIT CONSULTING",
    to: "https://codeitconsulting.pro/",
    image: codeitLogo,
    description:
      "Expert IT services for Software Development, QA, DevOps & Cloud solutions.",
  },
  {
    label: "PEPTIDES KNOWLEDGE PARK",
    to: "https://peptides.co.in/",
    image: peptidesLogo,
    description:
      "18+ years of Scientific Excellence in Research, Lab services, Molecular Biology & Education support.",
  },
  {
    label: "CHANNEL8",
    to: "https://channel8network.online/",
    image: helixChannelEightLogo,
    description:
      "Your Go-To YouTube Channel for diverse content including Food, Business, Technology, and Lifestyle. Engaging Videos, Entertainment, and Insights.",
  },
  {
    label: "E-Volve",
    to: "https://evolvemagazine.online/",
    image: helixEscrollLogo,
    description:
      "Digital Abstract Archives from Global Conferences in Science, Pharma & Technology",
  },
  {
    label: "DIGIGRO",
    to: "https://digigro.online/",
    image: digigroLogo,
    description:
      "Specializing in Social Media Marketing, Content Creation, and Digital Advertising. Boost Your Online Presence, Drive Engagement, and Grow Your Brand.",
  },
  {
    label: "AURA BUSINESS CONSULTING",
    to: "https://aurabusinessconsulting.pro/",
    image: helixAuraLogo,
    description:
      "Providing A-to-Z Business Consulting Services, including Strategic Planning, Market Analysis, Financial Advisory, and Operational Excellence. Comprehensive Solutions for Growth.",
  },
  {
    label: "HELIX OPEN ACCESS JOURNALS",
    to: "https://helixjournals.com/",
    image: helixJournalsLogo,
    description:
      "Peer-reviewed International Journals in Science, Technology, Health & Agriculture.",
  },
];

const StyledBlurBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: BASE_BLUR_BG_SIZE,
  height: BASE_BLUR_BG_SIZE,
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.18)",
  zIndex: 1,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 1,
  filter: "blur(10px)",
  [theme.breakpoints.down("md")]: {
    width: BASE_BLUR_BG_SIZE * 0.8,
    height: BASE_BLUR_BG_SIZE * 0.8,
  },
  [theme.breakpoints.down("sm")]: {
    width: BASE_BLUR_BG_SIZE * 0.6,
    height: BASE_BLUR_BG_SIZE * 0.6,
  },
}));

const CenterLogo = styled("img")(({ theme }) => ({
  width: BASE_LOGO_SIZE,
  height: BASE_LOGO_SIZE,
  borderRadius: "20%",
  zIndex: 2,
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 1,
  [theme.breakpoints.down("md")]: {
    width: BASE_LOGO_SIZE * 0.8,
    height: BASE_LOGO_SIZE * 0.8,
  },
  [theme.breakpoints.down("sm")]: {
    width: BASE_LOGO_SIZE * 0.6,
    height: BASE_LOGO_SIZE * 0.6,
  },
}));

const HeroContainer = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  flexDirection: "column",
  overflow: "hidden",
  paddingTop: "0vh",
}));

// NEW: Vertical stack overlay and cards (mobile/tablet)
const VerticalOverlay = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: 420,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  overflow: "hidden",
  paddingTop: 8,
}));

const StackCard = styled(
  React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Box>>(
    (props, ref) => <Box ref={ref} {...props} />
  )
)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: "88%",
  maxWidth: MOBILE_CARD_WIDTH,
  height: MOBILE_CARD_HEIGHT,
  borderRadius: 16,
  backgroundColor: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.25)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  userSelect: "none",
  overflow: "hidden",
}));

const StackedCardImage = styled("img")({
  width: "60%",
  height: "auto",
  objectFit: "contain",
  borderRadius: "10px",
  marginBottom: "8px",
});

const ToggleFab = styled(Button)(({ theme }) => ({
  position: "fixed",
  right: 16,
  bottom: 72,
  minWidth: 0,
  width: 44,
  height: 44,
  borderRadius: "50%",
  zIndex: 2000,
  backgroundColor: "rgba(255,255,255,0.15)",
  color: "#fff",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.25)",
  "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
}));

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px–960px

  // Mobile state and refs (carousel)
  const [isCarouselOpen, setIsCarouselOpen] = useState(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [order, setOrder] = useState<number[]>(SUB_COMPANIES.map((_, i) => i));
  // const activeIndex = order[0];
  const AUTO_ADVANCE_MS = 3500;
  const dragStartYRef = useRef<number | null>(null);

  // Desktop refs
  const heroRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const blurBgRef = useRef<HTMLDivElement | null>(null);
  const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);

  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
  const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
  const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

  // track active index for progress dots
  const [activeIndex, setActiveIndex] = useState(0);

  // Adjusted radius for better visibility of all subcompanies
  const currentRadius = isSmallScreen
    ? BASE_HEX_RADIUS * 0.3
    : isMediumScreen
      ? BASE_HEX_RADIUS * 0.42
      : BASE_HEX_RADIUS * 0.5;

  // Calculate dynamic Navbar height offset for ScrollTrigger
  const dynamicNavbarOffset = isMediumScreen
    ? NAVBAR_HEIGHT_MOBILE
    : NAVBAR_HEIGHT_DESKTOP;

  // Desktop effects
  useEffect(() => {
    if (isMobile) return; // Skip desktop setup on mobile

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    ScrollTrigger.refresh(true);

    const updateDimensions = () => {
      if (heroRef.current) {
        setContainerDimensions({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || !logoRef.current || !blurBgRef.current) {
      return;
    }

    gsap.killTweensOf([logoRef.current, blurBgRef.current]);
    gsap.set([blurBgRef.current, logoRef.current], {
      opacity: 1,
      scale: 1,
      rotate: 0,
    });

    const entryAnimationTl = gsap.timeline({
      paused: false,
      onComplete: () => {
        if (initialLogoRotationTweenRef.current) {
          initialLogoRotationTweenRef.current.play();
        }
        if (logoPulseTweenRef.current) {
          logoPulseTweenRef.current.play();
        }
      },
    });

    entryAnimationTl
      .fromTo(
        [blurBgRef.current, logoRef.current],
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      )
      .fromTo(
        logoRef.current,
        { rotate: 0 },
        {
          rotate: -720,
          duration: 1.5,
          ease: "power3.inOut",
        },
        ">-0.4"
      );

    return () => {
      entryAnimationTl.kill();
    };
  }, [isMobile]);

  const center = {
    x: containerDimensions.width / 2,
    y: containerDimensions.height / 2,
  };

  const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
  const finalPositions = SUB_COMPANIES.map((_, i) => {
    return {
      x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
      y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
    };
  });

  useEffect(() => {
    if (isMobile) return; // Skip desktop animations on mobile

    // Kill old triggers/tweens before creating new ones
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    if (initialLogoRotationTweenRef.current) {
      initialLogoRotationTweenRef.current.kill();
      initialLogoRotationTweenRef.current = null;
    }
    if (finalLogoRotationTweenRef.current) {
      finalLogoRotationTweenRef.current.kill();
      finalLogoRotationTweenRef.current = null;
    }
    if (logoPulseTweenRef.current) {
      logoPulseTweenRef.current.kill();
      logoPulseTweenRef.current = null;
    }

    if (
      !heroRef.current ||
      !logoRef.current ||
      !blurBgRef.current ||
      !peripheralLinksContainerRef.current ||
      containerDimensions.width === 0 ||
      containerDimensions.height === 0
    ) {
      return;
    }

    // Continuous rotation + pulse tweens
    initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
      rotate: "+=360",
      duration: 15,
      ease: "none",
      repeat: -1,
      paused: true,
    });

    logoPulseTweenRef.current = gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 0.2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      delay: 0.5,
      repeatDelay: 2.8,
      paused: true,
    });

    const subCompanyElements = gsap.utils.toArray(
      peripheralLinksContainerRef.current.children
    ) as HTMLElement[];

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: `top top+=${dynamicNavbarOffset}`,
        end: "+=2500",
        scrub: 1,
        pin: true,
        onEnter: () => {
          if (initialLogoRotationTweenRef.current)
            initialLogoRotationTweenRef.current.pause();
          if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
        },
        onLeave: () => {
          if (finalLogoRotationTweenRef.current)
            finalLogoRotationTweenRef.current.play();
          if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
        },
        onEnterBack: () => {
          if (finalLogoRotationTweenRef.current)
            finalLogoRotationTweenRef.current.pause();
          if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
        },
        onLeaveBack: () => {
          if (initialLogoRotationTweenRef.current)
            initialLogoRotationTweenRef.current.play();
          if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
        },
      },
    });

    // Keep logo visible (no opacity 0)
    tl.to(
      logoRef.current,
      {
        rotate: 0,
        opacity: 1, // 👈 ensure always visible
        duration: 0.8,
        ease: "power2.out",
      },
      0
    ).to(
      blurBgRef.current,
      {
        opacity: 1, // 👈 keep blur visible
        filter: "blur(5px)", // 👈 soften instead of removing
        duration: 0.8,
        ease: "power2.out",
      },
      0
    );

    // Animate sub-companies
    subCompanyElements.forEach((el, i) => {
      const finalPos = finalPositions[i];

      const currentSubCompanyLogoSize = isSmallScreen
        ? BASE_SUB_COMPANY_LOGO_SIZE * 0.45
        : isMediumScreen
          ? BASE_SUB_COMPANY_LOGO_SIZE * 0.75
          : BASE_SUB_COMPANY_LOGO_SIZE * 0.9;
      const offset = currentSubCompanyLogoSize / 2;

      gsap.set(el as HTMLElement, {
        opacity: 1,
        scale: 0,
        x: center.x - finalPos.x,
        y: center.y - finalPos.y,
        transformOrigin: "center center",
      });

      tl.to(
        el,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          filter: "drop-shadow(0px 0px 8px rgba(0,255,204,0.7))",
        },
        "<0.2"
      );

      tl.to(
        el,
        {
          filter: "none",
          duration: 0.6,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(el, { opacity: 1, scale: 1 }); // 👈 ensure it stays visible
          },
        },
        ">0.2"
      );
    });

    // Final rotation state
    finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
      rotate: "+=360",
      duration: 15,
      ease: "none",
      repeat: -1,
      paused: true,
    });

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      if (initialLogoRotationTweenRef.current) {
        initialLogoRotationTweenRef.current.kill();
      }
      if (finalLogoRotationTweenRef.current) {
        finalLogoRotationTweenRef.current.kill();
      }
      if (logoPulseTweenRef.current) {
        logoPulseTweenRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // 👇 reset states so nothing is hidden after cleanup
      if (logoRef.current)
        gsap.set(logoRef.current, { opacity: 1, scale: 1, rotate: 0 });
      if (blurBgRef.current)
        gsap.set(blurBgRef.current, { opacity: 1, scale: 1 });
      subCompanyElements.forEach((el) =>
        gsap.set(el, { opacity: 1, scale: 1 })
      );
    };
  }, [
    currentRadius,
    containerDimensions,
    dynamicNavbarOffset,
    isSmallScreen,
    isMediumScreen,
    isMobile,
  ]);

  // Layout stack positions with GSAP
  const layoutStack = (instant = false) => {
    const baseTop = 12;
    const previewCount = 4; // how many inactive cards to preview
    const hiddenY = baseTop + (previewCount + 2) * MOBILE_CARD_VERTICAL_GAP;
    order.forEach((id, i) => {
      const el = cardRefs.current[id];
      if (!el) return;
      if (i === 0) {
        gsap.to(el, {
          y: baseTop,
          scale: 1,
          zIndex: 1000,
          opacity: 1,
          height: MOBILE_CARD_HEIGHT_ACTIVE,
          duration: instant ? 0 : 0.5,
          ease: "power2.out",
          pointerEvents: "auto" as any,
        });
      } else if (i <= previewCount) {
        const y = baseTop + i * MOBILE_CARD_VERTICAL_GAP;
        const scale = 1 - i * 0.04;
        const opacity = Math.max(0.2, 0.55 - i * 0.08);
        gsap.to(el, {
          y,
          scale,
          zIndex: 1000 - i,
          opacity,
          height: MOBILE_CARD_HEIGHT,
          duration: instant ? 0 : 0.5,
          ease: "power2.out",
          pointerEvents: "none" as any,
        });
      } else {
        gsap.to(el, {
          y: hiddenY,
          scale: 0.8,
          zIndex: 1000 - i,
          opacity: 0,
          height: MOBILE_CARD_HEIGHT,
          duration: instant ? 0 : 0.5,
          ease: "power2.out",
          pointerEvents: "none" as any,
        });
      }
    });
  };

  // Handle stack layout for both mobile and tablet
  useEffect(() => {
    if ((!isMobile && !isTablet) || !isCarouselOpen) return;
    layoutStack(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, isTablet, isCarouselOpen]);

  useEffect(() => {
    if ((!isMobile && !isTablet) || !isCarouselOpen) return;
    layoutStack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, isMobile, isTablet, isCarouselOpen]);

  const nextCard = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  };
  const prevCard = () => {
    setOrder((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, prev.length - 1)];
    });
  };

  const handleSwipeStart = (clientY: number) => {
    dragStartYRef.current = clientY;
  };
  const handleSwipeEnd = (clientY: number) => {
    if (dragStartYRef.current === null) return;
    const dy = clientY - dragStartYRef.current;
    dragStartYRef.current = null;
    const threshold = 40;
    if (dy < -threshold) nextCard();
    else if (dy > threshold) prevCard();
  };

  // Auto-advance active card
  useEffect(() => {
    if (!isMobile || !isCarouselOpen) return;
    const t = window.setTimeout(() => nextCard(), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isMobile, isCarouselOpen]);

  const renderMobileView = () => {
    const images = SUB_COMPANIES.map((company, idx) => ({
      id: idx,
      img: company.image,
      label: company.label,
      description: company.description,
      to: company.to,
    }));

    // When a card is sent to the back
    const handleSendToBack = (id: number) => {
      nextCard(); // Move the top card to back visually
      setActiveIndex((prev) => (prev + 1) % images.length); // Update progress dots
    };

    return (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          px: 2,
        }}
      >
        <StackComponent
          randomRotation={false}
          sensitivity={100}
          sendToBackOnClick={true}
          cardDimensions={{ width: 300, height: 420 }}
          cardsData={images.map((item) => ({
            id: item.id,
            content: (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  background:
                    "linear-gradient(160deg, rgba(133, 116, 227, 0.23), rgba(44, 44, 109, 0.65))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  textAlign: "center",
                  p: 1,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.label}
                  sx={{
                    width: 150,
                    height: 150,
                    objectFit: "contain",
                    borderRadius: 2,
                    mb: 2,
                    filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: "#fff", mb: 1 }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(0, 0, 0, 0.8)", mb: 2, px: 1 }}
                >
                  {item.description}
                </Typography>
                <Button
                  component={RouterLink}
                  to={item.to}
                  target={item.to.startsWith("http") ? "_blank" : "_self"}
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    borderRadius: 10,
                    px: 3,
                    bgcolor: "rgba(249, 249, 249, 0.88)",
                    color: "#000000ff",
                    mt: "auto",
                    "&:hover": { bgcolor: "rgba(212, 246, 250, 0.73)" },
                  }}
                >
                  Visit
                </Button>
              </Box>
            ),
          }))}
          // onSendToBack={handleSendToBack} // ✅ pass callback
          onSendToBack={(id) =>
            setActiveIndex((prev) => (prev + 1) % images.length)
          }
        />

        {/* Progress Dots */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {images.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor:
                  idx === activeIndex ? "#00ffcc" : "rgba(255,255,255,0.3)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Stack>
      </Box>
    );
  };

  const renderTabletView = (activeIndex: number) => {

    const images = SUB_COMPANIES.map((company, idx) => ({
      id: idx,
      img: company.image,
      label: company.label,
      description: company.description,
      to: company.to,
    }));

    // Placeholder for a function that would update the activeIndex state
    // in the parent component where renderTabletView is called.
    const handleActiveCardChange = (newActiveIndex: number) => {
      // In your actual code, this function would likely be a setter from a useState hook:
      // setactiveIndex(newActiveIndex);
      console.log("Active card changed to index:", newActiveIndex);
    };

    return (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "780px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          px: 3,
        }}
      >
        <StackComponent
          randomRotation={false}
          sensitivity={120}
          sendToBackOnClick={true}
          cardDimensions={{ width: 400, height: 540 }} // larger tablet cards
          cardsData={images.map((item) => ({
            id: item.id,
            content: (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 6,
                  background:
                    "linear-gradient(160deg, rgba(133, 116, 227, 0.23), rgba(44, 44, 109, 0.65))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(14px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  textAlign: "center",
                  p: 3,
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.6), 0 0 20px rgba(0,255,204,0.3), 0 0 40px rgba(128,0,255,0.2)", // glow
                }}
              >
                {/* Logo */}
                <Box
                  component="img"
                  src={item.img}
                  alt={item.label}
                  sx={{
                    width: 200,
                    height: 200,
                    objectFit: "contain",
                    borderRadius: 4,
                    mb: 2.5,
                    filter:
                      "drop-shadow(0 0 10px rgba(0,255,204,0.6)) drop-shadow(0 0 16px rgba(128,0,255,0.4))",
                  }}
                />

                {/* Label */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    mb: 1.5,
                    textShadow: "0 0 10px rgba(0,255,204,0.4)",
                  }}
                >
                  {item.label}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(0, 0, 0, 0.85)",
                    mb: 3,
                    px: 2,
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </Typography>

                {/* Visit Button */}
                <Button
                  component={RouterLink}
                  to={item.to}
                  target={item.to.startsWith("http") ? "_blank" : "_self"}
                  variant="contained"
                  size="medium"
                  sx={{
                    textTransform: "none",
                    borderRadius: 12,
                    px: 4,
                    py: 1,
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    bgcolor: "rgba(0,255,204,0.3)",
                    color: "#fff",
                    mt: "auto",
                    transition: "all 0.3s ease",
                    boxShadow:
                      "0 0 12px rgba(0,255,204,0.4), 0 0 20px rgba(128,0,255,0.3)",
                    "&:hover": {
                      bgcolor: "rgba(0,255,204,0.5)",
                      boxShadow:
                        "0 0 18px rgba(0,255,204,0.7), 0 0 30px rgba(128,0,255,0.6)",
                    },
                  }}
                >
                  Visit Here
                </Button>
              </Box>
            ),
          }))}
          // *** THE KEY ADDITION TO MAKE THE DOTS WORK ***
          onSendToBack={(id) =>
            setActiveIndex((prev) => (prev + 1) % images.length)
          }
        // Assuming StackComponent passes the new active index to this function
        // when a card is clicked or an animation completes.
        />

        {/* Progress Dots */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {images.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor:
                  idx === activeIndex ? "#00ffcc" : "rgba(255,255,255,0.3)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Stack>
      </Box>
    );
  };

  const renderDesktopView = () => (
    <HeroContainer
      ref={heroRef}
      sx={{
        height: "auto",
        minHeight: {
          xs: `calc(100vh - ${NAVBAR_HEIGHT_MOBILE}px)`,
          md: `calc(100vh - ${NAVBAR_HEIGHT_DESKTOP}px)`,
        },
        width: "100%",
        maxWidth: { xs: "100%", md: 900, lg: 1200 },
        margin: "0 auto",
        position: "relative",
        overflow: "visible",
        display: "block",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
        pt: { xs: 6, md: 0 },
        pb: { xs: 10, md: 6 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "400px",
          position: "relative",
          maxWidth: "100%",
        }}
      >
        <StyledBlurBackground ref={blurBgRef} />
        <CenterLogo ref={logoRef} src={logo} alt="Octacrest Corporate Logo" />

        {/* Peripheral Links Container */}

        <Box
          ref={peripheralLinksContainerRef}
          sx={{
            position: "relative",
            top: -28, // ✅ shift the whole group upward
          }}
        >
          {finalPositions.map((pos, i) => {
            const currentSubCompanyLogoSize = isSmallScreen
              ? BASE_SUB_COMPANY_LOGO_SIZE * 0.45
              : isMediumScreen
                ? BASE_SUB_COMPANY_LOGO_SIZE * 0.75
                : BASE_SUB_COMPANY_LOGO_SIZE * 0.9;
            const offset = currentSubCompanyLogoSize / 2;

            return (
              <Tooltip
                title={SUB_COMPANIES[i].description}
                placement={isSmallScreen ? "bottom" : "top"}
                key={i}
                componentsProps={{
                  tooltip: {
                    sx: {
                      borderRadius: "10px",
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      padding: "8px 12px",
                      maxWidth: "250px",
                    },
                  },
                }}
              >
                <Link
                  component={RouterLink}
                  to={SUB_COMPANIES[i].to}
                  target={
                    SUB_COMPANIES[i].to.startsWith("http") ? "_blank" : "_self"
                  }
                  aria-label={SUB_COMPANIES[i].label + " website link"}
                  sx={{
                    position: "absolute",
                    width: currentSubCompanyLogoSize,
                    height: currentSubCompanyLogoSize,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    zIndex: 2,
                    left: pos.x - offset,
                    top: pos.y - offset,
                    textDecoration: "none",
                    background: "white",
                    borderRadius: "50%",

                    objectFit: "cover",
                    padding: "8px",
                    "& img": {
                      transition:
                        "transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out",
                      filter: "grayscale(0%) brightness(100%)",
                      boxShadow: "none",
                      borderRadius: "50%",
                    },
                    "&:hover img": {
                      transform: "scale(1.1) translateY(-5px)",
                      filter: "grayscale(0%) brightness(120%)",
                    },
                    "&:hover": {
                      boxShadow: "0 0 15px rgba(0, 255, 204, 0.8)",
                    },
                  }}
                >
                  <img
                    src={SUB_COMPANIES[i].image}
                    alt={SUB_COMPANIES[i].label + " Logo"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </HeroContainer>
  );

  return (
      <>
        <SEO title="Octacrest Corporate | Innovative Synergy Solutions" description="Octacrest Corporate unites global expertise across diverse domains including IT Consulting, Peptides Research, and Global Conferences." url="https://octacrestcorporate.com/" />
        <Box sx={{ position: "relative", zIndex: 0, overflowX: "hidden" }}>
        {/* Desktop LightRays background */}
        {!isMobile && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffe6"
              raysSpeed={1.2}
              lightSpread={1.1}
              rayLength={1.7}
              fadeDistance={1.0}
              saturation={1.0}
              followMouse={true}
              mouseInfluence={0.12}
              noiseAmount={0.08}
              distortion={0.08}
              className="prevent-scrollbar"
            />
          </Box>
        )}

        {/* Hero Section Title and Subtitle */}
        <Typography
          variant="h2"
          sx={{
            color: HERO_TEXT,
            fontWeight: 800,
            letterSpacing: 2,
            textShadow: "0 2px 12px #000",
            zIndex: 3,
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" },
            mt: { xs: "60px", sm: "80px", md: "80px" },
            px: 2,
          }}
        >
          OCTACREST CORPORATE.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: HERO_TEXT,
            fontWeight: 300,
            letterSpacing: 2,
            textShadow: "0 2px 12px #000",
            zIndex: 3,
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            mt: 2,
            mb: { xs: 5, md: 0 },
            px: 2,
          }}
        >
          Innovative Synergy Solutions with a Global Impression.
        </Typography>

        {isMobile
          ? renderMobileView()
          : isTablet
            ? renderTabletView(activeIndex)
            : renderDesktopView()}

        {/* Scroll To Top Button removed as requested */}
      </Box>
    </>
  );
};

export default HomePage;
