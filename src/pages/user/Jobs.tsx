import React from 'react';
import { useState, useEffect, FormEvent } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Container, Typography, Avatar, Box, Input, TextField, FormHelperText, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import api from '../../services/server'


const Jobs: React.FC = () => {


    const [jobs, setJobs] = useState([]); 

    useEffect(() => {
        // get jobs and display them
        api.getJobs().then(res => {
            if (res !== undefined) {
                setJobs(res)
            }
        })
      }, []);

    const navigate = useNavigate();

    return (
        <Container>
            <Box>
                Jobs
                {
                    jobs.map(job =>
                        <div>
                            TA job
                        </div>)
                }
            </Box>
            <Button onClick={() => navigate('/post-job')}>Post Job</Button>
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

export default Jobs;