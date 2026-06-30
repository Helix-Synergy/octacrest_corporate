


// import React from 'react';
// import Box from '@mui/material/Box';
// import Navbar from './Navbar'; // Assuming Navbar component is in this path
// import Footer from './Footer'; // Assuming Footer component is in this path

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <Box
//       sx={{
//         width: '100%', // Ensures the component takes 100% of the viewport width
//         minHeight: '100vh', // Ensures the component takes at least 100% of the viewport height
//         display: 'flex',
//         flexDirection: 'column',
//         // --- Darker Gradient Background ---
//         // This gradient goes from a very dark grey/near-black on the left to a dark purple on the right.
//         background: `linear-gradient(to right, #121212, #330033)`, 
        
//         // Alternative darker gradient if the above isn't quite right:
//         // background: `linear-gradient(to right, #0A0A0A, #2B002B)`, 
        
//         backgroundSize: 'cover', // Ensures the gradient covers the entire area
//         backgroundPosition: 'center center', // Centers the gradient within the box
//         backgroundRepeat: 'no-repeat', // Prevents the gradient from tiling
//         backgroundAttachment: 'fixed', // Keeps the background fixed relative to the viewport during scroll
//       }}
//     >
//       <Navbar />
//       {/* This Box wraps the main content and allows it to grow to fill available space */}
//       <Box component="main" sx={{ flex: 1, width: '100%', px: { xs: 1, sm: 3 }, py: 3 }}>
//         {children}
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Layout;


import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(to right, #121212, #330033)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />

      {/* Content area with padding-bottom to avoid overlap with fixed footer */}
      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
          px: { xs: 1, sm: 3 },
          py: 3,
          pb: { xs: 10, sm: 12 }, // 👈 adds spacing so content doesn’t get hidden by fixed footer
        }}
      >
        {children}
      </Box>

      {/* Fixed Footer */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 1200, // ensure it’s above content
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
