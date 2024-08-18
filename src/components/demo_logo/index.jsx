import { Box, Typography } from "@mui/material";
import { lightGreen, purple } from "@mui/material/colors";
import { BirdSVG } from "./birdSVG";

export const WildLogo = ({ fcolor="#ffffff", birdcolor= lightGreen[500] }) => {

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'row', maxWidth: { xs: 165, md: 200 } }}>
            <Box sx={{ maxHeight: 80 }}>
            <BirdSVG color={birdcolor} />
            </Box>

            <Box sx={{ 
                display: 'flex', flexDirection: 'column', 
                pr: { xs: 1, md: 2 }, alignSelf: 'center', ml: { xs: -1.75, md: -2.75 }
                }}>
                <Typography variant="h1" component="h2"
                    sx={{
                        height: 'fit-content', lineHeight: 1,
                        fontFamily: 'Sassy Frass', fontSize: { xs: 36, md: 45 },
                        fontWeight: 'bold', textAlign: 'center', color: fcolor
                    }} >
                    Wild
                </Typography>
                <Typography variant="h1" component="h2"
                    sx={{
                        height: 'fit-content', pl: { xs: 2, md: 3 }, lineHeight: 1,
                        fontFamily: 'Raleway', fontSize: { xs: 10, md: 13 },
                        textAlign: 'center', color: fcolor
                    }} >
                    FASHION HOUSE
                </Typography>
            </Box>

        </Box>
    </>
}