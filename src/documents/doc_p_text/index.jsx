import { Typography } from "@mui/material"

export const P = ({ children }) => {

    return (
        <Typography variant="body1" component="p" sx={{
            fontFamily: 'Raleway', pt: 4,
        }}>
            {children}
        </Typography>
    )
}