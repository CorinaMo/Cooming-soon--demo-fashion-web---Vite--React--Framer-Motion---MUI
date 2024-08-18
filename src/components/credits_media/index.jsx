import { Link, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

export const CreditsMedia = ({ mediaTag, author, linkAuthor, linkMedia, nameWeb, linkColor= lightGreen[500], baseColor= '#ffffff' }) => {

    return <Typography color="#FFFFFF" fontSize={11} sx={{ pb: 1, pl: 2, color: baseColor }}>
        {mediaTag} by
        {' '}
        <Link href={linkAuthor} style={{ color: linkColor }}>
            {author}
        </Link>
        <b>{' | '}</b>
        <Link href={linkMedia}  style={{ color: linkColor }}>
            {nameWeb}
        </Link>
    </Typography>
}

