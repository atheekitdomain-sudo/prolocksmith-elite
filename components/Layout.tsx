import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar, Toolbar, Container, Box, Button, IconButton, Typography,
  Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Stack, Grid
} from '@mui/material';
import { Menu as MenuIcon, Phone, Facebook, Twitter, Instagram, Key, MapPin } from 'lucide-react';
import AIChatAssistant from './AIChatAssistant';
import { useTranslation } from 'react-i18next';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services/car-key-programming' },
    // { name: t('nav.products'), path: '/products' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <Key size={24} color="#1565c0" />
        <Typography variant="h6" color="primary.main" fontWeight="bold">
          ProLocksmith
        </Typography>
      </Box>
      <Divider />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              selected={isActive(item.path)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            startIcon={<Phone size={18} />}
            href="tel:+94 77 438 0935"
          >
            +94 77 438 0935
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Bar */}
      <Box sx={{ bgcolor: 'grey.900', color: 'grey.300', py: 1, fontSize: '0.75rem', display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" spacing={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <MapPin size={14} /> Servicing Metropolis & Surrounding Areas
            </Box>
            <Typography variant="caption" color="success.light" fontWeight="bold">
              Available 24/7 for Emergency
            </Typography>
          </Stack>
          
        </Container>
      </Box>

      {/* Header */}
      <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'inherit', flexGrow: { xs: 1, md: 0 } }}
            >
              <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 0.5, borderRadius: 1, display: 'flex' }}>
                <Key size={24} />
              </Box>
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                Pro<Box component="span" color="primary.main">Locksmith</Box>
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
              {navLinks.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                    fontWeight: 600,
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* CTA & Mobile Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Phone size={18} />}
                href="tel:+94774380935"
                sx={{ display: { xs: 'none', md: 'flex' }, fontWeight: 'bold' }}
              >
                +94 77 438 0935
              </Button>

              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Button onClick={toggleLanguage} sx={{ minWidth: 'auto', mr: 1 }}>
                  {i18n.language.toUpperCase()}
                </Button>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.900', color: 'grey.400', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white', mb: 2 }}>
                <Key size={24} color="#1565c0" />
                <Typography variant="h6" fontWeight="bold">ProLocksmith</Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                Professional, licensed, and insured locksmith services. We specialize in automotive key programming and emergency lockouts.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>Services</Typography>
              <Stack spacing={1}>
                <LinkItem to="/services/car-key-programming" text="Car Key Programming" />
                <LinkItem to="/services/emergency-car-opening" text="Car Lockout" />
                <LinkItem to="/services/residential-commercial" text="Residential Locks" />
                <LinkItem to="/services/ignition-services" text="Ignition Repair" />
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>Contact</Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', fontSize: '0.875rem' }}>
                  <MapPin size={16} /> 119/E High Level Rd, Maharagama 10280
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', fontSize: '0.875rem' }}>
                  <Phone size={16} />
                  <Box component="a" href="tel:+94 77 438 0935" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                    +94 77 438 0935
                  </Box>
                </Box>
                <Typography variant="caption" color="success.light" fontWeight="bold">
                  Open 24 Hours / 7 Days
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>Areas Served</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {[
                  'Fort',
                  'Slave Island',
                  'Kollupitiya',
                  'Bambalapitiya',
                  'Havelock Town',
                  'Wellawatte',
                  'Cinnamon Gardens',
                  'Borella',
                  'Dematagoda',
                  'Maradana',
                  'Pettah',
                  'Hulftsdorp',
                  'Kotahena',
                  'Grandpass',
                  'Mutwal'
                ]
                  .map(city => (
                    <Box key={city} component="span" sx={{ bgcolor: 'grey.800', px: 1, py: 0.5, borderRadius: 1, fontSize: '0.75rem' }}>
                      {city}
                    </Box>
                  ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: 1, borderColor: 'grey.800', mt: 6, pt: 4, textAlign: 'center' }}>
            <Typography variant="caption">
              © {new Date().getFullYear()} ProLocksmith Elite. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      <AIChatAssistant />
    </Box>
  );
};

const LinkItem = ({ to, text }: { to: string, text: string }) => (
  <Box component={RouterLink} to={to} sx={{ color: 'inherit', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: 'white' } }}>
    {text}
  </Box>
);

export default Layout;