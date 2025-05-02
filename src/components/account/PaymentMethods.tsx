import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  CreditCard as CreditCardIcon,
} from '@mui/icons-material';

interface PaymentMethod {
  id: string;
  type: 'credit' | 'debit';
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  isDefault: boolean;
}

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'credit',
      cardNumber: '**** **** **** 1234',
      cardHolder: 'John Doe',
      expiryDate: '12/25',
      isDefault: true,
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingMethod, setEditingMethod] = useState<PaymentMethod | null>(null);
  const [formData, setFormData] = useState<Partial<PaymentMethod>>({});

  const handleOpenDialog = (method?: PaymentMethod) => {
    if (method) {
      setEditingMethod(method);
      setFormData(method);
    } else {
      setEditingMethod(null);
      setFormData({});
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingMethod(null);
    setFormData({});
  };

  const handleSubmit = () => {
    if (editingMethod) {
      // Update existing payment method
      setPaymentMethods(paymentMethods.map(method =>
        method.id === editingMethod.id ? { ...formData as PaymentMethod } : method
      ));
    } else {
      // Add new payment method
      const newMethod: PaymentMethod = {
        id: Date.now().toString(),
        type: formData.type as 'credit' | 'debit',
        cardNumber: formData.cardNumber || '',
        cardHolder: formData.cardHolder || '',
        expiryDate: formData.expiryDate || '',
        isDefault: false,
      };
      setPaymentMethods([...paymentMethods, newMethod]);
    }
    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id,
    })));
  };

  const formatCardNumber = (number: string) => {
    return number.replace(/(\d{4})/g, '$1 ').trim();
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Payment Methods</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add New Card
        </Button>
      </Box>

      <Grid container spacing={3}>
        {paymentMethods.map((method) => (
          <Grid item xs={12} md={6} key={method.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CreditCardIcon />
                    <Typography variant="h6" component="div">
                      {method.type.charAt(0).toUpperCase() + method.type.slice(1)} Card
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton size="small" onClick={() => handleOpenDialog(method)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDelete(method.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {formatCardNumber(method.cardNumber)}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {method.cardHolder}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expires {method.expiryDate}
                </Typography>
                {!method.isDefault && (
                  <Button
                    size="small"
                    onClick={() => handleSetDefault(method.id)}
                    sx={{ mt: 2 }}
                  >
                    Set as Default
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingMethod ? 'Edit Payment Method' : 'Add New Card'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Card Type</InputLabel>
              <Select
                value={formData.type || ''}
                label="Card Type"
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <MenuItem value="credit">Credit Card</MenuItem>
                <MenuItem value="debit">Debit Card</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Card Number"
              fullWidth
              value={formData.cardNumber || ''}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              placeholder="1234 5678 9012 3456"
            />
            <TextField
              label="Card Holder Name"
              fullWidth
              value={formData.cardHolder || ''}
              onChange={(e) => setFormData({ ...formData, cardHolder: e.target.value })}
            />
            <TextField
              label="Expiry Date"
              fullWidth
              value={formData.expiryDate || ''}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              placeholder="MM/YY"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingMethod ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PaymentMethods; 