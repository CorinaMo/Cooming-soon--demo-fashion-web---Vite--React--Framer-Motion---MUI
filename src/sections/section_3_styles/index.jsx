import { Box } from "@mui/material";

import { VideoBackground } from "../components/videoBackground";
import { Marquee } from "./marquee";

const StylesSection = (() => {
    const line_1 = 'Feel FREE on any ocassion'

    return (
        <Box
            sx={{
                display: 'flex', width: '100vw', height: '100vh',
                flexDirection: 'column', justifyContent: 'center',
                overflow: 'hidden'
            }} >

            <VideoBackground key='Styles-section-video' source='/mujer_camisa.mp4' />

            <Box
                sx={{
                    display: 'flex', width: '100%', height: '100%',
                    flexDirection: 'column', justifyContent: 'center',
                    position: 'relative', paddingTop: 10
                }} >

                <div
                    style={{
                        display: 'flex', width: '100%', backgroundColor: 'rgba(0,0,0,0.5)',
                        bottom: 0, left: 0
                    }}
                >
                    <Marquee line={line_1.toUpperCase()} />

                </div>
            </Box>

        </Box>
    )
})

export default StylesSection;