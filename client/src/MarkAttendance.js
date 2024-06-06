import React, { useState } from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch } from '@mui/material';

const studentsData = [
    { id: 1, name: 'Kapilan Srikaran' },
    { id: 2, name: 'Kavitha Srikaran' },
    { id: 3, name: 'Sharaniya Srikaran' },
];

const MarkAttendance = () => {
    const [students, setStudents] = useState(studentsData);

    const toggleAttendance = (id) => {
        setStudents(students.map(student => 
            student.id === id ? { ...student, attendance: !student.attendance } : student
        ));
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                Mark Attendance
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Attendance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(student => (
                            <TableRow key={student.id}>
                                <TableCell>{student.id}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={student.attendance}
                                        onChange={() => toggleAttendance(student.id)}
                                        color="primary"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MarkAttendance;
