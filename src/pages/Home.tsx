import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Rating,
  Chip,
  Paper,
  TextField,
} from '@mui/material';
import {
  ShoppingCart as CartIcon,
  ArrowForward as ArrowForwardIcon,
  LocalShipping as ShippingIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  TipsAndUpdates as TipsIcon,
  VerifiedUser as VerifiedIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroImages, productImages } from '../constants/images';

const Home = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Nike Air Max 270',
      description: 'Experience ultimate comfort with the Nike Air Max 270.',
      price: 150.00,
      image: productImages.nikeAirMax,
      category: 'Running',
      brand: 'Nike',
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Black', 'White', 'Red'],
      rating: 4.5,
      reviews: 128,
      inStock: true,
    },
    {
      id: '2',
      name: 'Adidas Superstar',
      description: 'Classic design meets modern comfort in the Adidas Superstar.',
      price: 120.00,
      image: productImages.adidasSuperstar,
      category: 'Lifestyle',
      brand: 'Adidas',
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Black', 'White', 'Blue'],
      rating: 4.8,
      reviews: 256,
      inStock: true,
    },
    {
      id: '3',
      name: 'Puma RS-X',
      description: 'Bold design and superior comfort in the Puma RS-X.',
      price: 130.00,
      image: productImages.pumaRSX,
      category: 'Sports',
      brand: 'Puma',
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Black', 'White', 'Green'],
      rating: 4.6,
      reviews: 192,
      inStock: true,
    },
  ];

  const features = [
    {
      icon: <ShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Free Shipping',
      description: 'On orders over $100',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure Payment',
      description: '100% secure payment',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Dedicated support',
    },
  ];

  const categories = [
    {
      name: 'Running Shoes',
      image: productImages.nikeAirMax,
      description: 'Perfect for runners and athletes',
      count: '120+ Products',
    },
    {
      name: 'Casual Sneakers',
      image: productImages.adidasSuperstar,
      description: 'Comfortable everyday wear',
      count: '200+ Products',
    },
    {
      name: 'Sports Shoes',
      image: productImages.pumaRSX,
      description: 'Professional sports footwear',
      count: '150+ Products',
    },
    {
      name: 'Lifestyle Shoes',
      image: productImages.nikeAirMax,
      description: 'Trendy and fashionable',
      count: '180+ Products',
    },
  ];

  const specialOffers = [
    {
      title: 'Summer Sale',
      discount: '30% OFF',
      description: 'On all running shoes',
      image: productImages.nikeAirMax,
      endDate: 'June 30, 2024',
    },
    {
      title: 'New Arrivals',
      discount: '20% OFF',
      description: 'On first purchase',
      image: productImages.adidasSuperstar,
      endDate: 'July 15, 2024',
    },
  ];

  const shoeCareTips = [
    {
      title: 'Proper Cleaning',
      description: 'Use a soft brush and mild soap to clean your shoes. Avoid machine washing.',
      icon: <TipsIcon />,
    },
    {
      title: 'Storage Tips',
      description: 'Keep your shoes in a cool, dry place away from direct sunlight.',
      icon: <TipsIcon />,
    },
    {
      title: 'Regular Maintenance',
      description: 'Inspect your shoes regularly for wear and tear. Replace when necessary.',
      icon: <TipsIcon />,
    },
  ];

  const socialProof = [
    {
      number: '50K+',
      label: 'Happy Customers',
      icon: <VerifiedIcon />,
    },
    {
      number: '1000+',
      label: 'Products Available',
      icon: <VerifiedIcon />,
    },
    {
      number: '24/7',
      label: 'Customer Support',
      icon: <VerifiedIcon />,
    },
    {
      number: '100%',
      label: 'Secure Payment',
      icon: <VerifiedIcon />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '600px',
          backgroundImage: `url(${heroImages.mainHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Step into Style
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                mb: 4,
                maxWidth: '600px',
              }}
            >
              Discover our collection of premium footwear for every occasion
            </Typography>
            <Button
              component={Link}
              to="/shop"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              Shop Now
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      bgcolor: 'transparent',
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Featured Products
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Discover our handpicked selection of premium footwear that combines style, comfort, and quality.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {featuredProducts.map((product, index) => (
            <Grid item xs={12} md={4} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    '&:hover': {
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="h6" component="h2">
                        {product.name}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${product.price.toFixed(2)}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating value={product.rating} precision={0.5} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        ({product.reviews})
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip label={product.category} size="small" />
                      <Chip label={product.brand} size="small" />
                    </Box>
                    <Button
                      component={Link}
                      to={`/product/${product.id}`}
                      variant="contained"
                      fullWidth
                      startIcon={<CartIcon />}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Collection Banner */}
      <Box
        sx={{
          py: 8,
          backgroundImage: `url(${heroImages.collectionHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                mb: 2,
                textAlign: 'center',
              }}
            >
              New Collection
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                mb: 4,
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Explore our latest collection of trendy and comfortable footwear
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                component={Link}
                to="/shop"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'grey.100',
                  },
                }}
              >
                Shop Collection
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Shop by Category
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            Explore our wide range of footwear categories to find the perfect pair for your needs.
          </Typography>
          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={category.image}
                      alt={category.name}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {category.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {category.description}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        {category.count}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Special Offers Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Special Offers
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          Don't miss out on these amazing deals and discounts!
        </Typography>
        <Grid container spacing={4}>
          {specialOffers.map((offer, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={offer.image}
                    alt={offer.title}
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      p: 4,
                      color: 'white',
                      width: '100%',
                      background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      {offer.title}
                    </Typography>
                    <Typography variant="h3" color="primary" gutterBottom>
                      {offer.discount}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {offer.description}
                    </Typography>
                    <Typography variant="caption">
                      Offer ends: {offer.endDate}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ mt: 2 }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Shoe Care Tips Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Shoe Care Tips
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            Learn how to maintain and extend the life of your favorite footwear.
          </Typography>
          <Grid container spacing={4}>
            {shoeCareTips.map((tip, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {tip.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {tip.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tip.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Social Proof Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {socialProof.map((proof, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {proof.icon}
                  </Box>
                  <Typography variant="h4" gutterBottom>
                    {proof.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {proof.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Newsletter Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 6,
                textAlign: 'center',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color: 'white',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Subscribe to Our Newsletter
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Stay updated with our latest products and exclusive offers
              </Typography>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  gap: 2,
                  maxWidth: '500px',
                  mx: 'auto',
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 