import { useState } from 'react';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import MenuOutlined from '@mui/icons-material/MenuOutlined';

export const BoxMenu = ({ sections, scrollToSection }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ backgroundColor: 'transparent' }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ 
                    mr: 2, backgroundColor: '#000000',
                    borderTopLeftRadius: 0,
                    '&:hover': {
                        backgroundColor: lightGreen[800]
                    } }}
                id="box-menu-button"
                aria-controls={open ? 'box-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuOutlined />
            </IconButton>

            <Menu
                id="box-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
                sx={{
                    borderRadius: '100%', 
                    "& .MuiPaper-root": {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(10px)', borderRadius: '100%',
                        pl: 5, pr: 5
                    }
                }}
            >
                {
                    sections?.map((section, i) => {
                        return (
                            <MenuItem
                            key={'box-menu-section-' + i}
                                onClick={handleClose}
                                sx={{
                                    width: 150
                                }}
                            >
                                <Button
                                    sx={{
                                        fontFamily: 'Raleway',
                                        color: '#ffffff', width: '100%',
                                        '&:hover': {
                                            color: lightGreen[300]
                                        }
                                    }}
                                    onClick={() => scrollToSection(section.name)}
                                >
                                    {section?.name?.toUpperCase() || ""}
                                </Button>
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </div>
    );
}
