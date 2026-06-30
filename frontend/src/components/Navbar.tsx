


// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// // import HexagonIcon from '@mui/icons-material/Hexagon'; // Not used, can be removed if not needed
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo/Octacrest Corporate Pvt Ltd.Only.logo.png';

// // New imports for responsiveness
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const LogoImg = styled('img')({
//   height: 40,
//   width: 'auto',
//   marginRight: 16,
//   borderRadius: '8px',
//   background: 'rgba(255, 255, 255, 0)',
//   boxShadow: '0 2px 8px rgba(0, 0, 0, 0)',
// });

// const NavButton = styled(Button)(({ theme }) => ({
//   color: '#F5F8FA',
//   fontWeight: 500,
//   fontSize: '1rem',
//   borderRadius: 6,
//   marginLeft: theme.spacing(2),
//   textTransform: 'none',
//   // Keep the gradient for desktop buttons
//   backgroundImage: 'linear-gradient(to left,rgba(0, 255, 204, 0.37) 0%,rgba(0, 0, 0, 0.24) 51%,rgba(255, 255, 255, 0.4) 100%)',
//   backgroundSize: '200% auto',
//   transition: '0.5s',
//   '&:hover': {
//     backgroundPosition: 'right center',
//     color: '#fff',
//     textDecoration: 'none',
//   },
// }));

// // Define navigation items for easy mapping
// const navItems = [
//   { label: 'Home', path: '/' },
//   { label: 'Contact', path: '/contact' },
//   // Add more navigation items here as your application grows
// ];

// const Navbar: React.FC = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   // Use 'md' breakpoint to make the menu collapse on tablets and smaller screens
//   const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleNavLinkClick = (path: string) => {
//     navigate(path);
//     setDrawerOpen(false); // Close drawer after navigating
//   };

//   // Content for the mobile drawer
//   const drawer = (
//     <Box
//       onClick={handleDrawerToggle} // Closes the drawer if clicked anywhere inside it
//       sx={{ 
//         textAlign: 'center', 
//         width: 250, // Fixed width for the drawer
//         // NOTE: The drawer background is kept separate from AppBar for distinct styling
//         background: 'linear-gradient(120deg, rgba(45, 48, 17, 0.95) 60%, rgba(21, 237, 1, 0.41) 100%)', // Slightly stronger background for drawer
//         height: '100%', // Ensure drawer takes full height
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'center', minHeight: 64 }}>
//         <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700 }}>
//           Menu
//         </Typography>
//       </Toolbar>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton 
//               onClick={() => handleNavLinkClick(item.path)}
//               sx={{ 
//                 textAlign: 'center', 
//                 color: '#F5F8FA', 
//                 fontWeight: 500,
//                 fontSize: '1.1rem',
//                 padding: '12px 0', // Adjust padding for better touch area
//                 '&:hover': {
//                   background: 'rgba(255,255,255,0.08)', // Subtle hover for drawer items
//                   color: theme.palette.primary.light, // Change text color on hover
//                 },
//               }}
//             >
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="sticky" elevation={0} sx={{
//       // --- UPDATED: Light transparent background ---
//       background: 'rgba(255, 255, 255, 0.03)', // Light transparent background
//       // ---------------------------------------------
//       borderBottom: '1.5px solid rgba(72, 176, 240, 0)',
//       boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0)',
//       top: 0,
//       zIndex: 1100, // Ensure it's above other content
//       backdropFilter: 'blur(24px)',
//       WebkitBackdropFilter: 'blur(24px)',
//       transition: 'background 0.3s',
//     }}>
//       <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
//         {/* Logo and Company Name */}
//         <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
//           <LogoImg src={logo} alt="Helix Synergy Corp Logo" />
//           <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700, letterSpacing: 1 }}>
//             Helix Synergy Corp
//           </Typography>
//         </Box>

//         {/* Navigation Buttons (Desktop vs. Mobile) */}
//         {isMobile ? (
//           <IconButton
//             color="inherit" // Inherits color from AppBar
//             aria-label="open drawer"
//             edge="end" // Pushes the icon to the end of the toolbar
//             onClick={handleDrawerToggle}
//             sx={{ mr: 0, display: { md: 'none' }, color: '#F5F8FA' }} // Only show on mobile
//           >
//             <MenuIcon />
//           </IconButton>
//         ) : (
//           <Box sx={{ display: { xs: 'none', md: 'block' } }}> {/* Only show on desktop */}
//             {navItems.map((item) => (
//               <NavButton key={item.label} onClick={() => handleNavLinkClick(item.path)}>
//                 {item.label}
//               </NavButton>
//             ))}
//           </Box>
//         )}
//       </Toolbar>

//       {/* Mobile Drawer */}
//       <nav>
//         <Drawer
//           anchor="right" // Drawer slides in from the right
//           open={drawerOpen}
//           onClose={handleDrawerToggle} // Closes when clicking outside or pressing Esc
//           ModalProps={{
//             keepMounted: true, // Optimizes for better mobile performance
//           }}
//           sx={{
//             display: { xs: 'block', md: 'none' }, // Only display drawer on mobile breakpoints
//             '& .MuiDrawer-paper': { 
//               boxSizing: 'border-box', 
//               width: 250, // Set the width of the drawer's paper
//               background: 'transparent', // Make drawer background transparent to allow inner Box to handle styling
//               borderLeft: '1.5px solid rgba(72,175,240,0.18)', // Add a border to the drawer edge
//               boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)', // Add shadow to the drawer
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </AppBar>
//   );
// };

// export default Navbar;








import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import logo from '../assets/logo/Octacrest Corporate Pvt Ltd.Only.logo.png';

// New imports for responsiveness
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PhoneIcon from '@mui/icons-material/Phone'; // Import PhoneIcon for the mobile number

const LogoImg = styled('img')({
    height: 75,
    width: 'auto',
    marginRight: 10,
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0)',
});

const NavButton = styled(Button)(({ theme }) => ({
    color: '#F5F8FA',
    fontWeight: 500,
    fontSize: '1rem',
    borderRadius: 6,
    marginLeft: theme.spacing(2),
    textTransform: 'none',
    backgroundImage: 'linear-gradient(to left,rgba(0, 255, 204, 0.37) 0%,rgba(0, 0, 0, 0.24) 51%,rgba(255, 255, 255, 0.4) 100%)',
    backgroundSize: '200% auto',
    transition: '0.5s',
    '&:hover': {
        backgroundPosition: 'right center',
        color: '#fff',
        textDecoration: 'none',
    },
}));

// Define navigation items for easy mapping
const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Verticals', path: '/verticals' },
    { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [atTop, setAtTop] = useState(true);

    // Determine if the current page is the contact page
    const isOnContactPage = location.pathname === '/contact';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 50) {
                setAtTop(true);
            } else {
                setAtTop(false);
            }
        };

        // Initialize state based on current scroll position when component mounts
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleNavLinkClick = (path: string) => {
        navigate(path);
        setDrawerOpen(false); // Close drawer after navigating
    };

    // Mobile number to display
    const mobileNumber = "+1-703-651-6096"; // Replace with your actual mobile number

    // Content for the mobile drawer
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                width: 250,
                background: 'linear-gradient(120deg, rgba(45, 48, 17, 0.95) 60%, rgba(21, 237, 1, 0.41) 100%)',
                height: '100%',
            }}
        >
            <Toolbar sx={{ justifyContent: 'center', minHeight: 64 }}>
                <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700 }}>
                    Menu
                </Typography>
            </Toolbar>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            onClick={() => handleNavLinkClick(item.path)}
                            sx={{
                                textAlign: 'center',
                                color: '#F5F8FA',
                                fontWeight: 500,
                                fontSize: '1.1rem',
                                padding: '12px 0',
                                '&:hover': {
                                    background: 'rgba(255,255,255,0.08)',
                                    color: theme.palette.primary.light,
                                },
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {/* Mobile Number in Drawer for mobile view */}
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            textAlign: 'center',
                            color: '#F5F8FA',
                            fontWeight: 500,
                            fontSize: '1.1rem',
                            padding: '12px 0',
                            '&:hover': {
                                background: 'rgba(255,255,255,0.08)',
                                color: theme.palette.primary.light,
                            },
                        }}
                    >
                        <ListItemText primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <PhoneIcon sx={{ mr: 1, fontSize: '1rem' }} /> {mobileNumber}
                            </Box>
                        } />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed" // Keep 'fixed' for dynamic styling based on scroll
            elevation={0}
            sx={{
                // Apply 'atTop' styles if atTop OR if on the contact page
                background: (atTop || isOnContactPage) ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                borderBottom: '1.5px solid rgba(72, 176, 240, 0)', // This border doesn't change
                boxShadow: (atTop || isOnContactPage) ? '0 8px 32px 0 rgba(0, 0, 0, 0.1)' : 'none', // Dynamic shadow
                top: 0,
                zIndex: 1100,
                backdropFilter: (atTop || isOnContactPage) ? 'blur(24px)' : 'none', // Dynamic blur
                WebkitBackdropFilter: (atTop || isOnContactPage) ? 'blur(24px)' : 'none', // Dynamic blur for Webkit
                transition: 'background 0.3s ease-in-out, box-shadow 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out', // Smooth transition
            }}
        >
            <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
                {/* Logo and Company Name */}
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
                    <LogoImg src={logo} alt="Octacrest Corporate Logo" />
                    <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700, letterSpacing: 1 }}>
                        OCTACREST CORPORATE
                    </Typography>
                </Box>

                {/* Navigation Buttons and Mobile Number (Desktop vs. Mobile) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 0, display: { md: 'none' }, color: '#F5F8FA' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                {navItems.map((item) => (
                                    <NavButton key={item.label} onClick={() => handleNavLinkClick(item.path)}>
                                        {item.label}
                                    </NavButton>
                                ))}
                            </Box>
                            {/* Mobile Number for Desktop */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#F5F8FA',
                                    fontWeight: 500,
                                    marginLeft: theme.spacing(3), // Adjust spacing as needed
                                    display: 'flex',
                                    alignItems: 'center',
                                    whiteSpace: 'nowrap', // Prevent wrapping
                                    [theme.breakpoints.down('md')]: {
                                        display: 'none', // Hide on mobile when menu icon is present
                                    },
                                }}
                            >
                                <PhoneIcon sx={{ mr: 0.5, fontSize: '1rem' }} /> <a href={`tel:${mobileNumber.replace(/[^0-9+]/g, '')}`} style={{ color: '#48AFF0', textDecoration: 'underline', fontWeight: 600 }}>{mobileNumber}</a>
                            </Typography>
                        </>
                    )}
                </Box>
            </Toolbar>

            {/* Mobile Drawer */}
            <nav>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 250,
                            background: 'transparent',
                            borderLeft: '1.5px solid rgba(72,175,240,0.18)',
                            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </AppBar>
    );
};

export default Navbar;
