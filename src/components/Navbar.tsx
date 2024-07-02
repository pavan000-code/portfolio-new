import  { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, CssBaseline } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: isDarkMode
            ? undefined
            : {
                main: '#616161',
              },
        },
      }),
    [isDarkMode]
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isResumePage = location.pathname === '/resume';
  const isProjectsPage = location.pathname === '/projects';

  const handleResumeDownload = () => {
    window.open('/resume/PavanK_SDE.pdf', '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pavan Kalyan
          </Typography>
          <Box>
            {!isHomePage && (
              <Button color="inherit" component={NavLink} to="/">
                Home
              </Button>
            )}
            {!isAboutPage && (
              <Button color="inherit" component={NavLink} to="/about">
                About
              </Button>
            )}
            {!isResumePage && (
              <Button color="inherit" onClick={handleResumeDownload}>
                Resume
              </Button>
            )}
            {!isProjectsPage && (
              <Button color="inherit" component={NavLink} to="/projects">
                Projects
              </Button>
            )}
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
     
    </ThemeProvider>
  );
};

export default Navbar;
