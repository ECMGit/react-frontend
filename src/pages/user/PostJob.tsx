import React from 'react';
import { useState, FormEvent } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Container, Typography, Avatar, Box, Input, TextField, FormHelperText, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';


const PostJob: React.FC = () => {

    const [courseId, setCourseId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [courseSchdule, setCourseSchedule] = useState("");
    const [totalHour, setTotalHour] = useState("");
    const [maxTaCount, setMaxTaCount] = useState("");
    const [requiredCoursem, setRequiredCourse] = useState("");
    const [requiredSkills, setRequiredSkills] = useState("");
    const [TaStats, setTaStats] = useState("");
    const [notes, setNotes] = useState("");
    const [deadline, setDeadline] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = () => {
        console.log("submit form");


    }





    return (
        <Container maxWidth="sm">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }} >
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Box component="form" onSubmit={handleSubmit} mt={3}>
                    <TextField label="" margin="normal" required fullWidth autoComplete="name" onChange={(e) => {}} autoFocus />
                    <TextField label="Email Address" margin="normal" required fullWidth autoComplete="email" onChange={(e) => {} } />
                    <TextField label="Password" margin="normal" required fullWidth type="password" autoComplete="new-password" onChange={(e) => {}} />
                    <LoadingButton type="submit" variant="contained" loading={loading} sx={{ mt: 4, mb: 3 }}>Post Jobr</LoadingButton>
                    <Button component={RouterLink} variant="text" to='/home' sx={{ mt: 4, mb: 3 }} >Cancel</Button>
                    <FormHelperText>{message}</FormHelperText>
                </Box>
            </Box>
        </Container>
    );

    function handleUploadClick() {
        document.getElementById('profileUpload')?.click();
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            // Handle the file upload here
        }
    }
};

export default PostJob;