import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, simply browse our collection, select your desired shoes, choose your size and color, and click "Add to Cart". Then proceed to checkout, where you can enter your shipping and payment information to complete your purchase.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment partners.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days within the United States. International shipping times vary by location. Express shipping options are available for faster delivery.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all unworn items in their original packaging. Returns are free for orders over $100. For orders under $100, a $5 return shipping fee applies.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email. You can use this number to track your order status on our website or the shipping carrier\'s website.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can check shipping rates during checkout.',
    },
    {
      question: 'How do I change or cancel my order?',
      answer: 'Orders can be modified or cancelled within 24 hours of placement. After that, please contact our customer service team for assistance.',
    },
    {
      question: 'What sizes do you offer?',
      answer: 'We offer a wide range of sizes for men, women, and children. Each product page displays available sizes. If your size is out of stock, you can sign up for size notifications.',
    },
    {
      question: 'Are your products authentic?',
      answer: 'Yes, all our products are 100% authentic and sourced directly from authorized manufacturers and distributors. We never sell counterfeit or replica items.',
    },
    {
      question: 'How can I contact customer service?',
      answer: 'Our customer service team is available 24/7 through email, phone, or live chat. You can find our contact information on the Contact Us page.',
    },
  ];

  const filteredFAQs = faqItems.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper sx={{ p: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SearchIcon color="action" />
            <TextField
              fullWidth
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outlined"
            />
          </Box>
        </Paper>
      </motion.div>

      {/* FAQ Accordion */}
      <Box>
        {filteredFAQs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ mb: 1 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography variant="h6">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>

      {/* Still Have Questions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Paper sx={{ p: 4, mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Still Have Questions?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Can't find the answer you're looking for? Our customer service team is here to help.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
          >
            Contact Us
          </Button>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default FAQ; 