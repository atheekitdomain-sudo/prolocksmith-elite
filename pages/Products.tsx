import React, { useState, useMemo } from 'react';
import { Box, Container, Typography, TextField, Select, MenuItem, Grid, Card, CardMedia, CardContent, CardActions, Button, InputAdornment, FormControl, InputLabel } from '@mui/material';
import { Search, ShoppingCart } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'car-keys', name: 'Car Keys & Remotes' },
    { id: 'housing', name: 'Shells & Housings' },
    { id: 'accessory', name: 'Accessories' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      return 0;
    });

    return result;
  }, [searchTerm, category, sortBy]);

  const productSchema = {
    "@type": "ItemList",
    "itemListElement": filteredProducts.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "description": product.description,
      "image": product.image,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "USD"
      }
    }))
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
        title="Car Keys & Locksmith Products Shop" 
        description="Buy car key replacements, remote fobs, and key shells online. High quality aftermarket and OEM parts available."
        schema={productSchema}
      />

      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" mb={4}>Key Shop</Typography>

          {/* Controls */}
          <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 1, mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField 
                  fullWidth 
                  placeholder="Search for your car model..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search size={20} color="#9e9e9e" />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <FormControl fullWidth size="small">
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map(c => <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)}
                    </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <FormControl fullWidth size="small">
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        value={sortBy}
                        label="Sort By"
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <MenuItem value="popularity">Most Popular</MenuItem>
                        <MenuItem value="price-asc">Price: Low to High</MenuItem>
                        <MenuItem value="price-desc">Price: High to Low</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <Grid container spacing={3}>
                {filteredProducts.map((product) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { boxShadow: 4 } }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.name}
                                sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="caption" color="text.secondary" fontWeight="bold" textTransform="uppercase">
                                    {categories.find(c => c.id === product.category)?.name}
                                </Typography>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ lineHeight: 1.2, height: '2.4em', overflow: 'hidden' }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '3em', overflow: 'hidden' }}>
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                                <Typography variant="h6" color="primary.main" fontWeight="bold">
                                    ${product.price.toFixed(2)}
                                </Typography>
                                <Button variant="contained" color="primary" size="small" startIcon={<ShoppingCart size={16} />}>
                                    Add
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
          ) : (
            <Box textAlign="center" py={8}>
                <Typography variant="h6" color="text.secondary" gutterBottom>No products found matching your criteria.</Typography>
                <Button onClick={() => {setSearchTerm(''); setCategory('all');}}>Clear Filters</Button>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Products;