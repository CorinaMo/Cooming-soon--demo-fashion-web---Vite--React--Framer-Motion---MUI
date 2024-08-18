import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";
import { motion } from "framer-motion";

import { Marquee } from "../marquee";
import { CreditsMedia } from "../../../components/credits_media";

const styles3Data = {
    title: 'The fabrics your skin dreams of',
    text: 'Our fashion house is a fictional company. This is a small web demo made with Vite, React, Framer Motion and Material UI.',
    images: [
        {
            image: '/styles_section/minh-pham-jSnIlrcn69Y-unsplash.jpg',
            alt: 'woman in front of the sea with casual dress',
            backText: ['Craft', 'with love...'],
            credits: {
                mediaTag: 'Picture',
                author: 'Minh Pham',
                linkAuthor: 'https://unsplash.com/es/@minhphamdesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                linkMedia: 'https://unsplash.com/es/fotos/mujer-de-pie-sobre-una-superficie-de-baldosas-jSnIlrcn69Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                nameWeb: 'Unsplash',
            }
        },
        {
            image: '/styles_section/sasha-freemind-DNbphZCOilE-unsplash.jpg',
            alt: 'woman wearing a white casual dress. Photoshoot in Nature',
            backText: ['Live', 'love, laugh...'],
            credits: {
                mediaTag: 'Picture',
                author: 'Sasha Freemind',
                linkAuthor: 'https://unsplash.com/es/@sashafreemind?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                linkMedia: 'https://unsplash.com/es/fotos/mujer-en-camisa-blanca-de-manga-larga-sosteniendo-flores-blancas-DNbphZCOilE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                nameWeb: 'Unsplash',
            }
        },
    ]
}


const StylesSection_3 = () => {
    const line = "Dream with us..."

    return <Box
        sx={{
            display: 'flex', width: '100vw', height: '100vh',
            flexDirection: 'column', justifyContent: 'center',
            overflow: 'hidden', position: 'relative'
        }} >

        <Box sx={{
            display: 'flex', width: '100vw', height: '100vh',
            flexDirection: { xs: 'column', md: 'row' },
            backgroundColor: teal[500],
        }}>
            {
                styles3Data?.images?.map((image, i) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, translateX: i > 0 ? 200 : -200 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1, translateX: 0 }}
                            transition={{ duration: 3, delay: 1, bounce: 0.8 }}
                            key={`image-styles-3-${i}`}
                            style={{ overflowX: 'hidden' }}

                        >
                            <Box sx={{
                                display: 'flex', width: { xs: '100vw', md: '50vw' },
                                height: { xs: '50vh', md: '100vh' },
                                flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                overflow: 'hidden',
                                backgroundImage: `url("${image.image}")`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <Box sx={{ pr: 4 }}>
                                    <CreditsMedia
                                        author={image.credits.author || ''}
                                        linkAuthor={image.credits.linkAuthor || ''}
                                        linkMedia={image.credits.linkMedia || ''}
                                        mediaTag={'Image'}
                                        nameWeb={image.credits.nameWeb || ''}
                                        key={`credits_styles3-${image.image || i}`}
                                    />
                                </Box>
                            </Box>
                        </motion.div>
                    )
                })
            }
        </Box>

        <Box
            sx={{
                display: 'flex', width: '100%', height: '100%',
                flexDirection: 'column', justifyContent: 'center',
                zIndex: 10, position: 'absolute'
            }} >
            <div
                style={{
                    display: 'flex', width: '100%', height: 'fit-content', backgroundColor: 'rgba(0,0,0,0.5)',
                    bottom: 0, left: 0,
                }}
            >
                <Marquee line={line.toUpperCase()} />
            </div>
        </Box>


    </Box>

}

export default StylesSection_3;