import React, { useState } from 'react';
import { Container, Typography, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const initialStudentsData = [
    { id: 1, name: 'Kapilan Srikaran' },
    { id: 2, name: 'Kavitha Srikaran' },
    { id: 3, name: 'Sharaniya Srikaran' },
];

const ManageProfiles = () => {
    const [students, setStudents] = useState(initialStudentsData);
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [currentStudent, setCurrentStudent] = useState({ id: null, name: '' });

    const handleClickOpen = (student = { id: null, name: '' }) => {
        setCurrentStudent(student);
        setEditing(Boolean(student.id));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentStudent({ id: null, name: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentStudent({ ...currentStudent, [name]: value });
    };

    const handleSave = () => {
        if (editing) {
            setStudents(students.map(student => (student.id === currentStudent.id ? currentStudent : student)));
        } else {
            setStudents([...students, { ...currentStudent, id: students.length + 1 }]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                Manage Student Profiles
            </Typography>
            <Button variant="contained" color="primary" onClick={() => handleClickOpen()} style={{ marginBottom: '1rem' }}>
                Add Student
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(student => (
                            <TableRow key={student.id}>
                                <TableCell>{student.id}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>
                                    <Button color="primary" onClick={() => handleClickOpen(student)}>Edit</Button>
                                    <Button color="secondary" onClick={() => handleDelete(student.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editing ? 'Edit Student' : 'Add Student'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={currentStudent.name}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ManageProfiles;
