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

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number)',
        'Shipping and billing addresses',
        'Payment information',
        'Order history',
        'Product preferences and browsing behavior',
        'Device and usage information',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Process your orders and payments',
        'Send order confirmations and shipping updates',
        'Provide customer support',
        'Improve our website and services',
        'Send marketing communications (with your consent)',
        'Comply with legal obligations',
      ],
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information',
        'We share information with service providers (shipping, payment processing)',
        'We may share information with law enforcement when required',
        'We may share aggregated, non-personal information with partners',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We use industry-standard security measures',
        'Your payment information is encrypted',
        'We regularly update our security practices',
        'We limit access to personal information',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'Access your personal information',
        'Correct inaccurate information',
        'Request deletion of your information',
        'Opt-out of marketing communications',
        'Export your data',
      ],
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to improve your shopping experience',
        'You can control cookie settings in your browser',
        'We use analytics tools to understand website usage',
        'Third-party services may use cookies',
      ],
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our website is not intended for children under 13',
        'We do not knowingly collect children\'s information',
        'Parents can contact us to remove children\'s data',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this policy periodically',
        'We will notify you of significant changes',
        'Continued use of our services constitutes acceptance',
      ],
    },
    {
      title: 'Contact Us',
      content: [
        'Email: privacy@shoestore.com',
        'Phone: +1 (555) 123-4567',
        'Address: 123 Shoe Street, Fashion District, New York, NY 10001',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Last updated: March 20, 2024
      </Typography>

      <Typography variant="body1" paragraph>
        At ShoeStore, we take your privacy seriously. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website or make a purchase.
        Please read this privacy policy carefully. By using our website, you consent to the practices
        described in this policy.
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
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <Typography component="span" color="primary">
            privacy@shoestore.com
          </Typography>
          .
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy; 