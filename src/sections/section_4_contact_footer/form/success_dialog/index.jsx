import { useEffect, useState } from 'react';
import { Alert, Box, Collapse, IconButton } from '@mui/material';
import CloseOutlined from '@mui/icons-material/CloseOutlined'

export const SuccessDialog = ({ success }) => {
    const [open, setOpen] = useState(success || false);

    useEffect(() => {
        setOpen(success)
    }, [success])

    return (
        <Box sx={{ width: '100%', pt: 3 }}>
            <Collapse in={open}>
                <Alert
                    variant="outlined"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseOutlined fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2, backgroundColor: '#ffffff' }}
                >
                    Email sent! Welcome to a our Wild family!
                </Alert>
            </Collapse>
        </Box>
    );
}
