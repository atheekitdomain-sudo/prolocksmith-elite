import React from 'react';
import { useParams, Navigate, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Breadcrumbs, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button, Avatar } from '@mui/material';
import { Check, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" />;
  }

  const serviceSchema = {
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ProLocksmith Elite"
    },
    "areaServed": {
      "@type": "City",
      "name": "Metropolis"
    },
    "description": service.fullDescription
  };

  return (
    <>
      <SEOHead 
        title={service.title}
        description={`${service.title} services by ProLocksmith Elite. ${service.shortDescription} Available 24/7.`}
        schema={serviceSchema}
        keywords="
    key programming near me, car key programming near me, smart key programming near me, 
    remote key programming near me, remote key repair near me, key cutting near me,
    key programming colombo, key cutting colombo, locksmith near me, car key repair near me,
    car door unlock service near me, car door unlock service, door lock open service near me,
    emergency locksmith near me, mobile locksmith near me, auto locksmith near me
  "
      />

      <Box sx={{ bgcolor: 'primary.50', py: 6 }}>
        <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <RouterLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</RouterLink>
                <RouterLink to="/services/car-key-programming" style={{ color: 'inherit', textDecoration: 'none' }}>Services</RouterLink>
                <Typography color="text.primary">{service.title}</Typography>
            </Breadcrumbs>
            <Typography variant="h3" component="h1" fontWeight="bold" color="text.primary">
                {service.title}
            </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
            {/* Main Content */}
            <Grid size={{ xs: 12, lg: 8 }}>
                <Box 
                  component="img"
                  src={`https://picsum.photos/800/400?random=${service.id}`} 
                  alt={service.title} 
                  sx={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 3, mb: 4 }}
                />
                
                <Typography variant="h5" gutterBottom fontWeight="bold">Service Overview</Typography>
                <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    {service.fullDescription}
                </Typography>

                <Paper variant="outlined" sx={{ p: 4, my: 4, borderRadius: 3 }}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">Why Choose Us?</Typography>
                    <Grid container spacing={2}>
                        {service.benefits.map((benefit, index) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ width: 24, height: 24, bgcolor: 'success.light' }}>
                                        <Check size={14} />
                                    </Avatar>
                                    <Typography variant="body2" fontWeight="medium">{benefit}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>

                <Typography variant="h5" gutterBottom fontWeight="bold">How It Works</Typography>
                <List>
                    {service.steps.map((step, index) => (
                        <ListItem key={index} alignItems="flex-start" sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.100', color: 'primary.main', fontSize: '0.875rem', fontWeight: 'bold' }}>
                                    {index + 1}
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText 
                                primary={<Typography fontWeight="500" sx={{ mt: 0.5 }}>{step}</Typography>} 
                            />
                        </ListItem>
                    ))}
                </List>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, lg: 4 }}>
                <Box sx={{ position: 'sticky', top: 100 }}>
                    <Paper elevation={2} sx={{ p: 4, borderRadius: 3, mb: 3, borderTop: 4, borderColor: 'secondary.main' }}>
                        <Typography variant="h6" align="center" fontWeight="bold" gutterBottom>Need this service?</Typography>
                        <Typography variant="body2" align="center" color="text.secondary" mb={3}>
                            Our technicians are ready to help you right now.
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth 
                            size="large"
                            startIcon={<Phone />}
                            href="tel:+94 77 438 0935"
                            sx={{ mb: 2, fontWeight: 'bold' }}
                        >
                            Call +94 77 438 0935
                        </Button>
                        <Button 
                            component={RouterLink}
                            to="/contact"
                            variant="outlined" 
                            fullWidth 
                            size="large"
                        >
                            Request Quote Online
                        </Button>
                    </Paper>

                    <Paper sx={{ p: 3, bgcolor: 'grey.900', color: 'white', borderRadius: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>24/7 Emergency</Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            Don't panic. We operate all day, every day, including holidays.
                        </Typography>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ServiceDetail;