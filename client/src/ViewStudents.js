import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const studentsData = [
    { id: 1, name: 'Kapilan Srikaran' },
    { id: 2, name: 'Kavitha Srikaran' },
    { id: 3, name: 'Sharaniya Srikaran' },
];

const ViewStudents = () => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                View Students
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsData.map(student => (
                            <TableRow key={student.id}>
                                <TableCell>{student.id}</TableCell>
                                <TableCell>{student.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ViewStudents;
