import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import { motion } from 'framer-motion';

import { SuccessDialog } from './success_dialog';


export const FormMock = () => {
    const [email, setEmail] = useState('')
    const dontmiss = "Don't miss any update!"
    const [emailError, setEmailError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (emailError || email.trim() === "") return
        else setOpenSuccess(true)
    }

    const onChange = (e) => {
        e.preventDefault()

        setEmail(e.target.value);

        if (e.target.validity.valid) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            style={{
                display: 'flex', flexDirection: 'column', pl: { md: 10 },
                width: '100%'
            }}
        >

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex', flexDirection: 'column', pl: { md: 10 },
                    width: '100%'
                }}
                autoComplete="on"
            >
                <Typography
                    variant='h6' component='span'
                    sx={{ fontFamily: 'Raleway', lineHeight: 1.1, pb: 4 }}
                >
                    {dontmiss.toUpperCase()}
                </Typography>

                <TextField
                    required
                    error={emailError}
                    id="email-field" label="Enter your email"
                    variant="standard" type='email'
                    helperText="i.e. myemail@example.com"
                    value={email}
                    onChange={onChange}
                />
                <Box sx={{ pt: 6 }}>
                    <Button
                        type='submit'
                        sx={{
                            display: 'flex', width: '100%', alignSelf: 'flex-end',
                            backgroundColor: '#000000',
                            '&:hover': {
                                backgroundColor: lightGreen[800],
                                color: '#ffffff'
                            }
                        }}
                    >
                        SUBMIT
                    </Button>
                </Box>
                <SuccessDialog success={openSuccess} />

            </Box>
        </motion.div>
    );
}