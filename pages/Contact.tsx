import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Paper, TextField, Button, Select, MenuItem, FormControl, InputLabel, Stack } from '@mui/material';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        serviceType: 'emergency',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Dispatch has been notified. We will call you shortly.');
    };

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
                title="Contact Us"
                description="Get in touch with ProLocksmith Elite. 24/7 Emergency phone line, email inquiry form, and location details."
            />

            <Box sx={{ py: 8, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" fontWeight="bold" mb={8}>Contact Us</Typography>

                    <Grid container spacing={6}>

                        {/* Contact Info */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                                <Typography variant="h5" fontWeight="bold" mb={4}>Get in Touch</Typography>
                                <Stack spacing={4}>
                                    <Box display="flex" gap={2}>
                                        <Box sx={{ bgcolor: 'primary.50', p: 1.5, borderRadius: 2, color: 'primary.main', height: 'fit-content' }}>
                                            <Phone size={24} />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight="bold">Phone</Typography>
                                            <Typography variant="body2" color="text.secondary" mb={0.5}>24/7 Emergency Line</Typography>
                                            <Typography variant="h6" color="secondary.main" fontWeight="bold" component="a" href="tel:+94 77 438 0935" sx={{ textDecoration: 'none' }}>
                                                +94 77 438 0935
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box display="flex" gap={2}>
                                        <Box sx={{ bgcolor: 'primary.50', p: 1.5, borderRadius: 2, color: 'primary.main', height: 'fit-content' }}>
                                            <Mail size={24} />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight="bold">Email</Typography>
                                            <Typography variant="body2" color="text.secondary">For general inquiries</Typography>
                                            <Typography variant="body1" color="primary.main" component="a" href="mailto:keyhome@prolocksmith.com" sx={{ textDecoration: 'none', fontWeight: 500 }}>
                                                keyhome
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box display="flex" gap={2}>
                                        <Box sx={{ bgcolor: 'primary.50', p: 1.5, borderRadius: 2, color: 'primary.main', height: 'fit-content' }}>
                                            <MapPin size={24} />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight="bold">Location</Typography>
                                            <Typography variant="body2" color="text.secondary">Dispatch Center</Typography>
                                            <Typography variant="body1" fontWeight="500">119/E High Level Rd, Maharagama 10280</Typography>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Paper>

                            <Paper sx={{ p: 4, bgcolor: 'grey.900', color: 'white', borderRadius: 3 }}>
                                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                    <Clock size={20} color="#ed6c02" />
                                    <Typography variant="h6" fontWeight="bold">Hours of Operation</Typography>
                                </Stack>
                                <Stack spacing={1}>
                                    <Box display="flex" justifyContent="space-between"><Typography>Mon - Fri:</Typography> <Typography>24 Hours</Typography></Box>
                                    <Box display="flex" justifyContent="space-between"><Typography>Saturday:</Typography> <Typography>24 Hours</Typography></Box>
                                    <Box display="flex" justifyContent="space-between"><Typography>Sunday:</Typography> <Typography>24 Hours</Typography></Box>
                                </Stack>
                            </Paper>
                        </Grid>

                        {/* Form */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>Request Service</Typography>
                                <Typography variant="body2" color="text.secondary" mb={4}>Fill out the form below and we'll get back to you instantly.</Typography>

                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                required
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Phone"
                                                required
                                                type="tel"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                type="email"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <FormControl fullWidth>
                                                <InputLabel>Service Needed</InputLabel>
                                                <Select
                                                    value={formData.serviceType}
                                                    label="Service Needed"
                                                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                                                >
                                                    <MenuItem value="emergency">Emergency Lockout</MenuItem>
                                                    <MenuItem value="carkey">Car Key Replacement</MenuItem>
                                                    <MenuItem value="residential">Home Lock Change</MenuItem>
                                                    <MenuItem value="other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Message / Location Details"
                                                multiline
                                                rows={4}
                                                value={formData.message}
                                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                size="large"
                                                endIcon={<Send size={18} />}
                                                sx={{ py: 1.5, fontWeight: 'bold' }}
                                            >
                                                Send Request
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Contact;