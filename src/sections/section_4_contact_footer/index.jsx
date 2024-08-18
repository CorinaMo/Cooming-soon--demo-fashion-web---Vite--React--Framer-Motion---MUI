import { Box, Link, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from "framer-motion";

import { FormMock } from "./form";
import { BirdSVG } from "../../components/demo_logo/birdSVG";
import { Docs } from "../../documents";


const FooterSection = (() => {

    const contact = 'Contact Developer'.toUpperCase();

    return (
        <Box
            sx={{
                display: 'flex', width: '100vw', height: '100vh',
                flexDirection: 'column'
            }} >
            <div style={{
                backgroundImage: 'url("/about/leela-shyam-chvyv2qXpRY-unsplash.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', zIndex: -1,
                width: '100vw', height: '100vh', opacity: 0.10, filter: 'grayscale(100%)',
                position: 'absolute'
            }} />

            <Box
                sx={{
                    display: 'flex', width: '100%', height: '100%',
                    flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        display: 'flex', width: { xs: '90%', md: '45%' },
                    }}
                >
                    <FormMock />
                </Box>

                <Box
                    sx={{
                        display: 'flex', width: { xs: '90%', md: '55%' },
                        flexDirection: 'column', justifyContent: 'center', gap: 6,
                        paddingTop: { xs: 10, md: 0 }
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3 }}
                    >
                        <Box
                            sx={{
                                display: 'flex', flexDirection: 'column',
                                alignSelf: 'center', pl: { md: 16 }, pr: { md: 16 }
                            }}
                        >
                            <Docs doc="Privacy" />
                            <Docs doc="Terms" />

                            <Link
                                href="https://www.linkedin.com/in/corina-morera-a70500a5"
                                sx={{
                                    display: 'flex', fontFamily: 'Raleway', pt: 2,
                                    fontSize: 12, fontWeight: 'bold', textAlign: 'center',
                                    alignSelf: 'center', alignItems: 'center', gap: 1
                                }}>
                                <AccountCircleIcon />
                                {contact}
                            </Link>
                        </Box>
                    </motion.div>
                </Box>
            </Box>

            <motion.div
                initial={{ opacity: 0.5, color: lightGreen[800] }}
                animate={{ opacity: 1, color: '#000000' }}
                transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
                style={{ width: '100%', textAlign: 'center' }}
            >
                <Typography variant="h4" component="span"
                    sx={{
                        fontFamily: 'Raleway',
                        paddingBottom: { xs: 3, md: 5 }, fontSize: { xs: '1.2rem', sm: '2rem' },
                        pl: 2, pr: 2, fontWeight: 'bold'
                    }}        >
                    We will open our doors very soon!
                </Typography>
            </motion.div>

            <Typography variant="h5" component="span"
                sx={{
                    fontFamily: 'Raleway', textAlign: 'center', pt: 2,
                    fontSize: { xs: '1rem', sm: '1.5rem' },
                    pl: 2, pr: 2
                }}
            >
                Something to share? Send us an email to <Link href="mailto:example@test.com">
                    example@test.com
                </Link>
            </Typography>
            <Typography variant="body1" component="span"
                sx={{
                    fontFamily: 'Raleway',
                    pb: { xs: 3, md: 5 }, pt: 4,
                    fontSize: 12, textAlign: 'center',
                    fontWeight: 'bold'
                }}        >
                (This is just a demo web. Not a real company)
            </Typography>

            <Box sx={{ maxHeight: 100, paddingBottom: { xs: 3, md: 5 } }} >
                <BirdSVG color="primary" />
            </Box>

        </Box>
    )
})

export default FooterSection;