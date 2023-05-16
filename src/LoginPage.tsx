import React, { FormEvent } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8,}}>
        <Typography component="h1" variant="h5"> Login </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={3}>
          <TextField label="Email Address" margin="normal" required fullWidth autoComplete="email" autoFocus />
          <TextField label="Password" margin="normal" required fullWidth type="password" autoComplete="current-password" />
          <Button type="submit" variant="contained" sx={{ mt: 4, mb: 3 }}>Login</Button>
          <Button component={RouterLink} variant="text" to='/register' sx={{ mt: 4, mb: 3 }} >Register</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
