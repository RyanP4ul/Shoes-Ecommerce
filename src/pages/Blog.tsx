import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  Category as CategoryIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { featuredPost, recentPosts, categories } from '../constants/blog';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = recentPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Sneaker Blog
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}
        >
          Discover the latest trends, stories, and insights from the world of
          sneakers
        </Typography>
        <TextField
          fullWidth
          placeholder="Search articles..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ maxWidth: '500px', mx: 'auto' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ mb: 6, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <CardMedia
            component="img"
            sx={{
              width: { xs: '100%', md: '50%' },
              height: { xs: '300px', md: '400px' },
            }}
            image={featuredPost.image}
            alt={featuredPost.title}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip
                  label={featuredPost.category}
                  color="primary"
                  size="small"
                />
                <Chip
                  icon={<CalendarIcon />}
                  label={featuredPost.date}
                  size="small"
                  variant="outlined"
                />
              </Box>
              <Typography variant="h4" component="h2" gutterBottom>
                {featuredPost.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {featuredPost.excerpt}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {featuredPost.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • {featuredPost.readTime}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button
                component={RouterLink}
                to={`/blog/${featuredPost.id}`}
                size="large"
              >
                Read More
              </Button>
            </CardActions>
          </Box>
        </Card>
      </motion.div>

      <Grid container spacing={4}>
        {/* Categories Sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CategoryIcon />
              Categories
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                  color={selectedCategory === category ? 'primary' : 'default'}
                  onClick={() => setSelectedCategory(category)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Recent Posts */}
        <Grid item xs={12} md={9}>
          <Typography variant="h5" gutterBottom>
            Recent Posts
          </Typography>
          <Grid container spacing={4}>
            {filteredPosts.map((post, index) => (
              <Grid item xs={12} sm={6} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                        <Chip
                          label={post.category}
                          color="primary"
                          size="small"
                        />
                        <Chip
                          icon={<CalendarIcon />}
                          label={post.date}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {post.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PersonIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {post.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          • {post.readTime}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        component={RouterLink}
                        to={`/blog/${post.id}`}
                        size="small"
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog; 