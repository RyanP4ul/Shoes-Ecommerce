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
} from '@mui/icons-material';

interface Address {
  id: string;
  type: 'shipping' | 'billing';
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

const Addresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      type: 'shipping',
      fullName: 'John Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 234 567 8900',
      isDefault: true,
    },
    {
      id: '2',
      type: 'billing',
      fullName: 'John Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 234 567 8900',
      isDefault: true,
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState<Partial<Address>>({});

  const handleOpenDialog = (address?: Address) => {
    if (address) {
      setEditingAddress(address);
      setFormData(address);
    } else {
      setEditingAddress(null);
      setFormData({});
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingAddress(null);
    setFormData({});
  };

  const handleSubmit = () => {
    if (editingAddress) {
      // Update existing address
      setAddresses(addresses.map(addr =>
        addr.id === editingAddress.id ? { ...formData as Address } : addr
      ));
    } else {
      // Add new address
      const newAddress: Address = {
        id: Date.now().toString(),
        type: formData.type as 'shipping' | 'billing',
        fullName: formData.fullName || '',
        address: formData.address || '',
        city: formData.city || '',
        state: formData.state || '',
        zipCode: formData.zipCode || '',
        country: formData.country || '',
        phone: formData.phone || '',
        isDefault: false,
      };
      setAddresses([...addresses, newAddress]);
    }
    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleSetDefault = (id: string, type: 'shipping' | 'billing') => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id && addr.type === type,
    })));
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Addresses</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add New Address
        </Button>
      </Box>

      <Grid container spacing={3}>
        {addresses.map((address) => (
          <Grid item xs={12} md={6} key={address.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" component="div">
                    {address.type.charAt(0).toUpperCase() + address.type.slice(1)} Address
                  </Typography>
                  <Box>
                    <IconButton size="small" onClick={() => handleOpenDialog(address)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDelete(address.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="body1" gutterBottom>
                  {address.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {address.address}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {address.city}, {address.state} {address.zipCode}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {address.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {address.phone}
                </Typography>
                {!address.isDefault && (
                  <Button
                    size="small"
                    onClick={() => handleSetDefault(address.id, address.type)}
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
          {editingAddress ? 'Edit Address' : 'Add New Address'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Address Type</InputLabel>
              <Select
                value={formData.type || ''}
                label="Address Type"
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <MenuItem value="shipping">Shipping</MenuItem>
                <MenuItem value="billing">Billing</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Full Name"
              fullWidth
              value={formData.fullName || ''}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <TextField
              label="Address"
              fullWidth
              value={formData.address || ''}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <TextField
              label="City"
              fullWidth
              value={formData.city || ''}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
            <TextField
              label="State"
              fullWidth
              value={formData.state || ''}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />
            <TextField
              label="ZIP Code"
              fullWidth
              value={formData.zipCode || ''}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            />
            <TextField
              label="Country"
              fullWidth
              value={formData.country || ''}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
            <TextField
              label="Phone"
              fullWidth
              value={formData.phone || ''}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingAddress ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Addresses; 