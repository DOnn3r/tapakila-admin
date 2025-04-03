// LoginPage.tsx
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { TextField, Button, Card, Box } from '@mui/material';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const notify = useNotify();
  const login = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password })
      .catch(() => notify('Email ou mot de passe incorrect', { type: 'error' }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 450, padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
            >
              Se connecter
            </Button>
          </Box>
        </form>
      </Card>
      <Notification />
    </Box>
  );
};