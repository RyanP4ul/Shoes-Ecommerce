import { Box } from '@mui/material';
import OrderDetails from '../components/account/OrderDetails';

const OrderDetailsPage = () => {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <OrderDetails />
    </Box>
  );
};

export default OrderDetailsPage; 