import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

export const AnimatedTitle = () => {
    return <>
        <motion.div
            initial={{ opacity: 0, scale: 2.5, rotate: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 2, delay: 0.8 }}

        >
            <Typography variant="h1" component="h2"
                sx={{
                    height: 'fit-content', pl: { md: 5, lg: 10 }, lineHeight: 0.8,
                    fontFamily: 'Sassy Frass', fontSize: { xs: 90, md: 250 },
                    fontWeight: 'bold'
                }} >
                Wild
            </Typography>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 3, rotate: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 2, delay: 0.8 }}
        >
            <Typography variant="h1" component="h2"
                sx={{
                    pl: { xs: 2, md: 8, lg: 20 }, fontSize: { xs: 65, md: 140, lg: 170 },
                    whiteSpace: 'pre-wrap', letterSpacing: { md: '1.5rem' },
                    fontWeight: 600, fontFamily: 'Raleway'
                }}>
                {'FASHION\nHOUSE'}
            </Typography>
        </motion.div>
    </>
}