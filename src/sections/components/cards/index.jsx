import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { SmallGallery } from "../smallGallery";

export const SectionCard = ({ cardInfo }) => {

    return (
        <Box
            sx={{
                display: 'flex', alignSelf: 'center', width: { xs: '90%', sm: '75%' },
                height: '100vh', alignItems: 'center',
            }}>

            <Box
                sx={{
                    display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%', height: { xs: '90%', sm: '70%' }, alignSelf: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: { xs: '80%', sm: '60%' },
                        height: { xs: '45%', sm: '100%' },
                        position: 'relative', justifyContent: 'center',
                        alignSelf: 'center'
                    }}>

                    <SmallGallery itemData={cardInfo} />

                </Box>

                <Box sx={{
                    display: 'flex', flexDirection: 'column',
                    width: { xs: '100%', sm: '40%' }, height: { xs: 'fit-content', sm: '100%' },
                    justifyContent: { xs: 'flex-start', sm: 'center' }, pl: { xs: 0, sm: 3 }
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 1.6, rotate: 30 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                        transition={{ duration: 3, delay: 0.7 }}
                    >
                        <Typography variant="h1" component="div" color="primary.dark"
                            sx={{
                                fontFamily: 'Sassy Frass', textAlign: { xs: 'center', sm: 'left' },
                                fontWeight: 'bold', lineHeight: 0.7
                            }}>
                            {cardInfo?.title || ''}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -150, scale: 1.4, rotate: 40 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                        transition={{ duration: 3, delay: 0.7 }}
                    >
                        <Typography variant="h6" color="text.secondary"
                            sx={{
                                textAlign: { xs: 'center', sm: 'left' },
                                fontFamily: 'Raleway', pr: { xs: 0, sm: 3 }, pl: { xs: 0, sm: 3 },
                                pt: 4, fontSize: 16, fontWeight: 600
                            }}
                        >
                            {cardInfo?.text || ''}
                        </Typography>
                    </motion.div>
                </Box>

            </Box>
        </Box >
    )
}