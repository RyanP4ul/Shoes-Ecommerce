import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Chip,
  useTheme,
  useMediaQuery,
  Divider,
  Button,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  AccessTime as AccessTimeIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { featuredPost, recentPosts } from '../constants/blog';

const BlogPost = () => {
  const { id } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  // Find the post by ID
  const post = Number(id) === featuredPost.id
    ? featuredPost
    : recentPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center">
          Post not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/blog')}
          sx={{ mb: 4 }}
          >
          Back to Blog
        </Button>
      </motion.div>

        <Card sx={{ mb: 4 }}>
          <CardMedia
            component="img"
            height={isMobile ? '300px' : '500px'}
            image={post.image}
            alt={post.title}
          />
          <Box sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
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
              <Chip
                icon={<AccessTimeIcon />}
                label={post.readTime}
                size="small"
                variant="outlined"
              />
            </Box>
            <Typography variant="h3" component="h1" gutterBottom>
              {post.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
              <PersonIcon fontSize="small" color="action" />
              <Typography variant="body1" color="text.secondary">
                {post.author}
              </Typography>
            </Box>
            <Divider sx={{ my: 4 }} />
            <Box
              sx={{
                '& h2': {
                  mt: 4,
                  mb: 2,
                  fontWeight: 600,
                },
                '& p': {
                  mb: 3,
                  lineHeight: 1.8,
                },
                '& ul, & ol': {
                  pl: 4,
                  mb: 3,
                },
                '& li': {
                  mb: 1,
                },
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Box>
        </Card>
      </motion.div>
    </Container>
  );
};

export default BlogPost; 