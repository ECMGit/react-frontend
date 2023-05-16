import React, { FormEvent } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Add your registration logic here
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }} >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={3}>
          <TextField label="Full Name" margin="normal" required fullWidth autoComplete="name" autoFocus />
          <TextField label="Email Address" margin="normal" required fullWidth autoComplete="email" />
          <TextField label="Password" margin="normal" required fullWidth type="password" autoComplete="new-password" />
          <Button type="submit" variant="contained" sx={{ mt: 4, mb: 3 }}>Register</Button>
          <Button component={RouterLink} variant="text" to='/login' sx={{ mt: 4, mb: 3 }} >Cancel</Button>
        </Box>
      </Box>
    </Container>);
    };

    export default RegistrationPage;
