import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar, Tabs, Tab, Paper } from '@mui/material';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import AuthService from './AuthService';
import ViewStudents from './ViewStudents';
import MarkAttendance from './MarkAttendance';
import ManageProfiles from './ManageProfiles';

const Home = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState("/view-students");



    useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname]);

    const handleLogout = () => {
        AuthService.logout();
        setIsAuthenticated(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            School Attendance System
                        </Typography>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ width: '100%', marginTop: '2rem' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="View Students" value="/view-students" />
                    <Tab label="Mark Attendance" value="/mark-attendance" />
                    <Tab label="Manage Profiles" value="/manage-profiles" />
                </Tabs>
            </Box>
            <Paper sx={{ marginTop: '2rem', padding: '2rem' }}>
                <Routes>
                    <Route path="/view-students" element={<ViewStudents />}  />
                    <Route path="/mark-attendance" element={<MarkAttendance />} />
                    <Route path="/manage-profiles" element={<ManageProfiles />} />
                </Routes>
            </Paper>
        </Container>
    );
};

export default Home;
