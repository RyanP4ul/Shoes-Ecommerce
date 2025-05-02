import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
} from '@mui/material';
import { Lock as LockIcon } from '@mui/icons-material';

const Security = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('New passwords do not match');
      setShowError(true);
      return;
    }

    // Here you would typically make an API call to update the password
    setShowSuccess(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleTwoFactorToggle = () => {
    // Here you would typically make an API call to update 2FA settings
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Security Settings
      </Typography>

      {showSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Password updated successfully!
        </Alert>
      )}

      {showError && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setShowError(false)}>
          {errorMessage}
        </Alert>
      )}

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <LockIcon />
            <Typography variant="h6">Change Password</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Current Password"
              type="password"
              fullWidth
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handlePasswordChange}
              sx={{ alignSelf: 'flex-start' }}
            >
              Update Password
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <LockIcon />
            <Typography variant="h6">Two-Factor Authentication</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Enable Two-Factor Authentication
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add an extra layer of security to your account by requiring a verification code
                when signing in.
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={twoFactorEnabled}
                  onChange={handleTwoFactorToggle}
                  color="primary"
                />
              }
              label={twoFactorEnabled ? 'Enabled' : 'Disabled'}
            />
          </Box>
          {twoFactorEnabled && (
            <>
              <Divider sx={{ my: 3 }} />
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Scan this QR code with your authenticator app to set up two-factor authentication:
              </Typography>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  bgcolor: 'grey.200',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                {/* Here you would typically display a QR code */}
                <Typography variant="body2" color="text.secondary">
                  QR Code Placeholder
                </Typography>
              </Box>
              <TextField
                label="Verification Code"
                fullWidth
                sx={{ maxWidth: 200 }}
                placeholder="Enter 6-digit code"
              />
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Security; 