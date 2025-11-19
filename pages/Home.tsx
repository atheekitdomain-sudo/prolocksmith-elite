import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Rating, Paper, Stack } from '@mui/material';
import { Shield, Clock, Award, CheckCircle, ChevronRight, Phone, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SERVICES, REVIEWS } from '../constants';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
      keywords="
    key programming near me, car key programming near me, smart key programming near me, 
    remote key programming near me, remote key repair near me, key cutting near me,
    key programming colombo, key cutting colombo, locksmith near me, car key repair near me,
    car door unlock service near me, car door unlock service, door lock open service near me,
    emergency locksmith near me, mobile locksmith near me, auto locksmith near me
  "
        title="Best Locksmith Services & Car Key Programming" 
        description="24/7 Emergency Locksmith in Metropolis. Expert car key programming, lockout services for home and auto. Licensed and insured."
      />
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative', 
          bgcolor: 'primary.dark', 
          color: 'white', 
          py: { xs: 10, md: 16 },
          overflow: 'hidden'
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            inset: 0, 
            backgroundImage: "url('https://images.unsplash.com/photo-1585165124366-39065a538e16?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }} 
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box maxWidth="sm">
            <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'secondary.main', mb: 2 }}>
              <Star size={16} fill="currentColor" />
              <Typography variant="subtitle2" fontWeight="bold" textTransform="uppercase" letterSpacing={1}>
                #1 Rated Locksmith
              </Typography>
            </Stack>
            <Typography variant="h2" component="h1" gutterBottom fontWeight="800" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              {t('hero.title')} <br/>
              <Box component="span" sx={{ color: '#90caf9' }}>{t('hero.subtitle')}</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: 'grey.300', mb: 4, fontWeight: 400 }}>
              {t('hero.desc')}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="tel:+94 77 438 0935"
                sx={{ py: 1.5, px: 4, fontSize: '1.1rem', fontWeight: 'bold' }}
              >
                {t('cta.call')}
              </Button>
              <Button 
                component={RouterLink} 
                to="/services/car-key-programming"
                variant="outlined" 
                size="large"
                sx={{ py: 1.5, px: 4, fontSize: '1.1rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                {t('cta.services')}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Trust Badges */}
      <Paper elevation={1} square sx={{ py: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { icon: Clock, text: t('trust.response') },
              { icon: Shield, text: t('trust.licensed') },
              { icon: Award, text: t('trust.rated') },
              { icon: CheckCircle, text: t('trust.guarantee') }
            ].map((badge, idx) => (
              <Grid size={{ xs: 6, md: 3 }} key={idx}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, color: 'text.secondary' }}>
                  <Box sx={{ color: 'primary.main' }}><badge.icon size={24} /></Box>
                  <Typography fontWeight="600">{badge.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>

      {/* Services Overview */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom color="text.primary">Our Expertise</Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
              We use the latest technology for non-destructive entry and advanced key programming.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {SERVICES.map((service) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={service.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ width: 48, height: 48, bgcolor: 'primary.50', color: 'primary.main', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <Shield size={24} /> 
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {service.shortDescription}
                    </Typography>
                    <Button 
                      component={RouterLink} 
                      to={`/services/${service.slug}`} 
                      endIcon={<ChevronRight size={16} />}
                      sx={{ p: 0, minWidth: 0, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Reviews Section */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
            <Typography variant="h3" component="h2" textAlign="center" mb={6} fontWeight="bold">
              What Our Customers Say
            </Typography>
            <Grid container spacing={4}>
                {REVIEWS.map(review => (
                    <Grid size={{ xs: 12, md: 4 }} key={review.id}>
                        <Paper elevation={0} sx={{ p: 4, bgcolor: 'grey.50', borderRadius: 3, height: '100%' }}>
                            <Rating value={review.rating} readOnly sx={{ mb: 2, color: 'secondary.main' }} />
                            <Typography variant="body1" fontStyle="italic" color="text.secondary" paragraph>
                                "{review.text}"
                            </Typography>
                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
                                - {review.name}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>Need Urgent Assistance?</Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
            Our technicians are standing by. No call-out fees for estimates.
          </Typography>
          <Button 
            variant="contained" 
            color="inherit" 
            size="large"
            href="tel:+94 77 438 0935"
            startIcon={<Clock />}
            sx={{ 
              bgcolor: 'white', 
              color: 'primary.dark', 
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': { bgcolor: 'grey.100' } 
            }}
          >
            Call +94 77 438 0935
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;