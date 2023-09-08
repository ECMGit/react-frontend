import React, { useState, FormEvent } from 'react';
import {
  Box,
  Grid,
  Link,
  Container,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth";

const LoginPage: React.FC = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    setMessage("");
    setLoading(true);
    // Add your login logic here
    AuthService.login(username, password).then(
      () => {
        navigate("/home");
        // window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8,}}>
        <Typography component="h1" variant="h5"> Login </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={3}>
          <TextField label="Username" margin="normal" required fullWidth autoComplete="email" onChange={(e) => setUsername(e.target.value)} value={username} autoFocus />
          <TextField label="Password" margin="normal" required fullWidth type="password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="current-password" />
          <LoadingButton type="submit" variant="contained" loading={loading} sx={{ mt: 4, mb: 3 }}>Login</LoadingButton>
          <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Register"}
                </Link>
              </Grid>
            </Grid>
          <FormHelperText>{message}</FormHelperText>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
