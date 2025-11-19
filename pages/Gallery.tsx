import React, { useState } from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, ImageListItemBar, IconButton, Dialog, useMediaQuery, useTheme } from '@mui/material';
import { X, ZoomIn } from 'lucide-react';
import SEOHead from '../components/SEOHead';
export const GALLERY_IMAGES = Array.from({ length: 30 }, (_, i) => ({
  src: `/gallery/${i + 1}.jpg`,
  title: `Image ${i + 1}`,
}));

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const getCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <>
      <SEOHead 
        title="Our Work Gallery" 
        keywords="
    key programming near me, car key programming near me, smart key programming near me, 
    remote key programming near me, remote key repair near me, key cutting near me,
    key programming colombo, key cutting colombo, locksmith near me, car key repair near me,
    car door unlock service near me, car door unlock service, door lock open service near me,
    emergency locksmith near me, mobile locksmith near me, auto locksmith near me
  "
        description="View photos of our recent locksmith projects, car key programming, and installation work."
      />

      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
            <Box textAlign="center" mb={6}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>Project Gallery</Typography>
                <Typography variant="body1" color="text.secondary">See our technicians in action across Metropolis.</Typography>
            </Box>

            <ImageList variant="masonry" cols={getCols()} gap={16}>
                {GALLERY_IMAGES.map((item) => (
                    <ImageListItem 
                        key={item.src} 
                        sx={{ 
                            cursor: 'pointer', 
                            overflow: 'hidden', 
                            borderRadius: 2,
                            '&:hover img': { transform: 'scale(1.05)' },
                            '&:hover .overlay': { opacity: 1 } 
                        }}
                        onClick={() => setSelectedImage(item.src)}
                    >
                        <img
                            src={`${item.src}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ transition: '0.3s ease-in-out', display: 'block', width: '100%' }}
                        />
                        {/* Overlay */}
                        <Box 
                            className="overlay"
                            sx={{ 
                                position: 'absolute', 
                                inset: 0, 
                                bgcolor: 'rgba(0,0,0,0.4)', 
                                opacity: 0, 
                                transition: '0.3s', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}
                        >
                             <ZoomIn color="white" size={32} />
                        </Box>
                        <ImageListItemBar title={item.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
      </Box>

      <Dialog 
        open={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        PaperProps={{
            style: { backgroundColor: 'transparent', boxShadow: 'none' }
        }}
      >
        <Box position="relative">
            <IconButton 
                onClick={() => setSelectedImage(null)}
                sx={{ position: 'absolute', top: -40, right: 0, color: 'white' }}
            >
                <X size={32} />
            </IconButton>
            {selectedImage && (
                <img 
                    src={selectedImage} 
                    alt="Gallery Full" 
                    style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 8 }} 
                />
            )}
        </Box>
      </Dialog>
    </>
  );
};

export default Gallery;
