import { Typography } from "@mui/material";
import { motion } from "framer-motion";


export const Marquee = ({ line }) => {
    const long = window.innerWidth

    const marqueeVariants = {
        animate: {
            x: [long, - (long + 200)],
            transition: {
                x: {
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear",
                    repeatType: "loop"
                },
            },
        },
    };

    return (
        <div>
            <div style={{
                display: 'flex', alignItems: 'center',
                flexDirection: 'column',
                width: '100vw', maxWidth: '100%',
                height: '100%',
                overflowX: 'hidden',
            }}>

                <motion.div
                    className="track"
                    variants={marqueeVariants}
                    animate="animate"
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >
                    <Typography variant="h1" component='div'
                        sx={{
                            fontSize: { xs: '4rem', md: '8rem' }, fontFamily: 'Raleway',
                            color: '#ffffff', lineHeight: 0.8, textAlign: 'left',
                            paddingTop: 2, paddingBottom: 2
                        }}
                    >
                        {line || ''}
                    </Typography>
                </motion.div>
            </div>
        </div>
    );
};
