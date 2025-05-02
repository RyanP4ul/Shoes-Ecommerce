import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  LocalShipping as ShippingIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { CartItem } from '../types';
import { productImages } from '../constants/images';

// Temporary mock data
const mockOrderItems: CartItem[] = [
  {
    product: {
      id: '1',
      name: 'Classic Running Shoes',
      description: 'Comfortable and stylish running shoes for everyday use',
      price: 89.99,
      images: ['/images/shoe1.jpg'],
      category: 'Running',
      brand: 'Nike',
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Black', 'White', 'Red'],
      rating: 4.5,
      reviews: 128,
      inStock: true,
    },
    quantity: 2,
    size: '10',
    color: 'Black',
  },
  // Add more mock items here
];

const OrderConfirmation = () => {
  const orderNumber = 'ORD-2024-001';
  const estimatedDelivery = 'March 30, 2024';

  const calculateSubtotal = () => {
    return mockOrderItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 100 ? 0 : 10;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  // Mock order data
  const order = {
    orderId: 'ORD123456789',
    date: new Date().toLocaleDateString(),
    status: 'Confirmed',
    items: [
      {
        id: '1',
        name: 'Nike Air Max 270',
        description: 'Experience ultimate comfort with the Nike Air Max 270.',
        price: 150.00,
        image: productImages.nikeAirMax,
        size: '12',
        color: 'Black',
        quantity: 1,
      },
      {
        id: '2',
        name: 'Adidas Superstar',
        description: 'Classic style meets modern comfort in the Adidas Superstar.',
        price: 120.00,
        image: productImages.adidasSuperstar,
        size: '10',
        color: 'White',
        quantity: 2,
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
    },
    paymentMethod: 'Credit Card (**** **** **** 1234)',
    subtotal: 390.00,
    shipping: 10.00,
    tax: 39.00,
    total: 439.00,
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <CheckCircleIcon
            color="success"
            sx={{ fontSize: 64, mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            Order Confirmed!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Thank you for your purchase. Your order has been confirmed.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Order Details */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Details
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Order ID: {order.orderId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {order.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {order.status}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              {order.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ mb: 2 }}>
                    <Grid container>
                      <Grid item xs={12} sm={4}>
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.name}
                          sx={{
                            height: '100%',
                            minHeight: 200,
                            objectFit: 'cover',
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {item.description}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Size: {item.size}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Color: {item.color}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <Typography variant="h6" color="primary">
                              ${item.price.toFixed(2)}
                            </Typography>
                            <Typography sx={{ ml: 'auto' }}>
                              Quantity: {item.quantity}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
              ))}
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Shipping Address
              </Typography>
              <Typography>
                {order.shippingAddress.name}
              </Typography>
              <Typography>
                {order.shippingAddress.street}
              </Typography>
              <Typography>
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
              </Typography>
              <Typography>
                {order.shippingAddress.country}
              </Typography>
            </Paper>
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Box sx={{ my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Subtotal</Typography>
                  <Typography>${order.subtotal.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Shipping</Typography>
                  <Typography>${order.shipping.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Tax</Typography>
                  <Typography>${order.tax.toFixed(2)}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6" color="primary">
                    ${order.total.toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Payment Method
                </Typography>
                <Typography>
                  {order.paymentMethod}
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button
                component={RouterLink}
                to="/shop"
                variant="contained"
                fullWidth
              >
                Continue Shopping
              </Button>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default OrderConfirmation; 