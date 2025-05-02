import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  const sections = [
    {
      title: 'Agreement to Terms',
      content: [
        'By accessing or using our website, you agree to be bound by these Terms of Service',
        'If you disagree with any part of these terms, you may not access our website',
        'These terms apply to all users, customers, and visitors of our website',
      ],
    },
    {
      title: 'Use License',
      content: [
        'Permission is granted to temporarily access our website for personal, non-commercial use',
        'You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, transfer, or sell any information from our website',
        'This license shall automatically terminate if you violate any of these restrictions',
      ],
    },
    {
      title: 'User Accounts',
      content: [
        'You must be at least 18 years old to create an account',
        'You are responsible for maintaining the confidentiality of your account',
        'You agree to provide accurate and complete information',
        'You are responsible for all activities under your account',
      ],
    },
    {
      title: 'Product Information',
      content: [
        'We strive to display accurate product information',
        'Product prices are subject to change without notice',
        'We reserve the right to modify or discontinue products without notice',
        'We are not responsible for typographical errors regarding pricing',
      ],
    },
    {
      title: 'Order Acceptance',
      content: [
        'All orders are subject to acceptance and availability',
        'We reserve the right to refuse service to anyone',
        'We may limit quantities on any order',
        'We may require additional verification for certain orders',
      ],
    },
    {
      title: 'Payment Terms',
      content: [
        'All payments must be made in full at the time of purchase',
        'We accept various payment methods as indicated during checkout',
        'Prices are subject to change without notice',
        'We are not responsible for payment processing fees',
      ],
    },
    {
      title: 'Shipping and Delivery',
      content: [
        'Shipping times are estimates and not guaranteed',
        'We are not responsible for delays beyond our control',
        'Risk of loss passes to you upon delivery',
        'International shipping may be subject to customs duties',
      ],
    },
    {
      title: 'Returns and Refunds',
      content: [
        'Returns must be initiated within 30 days of receipt',
        'Items must be unworn and in original packaging',
        'Refunds will be processed within 14 business days',
        'Shipping costs for returns are the customer\'s responsibility unless defective',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content on our website is our property',
        'You may not use our trademarks without permission',
        'You may not copy or reproduce our content',
        'User-generated content becomes our property',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'We are not liable for indirect or consequential damages',
        'Our liability is limited to the amount paid for the product',
        'We are not responsible for third-party actions',
        'We do not guarantee uninterrupted access to our website',
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'We reserve the right to modify these terms at any time',
        'Changes will be effective immediately upon posting',
        'Continued use constitutes acceptance of changes',
        'We will notify users of significant changes',
      ],
    },
    {
      title: 'Contact Information',
      content: [
        'Email: legal@shoestore.com',
        'Phone: +1 (555) 123-4567',
        'Address: 123 Shoe Street, Fashion District, New York, NY 10001',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Last updated: March 20, 2024
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to ShoeStore. By accessing or using our website, you agree to be bound by these
        Terms of Service. Please read these terms carefully before using our website. If you do not
        agree to these terms, please do not use our website.
      </Typography>

      <Box sx={{ mt: 4 }}>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                {section.title}
              </Typography>
              <List>
                {section.content.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </motion.div>
        ))}
      </Box>

      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms of Service, please contact us at{' '}
          <Typography component="span" color="primary">
            legal@shoestore.com
          </Typography>
          .
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsOfService; 