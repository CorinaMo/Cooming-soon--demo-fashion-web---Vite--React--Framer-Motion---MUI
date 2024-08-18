import { Box } from '@mui/material'

import { CreditsMedia } from '../../components/credits_media'
import { VideoBackground } from '../components/videoBackground'
import { AnimatedTitle } from './animatedTitle'
import { WildLogo } from '../../components/demo_logo'

const CoverSection = () => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex', width: '100vw', height: '100vh',
                    flexDirection: 'column', overflow: 'hidden', position: 'relative'
                }} >

                <VideoBackground />

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 10, position: 'absolute', width: '100%', zIndex: 2 }}>
                    <WildLogo />
                </Box>

                <Box
                    sx={{
                        display: 'flex', width: '100%', height: '100%', flexDirection: 'column',
                        justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)',
                        textAlign: 'left',
                    }}
                >
                    <Box sx={{ pb: { xs: 15, md: 10 }, color: '#FFFFFF' }}>
                        <AnimatedTitle />
                    </Box>

                    <CreditsMedia author="Jose Roberto de Lima Kililla"
                        mediaTag="Video"
                        linkAuthor="https://pixabay.com/es/users/kililla-21486825/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=77237"
                        linkMedia="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=77237"
                        nameWeb="Pixabay"
                    />
                </Box>
                
            </Box>
        </>
    )
}

export default CoverSection;
