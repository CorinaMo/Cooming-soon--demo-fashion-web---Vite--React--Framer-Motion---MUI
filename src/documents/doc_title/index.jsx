import { Typography } from "@mui/material"
import { lightGreen } from "@mui/material/colors"

export const Title = ({ title }) => {

    return (
        <Typography variant="h2" component="h1" sx={{
            textAlign: 'center', fontFamily: 'Sassy Frass', fontWeight: 'bold', pt: 4, pb: 4,
            textDecoration: 'underline', textDecorationColor: lightGreen[500]
        }}>
            {title}
        </Typography>
    )
}