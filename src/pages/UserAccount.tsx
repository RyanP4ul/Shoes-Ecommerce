import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  Typography,
} from '@mui/material';
import {
  Person as PersonIcon,
  ShoppingBag as ShoppingBagIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationIcon,
  CreditCard as CreditCardIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import Orders from '../components/account/Orders';
import Wishlist from '../components/account/Wishlist';
import Addresses from '../components/account/Addresses';
import PaymentMethods from '../components/account/PaymentMethods';
import Security from '../components/account/Security';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`account-tabpanel-${index}`}
      aria-labelledby={`account-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `account-tab-${index}`,
    'aria-controls': `account-tabpanel-${index}`,
  };
}

const UserAccount = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ mb: 3 }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <PersonIcon />
              <Box>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  john.doe@example.com
                </Typography>
              </Box>
            </Box>
            <Tabs
              value={value}
              onChange={handleChange}
              orientation="vertical"
              variant="scrollable"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab
                icon={<ShoppingBagIcon />}
                label="Orders"
                {...a11yProps(0)}
              />
              <Tab
                icon={<FavoriteIcon />}
                label="Wishlist"
                {...a11yProps(1)}
              />
              <Tab
                icon={<LocationIcon />}
                label="Addresses"
                {...a11yProps(2)}
              />
              <Tab
                icon={<CreditCardIcon />}
                label="Payment Methods"
                {...a11yProps(3)}
              />
              <Tab
                icon={<LockIcon />}
                label="Security"
                {...a11yProps(4)}
              />
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper>
            <TabPanel value={value} index={0}>
              <Orders />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Wishlist />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Addresses />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <PaymentMethods />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Security />
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserAccount; 