// src/pages/ContactPage.tsx

import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { Box, Typography, TextField, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import 'leaflet/dist/leaflet.css'; // Keep if you use Leaflet elsewhere, otherwise can be removed
import L from 'leaflet'; // Keep if you use Leaflet elsewhere, otherwise can be removed
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorldMap from '../components/Map/map.js'; // IMPORTANT: We are explicitly importing .js as per your request

// Fix default marker icon issue in Leaflet (if any Leaflet components are still used directly)
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
gsap.registerPlugin(ScrollTrigger);

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
// Only assign if L.Marker is available (i.e., Leaflet is used)
if (L.Marker) {
  L.Marker.prototype.options.icon = DefaultIcon;
}


const ContactPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        formData
      );

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
      setSuccess(`Error: ${errorMessage}`);
    }

    setLoading(false);
  };
  const theme = useTheme();
  // Refs for GSAP animations and element measurements
  const pageContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const mapPaperRef = useRef<HTMLDivElement | null>(null); // The absolute background map container
  const mapInnerContainerRef = useRef<HTMLDivElement | null>(null); // Direct parent for WorldMap for dimensions
  const formPaperRef = useRef<HTMLDivElement | null>(null);
  const indiaAddressRef = useRef<HTMLDivElement | null>(null);
  const usaAddressRef = useRef<HTMLDivElement | null>(null);

  // State for tooltip visibility based on country hover
  const [showIndiaTooltip, setShowIndiaTooltip] = useState(false);
  const [showUSATooltip, setShowUSATooltip] = useState(false);
  // State to store dimensions of the map container for the WorldMap component
  const [mapContainerWidth, setMapContainerWidth] = useState<number>(0);
  const [mapContainerHeight, setMapContainerHeight] = useState<number>(0);
  // State to store the actual pixel height of the absolute background map Paper
  const [backgroundMapHeight, setBackgroundMapHeight] = useState<number>(0);

  // Media queries to get the current map height based on screen size (matching CSS values)
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const officeLocations = {
    'india': {
      name: 'Octacrest Corporate (India)',
      address: 'Mahaveer Radiance Near Madhapur Metro station, CBI Colony, Hyderabad, Telangana,500081',
      coords: { x: 0.76, y: 0.62 } // Approximate percentage positions for India on the map
    },
    'usa': {
      name: 'Octacrest Corporate (Canada)',
      address: '1200 West 73rd Avenue #1100, Vancouver,  British Columbia‎, Canada',
      coords: { x: 0.28, y: 0.35 } // Approximate percentage positions for USA on the map
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount

    // Observer to get the real-time dimensions of the map container
    const resizeObserver = new ResizeObserver(entries => {
      if (mapInnerContainerRef.current && entries[0]) {
        setMapContainerWidth(entries[0].contentRect.width);
        setMapContainerHeight(entries[0].contentRect.height);
      }
      if (mapPaperRef.current) {
        setBackgroundMapHeight(mapPaperRef.current.clientHeight);
      }
    });

    if (mapInnerContainerRef.current) {
      resizeObserver.observe(mapInnerContainerRef.current);
    }
    if (mapPaperRef.current) {
      resizeObserver.observe(mapPaperRef.current);
    }

    // GSAP Animations setup
    // Ensure all critical elements are available before setting up animations
    if (!titleRef.current || !subtitleRef.current || !formPaperRef.current || !indiaAddressRef.current || !usaAddressRef.current) {
      // Small delay to ensure refs are attached on initial render
      const animationTimeout = setTimeout(() => {
        // This is a simple retry mechanism. In a complex app,
        // you might want a more robust "initialized" state.
      }, 50);

      return () => clearTimeout(animationTimeout);
    }


    // Set initial opacity and position for GSAP animation.
    gsap.set([
      titleRef.current,
      subtitleRef.current,
      indiaAddressRef.current,
      usaAddressRef.current,
      formPaperRef.current
    ], {
      opacity: 0,
      y: 20,
    });

    // Animate elements as they appear on screen using a timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      delay: 0.2 // Small overall delay for page load
    });

    tl.to(titleRef.current, { opacity: 1, y: 0 }, 0)
      .to(subtitleRef.current, { opacity: 1, y: 0 }, 0.1)
      .to([indiaAddressRef.current, usaAddressRef.current], { opacity: 1, y: 0, stagger: 0.2 }, 0.3);

    // Use ScrollTrigger for the form animation if it might be below the initial view
    ScrollTrigger.create({
      trigger: formPaperRef.current,
      start: "top 85%", // When the top of the form enters 85% of the viewport height
      end: "bottom top",
      toggleActions: "play none none none", // Play animation once when triggered
      animation: gsap.to(formPaperRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
    });

    // Cleanup function for useEffect
    return () => {
      resizeObserver.disconnect(); // Stop observing on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
      gsap.globalTimeline.clear(); // Clear global GSAP timeline
    };
  }, [backgroundMapHeight, mapContainerWidth, mapContainerHeight]); // Rerun effect if map dimensions change

  // Callback for WorldMap to update tooltip visibility
  const handleCountryHover = (country: 'india' | 'usa' | null) => {
    setShowIndiaTooltip(country === 'india');
    setShowUSATooltip(country === 'usa');
  };

  // Determine the map height in vh for the spacer
  // This is no longer directly used for map height, but helps position content relative to where the map effectively 'ends' for a scrollable view.
  const getMapVhHeight = () => {
    if (isXs) return 100; // Map will fill 100% of viewport height
    if (isSm) return 100;
    if (isMd) return 100;
    return 100; // Default for larger screens
  };

  const mapVh = getMapVhHeight();

  return (
    <Box sx={{ position: 'relative', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title="Contact Us | Octacrest Corporate" description="Get in touch with Octacrest Corporate for any inquiries about our diverse services." url="https://octacrestcorporate.com/contact" />
      {/* Fixed background with vibrant gradients - Z-index -2 (lowest) */}
      {/* This element remains, adding a subtle animated gradient effect behind the map */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          minHeight: '100vh',
          zIndex: -2,
          background: '#0A0A0A',
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
          `,
          filter: 'none',
          borderRadius: '0',
          pointerEvents: 'none', // Allows clicks to pass through
          backgroundSize: '200% 200%',
          animation: 'backgroundPan 60s linear infinite alternate',
          '@keyframes backgroundPan': {
            '0%': { backgroundPosition: '0% 0%' },
            '100%': { backgroundPosition: '100% 100%' },
          },
        }}
      />

      {/* World Map as an absolute background element - Z-index -1 */}
      {/* Removed background and backdropFilter, set height to 100vh, opacity to 1 */}
      <Paper
        elevation={0} // No shadow for a flat background look
        ref={mapPaperRef}
        sx={{
          position: 'fixed', // Changed to fixed to always fill viewport
          top: 0,
          left: 0,
          width: '100vw', // Fill entire viewport width
          height: '100vh', // Fill entire viewport height
          background: 'transparent', // NO LAYER ON TOP - transparent background
          backdropFilter: 'none', // NO LAYER ON TOP - no blur/saturate effect
          WebkitBackdropFilter: 'none',
          zIndex: -1, // Sits between gradient background and main content
          overflow: 'hidden', // Keep overflow hidden for map content
          borderRadius: '0',
          pointerEvents: 'auto', // Important: Allows hover events on the map itself
        }}
      >
        {/* Inner container for the WorldMap component */}
        <Box
          ref={mapInnerContainerRef}
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            overflow: 'hidden',
            position: 'relative',
            opacity: 1, // MAP SHOULD BE FULLY VISIBLE - opacity set to 1
          }}
        >
          {/*
            //@ts-ignore
            IMPORTANT: The line above is a TypeScript directive.
            It tells TypeScript to ignore the next line for type checking.
            This is necessary because 'map.js' is a plain JavaScript file
            and doesn't provide type information for its props (width, height, onCountryHover)
            to 'ContactPage.tsx'. This is the only way to proceed without renaming map.js to map.tsx.
            Be aware that this sacrifices type safety for the WorldMap component.
          */}
          <WorldMap
            width={mapContainerWidth > 0 ? mapContainerWidth : 1000} // Pass dynamic width
            height={mapContainerHeight > 0 ? mapContainerHeight : 500} // Pass dynamic height
            onCountryHover={handleCountryHover}
          />
        </Box>
        {/* Tooltips - positioned absolutely relative to mapPaperRef */}
        {showIndiaTooltip && (
          <Paper
            sx={{
              position: 'absolute',
              // Use dynamic backgroundMapHeight for positioning
              top: `${backgroundMapHeight * officeLocations.india.coords.y}px`,
              left: `${mapContainerWidth * officeLocations.india.coords.x}px`,
              transform: 'translate(-50%, -100%)', // Adjust to position tooltip above the point
              p: 1.5,
              background: 'rgba(35, 43, 51, 0.9)',
              color: '#F5F8FA',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              pointerEvents: 'none', // Tooltip itself should not block interaction
              zIndex: 10, // Ensure tooltip is above other elements
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              minWidth: '200px',
              opacity: 1,
              visibility: 'visible',
              transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
            }}
          >
            <Typography variant="body2" sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
              <strong>{officeLocations.india.name},</strong><br />
              {officeLocations.india.address}
            </Typography>
          </Paper>
        )}
        {showUSATooltip && (
          <Paper
            sx={{
              position: 'absolute',
              // Use dynamic backgroundMapHeight for positioning
              top: `${backgroundMapHeight * officeLocations.usa.coords.y}px`,
              left: `${mapContainerWidth * officeLocations.usa.coords.x}px`,
              transform: 'translate(-50%, -100%)', // Adjust to position tooltip above the point
              p: 1.5,
              background: 'rgba(35, 43, 51, 0.9)',
              color: '#F5F8FA',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              pointerEvents: 'none',
              zIndex: 10,
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              minWidth: '200px',
              opacity: 1,
              visibility: 'visible',
              transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
            }}
          >
            <Typography variant="body2" sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
              <strong>{officeLocations.usa.name},</strong><br />
              {officeLocations.usa.address}
            </Typography>
          </Paper>
        )}
      </Paper>

      {/* Spacer Box: Now used to ensure content starts below the fixed map height */}
      <Box
        sx={{
          height: `100vh`, // Spacer pushes content down by 100vh, ensuring it starts below the fixed map
          pointerEvents: 'none',
          flexShrink: 0,
        }}
      />

      {/* Main Contact Page Content Container - Sits on top of the background map for the overlap */}
      <Box
        ref={pageContainerRef}
        sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto', // Center the content container
          color: '#F5F8FA',
          py: { xs: 4, sm: 6, md: 8 }, // Vertical padding around content
          px: { xs: 2, sm: 0 }, // Horizontal padding
          position: 'relative', // Establishes new stacking context for children
          zIndex: 1, // Ensures content is above the background map
          flexGrow: 1, // Allows this box to take up remaining vertical space
          // Add a background to this content box to ensure readability over the map
          background: 'rgba(10, 10, 10, 0.7)', // Darker translucent background for content
          backdropFilter: 'blur(15px) saturate(150%)',
          WebkitBackdropFilter: 'blur(15px) saturate(150%)',
          borderRadius: '20px',
          p: { xs: 2, sm: 4, md: 6 },
          mt: -10, // Overlap with the spacer to create the 'floating' effect
          boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
        }}
      >
        {/* Page Title */}
        <Typography
          ref={titleRef}
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: '#F5F8FA',
            textAlign: 'start',
            // No background needed here if the parent Box has one, but can keep for extra emphasis
            // background: 'rgba(35, 43, 51, 0.6)',
            // backdropFilter: 'blur(8px)',
            // WebkitBackdropFilter: 'blur(8px)',
            p: { xs: 1.5, sm: 2 },
            borderRadius: '10px',
            display: 'inline-block',
          }}
        >
          Contact Us
        </Typography>
        {/* Page Subtitle */}
        {/* <Typography
          ref={subtitleRef}
          variant="h6"
          sx={{
            mb: 4,
            color: '#A7B6C2',
            textAlign: 'start',
            // No background needed here if the parent Box has one
            // background: 'rgba(35, 43, 51, 0.6)',
            // backdropFilter: 'blur(8px)',
            // WebkitBackdropFilter: 'blur(8px)',
            p: { xs: 1.5, sm: 2 },
            borderRadius: '10px',
            display: 'inline-block',
          }}
        >
          Get in touch or find us on the map below.
        </Typography> */}

        {/* Dedicated Contact Details Section - Two columns below the subtitle */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 3, sm: 4 },
            mb: 4,
            width: '100%',
          }}
        >


          {/* USA Address Box */}
          <Paper
            elevation={6}
            ref={usaAddressRef}
            sx={{
              background: 'rgba(35, 43, 51, 0.8)', // More opaque for readability
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(180%)',
              p: { xs: 3, sm: 4 },
              borderRadius: '20px',
              border: '1.5px solid rgba(72, 175, 240, 0.18)',
              textAlign: 'start',
              boxShadow: '0px 8px 32px rgba(72,175,240,0.10)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
              flex: 1,
              maxWidth: { xs: '100%', sm: 'calc(50% - 16px)' },
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 12px 24px rgba(72, 175, 240, 0.2), 0px 0px 15px rgba(162, 89, 255, 0.2)',
              },
            }}
          >
            <Box sx={{
              width: '100%',
              height: 5,
              background: 'linear-gradient(90deg, #A259FF 0%, #48AFF0 100%)', // Different gradient for variety
              borderRadius: 3,
              mb: 2,
            }} />
            <Typography
              variant="h5"
              sx={{
                mb: { xs: 2.5, sm: 3 },
                fontWeight: 700,
                color: '#F5F8FA',
                letterSpacing: '0.07em',
                textShadow: '0 2px 8px rgba(72,175,240,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 1.5,
                fontSize: { xs: '1.4rem', sm: '1.5rem', md: '1.5rem' },
              }}
            >
              <LocationOnIcon sx={{ color: '#A259FF', fontSize: 32, verticalAlign: 'middle' }} />
              Canada Presence
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: '#A259FF', fontSize: 22 }} />
                <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  <a href="tel:+17036516096" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>+1-703-651-6096</a>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: '#A259FF', fontSize: 22 }} />
                <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  <a href="mailto:hello@octacrestcorporate.com" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}
                    onMouseOver={e => (e.currentTarget.style.color = '#48AFF0')}
                    onMouseOut={e => (e.currentTarget.style.color = '#A259FF')}
                  >
                    hello@octacrestcorporate.com
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1 }}>
                <LocationOnIcon sx={{ color: '#A259FF', fontSize: 32, mt: '2px' }} />
                <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500, textAlign: 'left', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  <strong> {officeLocations.usa.name.replace(' (USA)', '')}, </strong><br />
                  {officeLocations.usa.address}
                </Typography>
              </Box>
            </Box>
          </Paper>
          {/* India Address Box */}
          <Paper
            elevation={6}
            ref={indiaAddressRef}
            sx={{
              background: 'rgba(35, 43, 51, 0.8)', // More opaque for readability
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(180%)',
              p: { xs: 3, sm: 4 },
              borderRadius: '20px',
              border: '1.5px solid rgba(72, 175, 240, 0.18)',
              textAlign: 'start',
              boxShadow: '0px 8px 32px rgba(72,175,240,0.10)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
              flex: 1,
              maxWidth: { xs: '100%', sm: 'calc(50% - 16px)' },
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 12px 24px rgba(72, 175, 240, 0.2), 0px 0px 15px rgba(162, 89, 255, 0.2)',
              },
            }}
          >
            <Box sx={{
              width: '100%',
              height: 5,
              background: 'linear-gradient(90deg, #48AFF0 0%, #A259FF 100%)',
              borderRadius: 3,
              mb: 2,
            }} />
            <Typography
              variant="h5"
              sx={{
                mb: { xs: 2.5, sm: 3 },
                fontWeight: 700,
                color: '#F5F8FA',
                letterSpacing: '0.07em',
                textShadow: '0 2px 8px rgba(72,175,240,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 1.5,
                fontSize: { xs: '1.4rem', sm: '1.5rem', md: '1.5rem' },
              }}
            >
              <LocationOnIcon sx={{ color: '#48AFF0', fontSize: 32, verticalAlign: 'middle' }} />
              India Presence
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: '#48AFF0', fontSize: 22 }} />
                <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  <a href="tel:+917075782798" style={{ color: '#48AFF0', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#A259FF')}
                    onMouseOut={e => (e.currentTarget.style.color = '#48AFF0')}
                  >
                    +91 7075-782-798
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: '#48AFF0', fontSize: 22 }} />
                <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  <a href="tel:+917997040959" style={{ color: '#48AFF0', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#A259FF')}
                    onMouseOut={e => (e.currentTarget.style.color = '#48AFF0')}
                  >
                    +91 7997-040-959
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: '#48AFF0', fontSize: 22 }} />
                <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  <a href="mailto:hello@octacrestcorporate.com" style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}
                    onMouseOver={e => (e.currentTarget.style.color = '#A259FF')}
                    onMouseOut={e => (e.currentTarget.style.color = '#48AFF0')}
                  >
                    hello@octacrestcorporate.com
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1 }}>
                <LocationOnIcon sx={{ color: '#48AFF0', fontSize: 32, mt: '2px' }} />
                <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500, textAlign: 'left', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  <strong> {officeLocations.india.name.replace(' (India)', '')}, </strong><br />
                  {officeLocations.india.address}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Contact Form Section */}
        <Paper
          elevation={2}
          ref={formPaperRef}
          sx={{
            background: "rgba(35, 43, 51, 0.9)",
            backdropFilter: "blur(10px) saturate(180%)",
            WebkitBackdropFilter: "blur(10px) saturate(180%)",
            p: { xs: 2, sm: 3 },
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
            width: "100%",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow:
                "0px 12px 24px rgba(0, 255, 255, 0.2), 0px 0 15px rgba(255, 255, 0, 0.2)",
            },
            mb: 4,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "#F5F8FA" }}>
            Send us a Message
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, sm: 2 } }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="filled"
              fullWidth
              InputProps={{ style: { color: "#F5F8FA" } }}
              InputLabelProps={{ style: { color: "#A7B6C2" } }}
              sx={{
                background: "transparent",
                borderRadius: "10px",
                "& .MuiFilledInput-root": {
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  "&:before": { borderBottom: "none" },
                  "&:after": { borderBottom: "none" },
                  "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="filled"
              fullWidth
              InputProps={{ style: { color: "#F5F8FA" } }}
              InputLabelProps={{ style: { color: "#A7B6C2" } }}
              sx={{
                background: "transparent",
                borderRadius: "10px",
                "& .MuiFilledInput-root": {
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  "&:before": { borderBottom: "none" },
                  "&:after": { borderBottom: "none" },
                  "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
                },
              }}
            />
            <TextField
              label="Message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="filled"
              multiline
              rows={4}
              fullWidth
              InputProps={{ style: { color: "#F5F8FA" } }}
              InputLabelProps={{ style: { color: "#A7B6C2" } }}
              sx={{
                background: "transparent",
                borderRadius: "10px",
                "& .MuiFilledInput-root": {
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  "&:before": { borderBottom: "none" },
                  "&:after": { borderBottom: "none" },
                  "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{
                alignSelf: "flex-end",
                mt: 1,
                background: "transparent",
                border: "2px solid #48AFF0",
                color: "#F5F8FA",
                boxShadow: "none",
                borderRadius: "10px",
                padding: "10px 30px",
                textTransform: "uppercase",
                transition: "0.3s ease-in-out",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.08)",
                  borderColor: "#A259FF",
                  boxShadow: "0 0 15px rgba(72, 175, 240, 0.4)",
                },
              }}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
            {success && (
              <Typography sx={{ mt: 1, color: success.startsWith("Error") ? "red" : "lightgreen" }}>
                {success}
              </Typography>
            )}
          </Box>
        </Paper>


      </Box>
    </Box>
  );
};

export default ContactPage;