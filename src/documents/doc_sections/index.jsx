import { Box, Typography } from "@mui/material"

export const DocSections = ({ title, children}) => {

    return (
        <Box sx={{ pt: 6, pl: { xs: 2, md: 16 }, pr: { xs: 2, md: 16 } }}>
            <Typography 
                variant="h5" component="h2"
                color='primary'
                sx={{
                    fontFamily: 'Raleway', fontWeight: 'bold'
                }}
            >
                {title}
            </Typography>
            
            <Typography 
                variant="body2" component="div" 
                sx={{
                    fontFamily: 'Raleway', fontSize: 16, pt: 3,
                    textIndent: 16
                }}
            >
                {children}
            </Typography>
        </Box>
    )
}