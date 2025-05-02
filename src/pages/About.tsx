import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';
import { teamImages } from '../constants/images';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: teamImages.johnSmith,
      bio: 'John has over 15 years of experience in the footwear industry and founded ShoeStore with a vision to provide premium quality shoes at competitive prices.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Design',
      image: teamImages.sarahJohnson,
      bio: 'Sarah brings her creative expertise and passion for shoe design, ensuring our collection stays ahead of fashion trends while maintaining comfort.',
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      image: teamImages.michaelChen,
      bio: 'Michael oversees our digital presence and ensures a seamless online shopping experience for all our customers.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Relations Manager',
      image: teamImages.emilyRodriguez,
      bio: 'Emily leads our customer service team, making sure every customer receives exceptional support and satisfaction.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          About Us
        </Typography>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" gutterBottom>
            Our Story
          </Typography>
          <Typography paragraph>
            Founded in 2020, ShoeStore has grown from a small local shop to a leading online destination for premium footwear. 
            We believe that everyone deserves to walk in comfort and style, which is why we carefully curate our collection to 
            bring you the best shoes from renowned brands worldwide.
          </Typography>
          <Typography paragraph>
            Our commitment to quality, customer service, and sustainable practices sets us apart in the industry. 
            We work directly with manufacturers to ensure fair labor practices and environmentally conscious production methods.
          </Typography>
        </Box>

        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          Meet Our Team
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About; 