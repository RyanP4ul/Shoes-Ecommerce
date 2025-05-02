import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
  Button,
} from '@mui/material';
import { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    marketingEmails: false,
    darkMode: false,
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [name]: event.target.checked,
    });
  };

  const handleSave = () => {
    // Handle settings save logic here
    console.log('Settings saved:', settings);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Account Settings
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={settings.emailNotifications}
              onChange={handleChange('emailNotifications')}
            />
          }
          label="Email Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.orderUpdates}
              onChange={handleChange('orderUpdates')}
            />
          }
          label="Order Updates"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.marketingEmails}
              onChange={handleChange('marketingEmails')}
            />
          }
          label="Marketing Emails"
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Appearance
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={settings.darkMode}
              onChange={handleChange('darkMode')}
            />
          }
          label="Dark Mode"
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          size="large"
        >
          Save Settings
        </Button>
      </Box>
    </Box>
  );
};

export default Settings; 