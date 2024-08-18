import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';

import { Privacy } from '../privacy';
import { TermsAndconditions } from '../terms';

export const DocumentsModal = ({ doc }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                sx={{
                    color: '#000000', fontFamily: 'Raleway',
                    fontSize: 12,
                }}
                onClick={handleOpen}>
                {doc === 'Privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby={"modal-" + 'doc'}
                aria-describedby={"modal-" + doc === 'Privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{
                    position: 'absolute', width: { xs: '95%', md: '70%' },
                    height: { xs: '90%', md: '75%' }, overflowY: 'scroll',
                    bgcolor: 'background.paper',
                    boxShadow: 24, p: 4,
                }}>

                    {
                        doc === 'Privacy' ? (<Privacy />) : (<TermsAndconditions />)
                    }

                </Box>
            </Modal>
        </>
    );
}
