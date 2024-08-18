import { Box } from "@mui/material";
import { SectionCard } from "../components/cards";

const aboutData = {
    title: 'Nature drive us',
    text: 'Our fashion house is a fictional company. This is a small web demo made with Vite, React, Framer Motion and Material UI.',
    images: [

        {
            image: '/about/see-plus-oeUlNw-R9x8-unsplash.jpg',
            alt: 'woman with leaf in front of face, dark casual knitted dress',
            backText: ['Cute', 'words here...'],
            credits: {
                mediaTag: 'Picture',
                author: 'See Plus',
                linkAuthor: 'https://unsplash.com/es/@seeplus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                linkMedia: 'https://unsplash.com/es/fotos/una-mujer-sosteniendo-una-hoja-sobre-su-cara-oeUlNw-R9x8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                nameWeb: 'Unsplash',
            }
        },
        {
            image: '/about/averie-woodard-WsSdUPXVb4M-unsplash.jpg',
            alt: 'woman with dark blue dress in the water with flowers floating',
            backText: ['Cute', 'words there...'],
            credits: {
                mediaTag: 'Picture',
                author: 'Averie Woodard',
                linkAuthor: 'https://unsplash.com/es/@averieclaire?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                linkMedia: 'https://unsplash.com/es/fotos/mujer-nadando-cubierta-por-margaritas-blancas-WsSdUPXVb4M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
                nameWeb: 'Unsplash',
            }
        },
    ]
}


const AboutSection = (() => {

    return <Box
        sx={{
            display: 'flex', width: '100vw', height: '100vh',
            flexDirection: 'column', justifyContent: 'center',
        }} >
        <SectionCard key='About-section-card' cardInfo={aboutData} />
        <div style={{
            backgroundImage: 'url("/about/leela-shyam-chvyv2qXpRY-unsplash.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw', height: '100vh', opacity: 0.10, filter: 'grayscale(100%)',
            position: 'absolute'
        }} />


    </Box>

})

export default AboutSection;