import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
} from '@mui/material';
import {
  Person as PersonIcon,
  ShoppingBag as OrdersIcon,
  LocationOn as AddressesIcon,
  Payment as PaymentIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Orders from './Orders';
import Addresses from './Addresses';
import PaymentMethods from './PaymentMethods';
import Settings from './Settings';

const UserAccount = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: <PersonIcon />, component: <Profile /> },
    { id: 'orders', label: 'Orders', icon: <OrdersIcon />, component: <Orders /> },
    { id: 'addresses', label: 'Addresses', icon: <AddressesIcon />, component: <Addresses /> },
    { id: 'payment', label: 'Payment Methods', icon: <PaymentIcon />, component: <PaymentMethods /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon />, component: <Settings /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={3}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    selected={activeTab === item.id}
                    onClick={() => handleTabChange(item.id)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider sx={{ my: 1 }} />
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 3 }}>
            {menuItems.find((item) => item.id === activeTab)?.component}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserAccount; 