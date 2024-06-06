import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import AuthService from './AuthService';

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await AuthService.login(username, password);
            setIsAuthenticated(true);
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
            >
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Login
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    style = {{width: 400}}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    margin="normal"
                    style = {{width: 400}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p></p>
                <Button
                    variant="contained"
                    color="primary"
                    style = {{width: 400}}
                    onClick={handleLogin}
                >
                    Login
                </Button>
                {error && <Alert severity="error" style={{ marginTop: '1rem' }}>{error}</Alert>}
            </Box>
        </Container>
    );
};

export default Login;
