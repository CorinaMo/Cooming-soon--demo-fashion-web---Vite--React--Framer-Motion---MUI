import { Box } from "@mui/material";

import { SectionCard } from "../../components/cards";

const styles2Data = {
    title: 'The fabrics your skin dreams of',
    text: 'Our fashion house is a fictional company. This is a small web demo made with Vite, React, Framer Motion and Material UI.',
    images: [

        {
            image: '/styles_section/vladimir-yelizarov-PfbItsR8Gqo-unsplash.jpg',
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
            image: '/styles_section/xiaole-zheng-L6C2fgv-5Og-unsplash.jpg',
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
            image: '/styles_section/jonathan-borba-xkXhoo8_yZ0-unsplash.jpg',
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


const StylesSection_2 = (() => {

    return (
        <Box
            sx={{
                display: 'flex', width: '100vw', height: '100vh',
                flexDirection: 'column', justifyContent: 'center',
            }} >

            <SectionCard key='About-section-card' cardInfo={styles2Data} />

            <div style={{
                backgroundImage: 'url("/about/leela-shyam-chvyv2qXpRY-unsplash.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', zIndex: -1,
                width: '100vw', height: '100vh', opacity: 0.10, filter: 'grayscale(100%)',
                position: 'absolute'
            }} />
        </Box>
    )
})

export default StylesSection_2;