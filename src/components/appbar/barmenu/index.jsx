import { useState } from 'react';
import { Button, ButtonGroup, Box, Menu, MenuItem } from '@mui/material';
import { lightGreen } from '@mui/material/colors';


export const BarMenu = ({ sections, scrollToSection }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = 'styles';
  const menuSections = sections?.filter(section => !['styles_2', 'styles_3'].includes(section.name));
  const styleSlides = sections.filter(section => section.name.toLowerCase().startsWith('style'));

  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, width: 'max-content',
        backgroundColor: 'black', justifyContent: 'center', alignSelf: 'center', borderRadius: 10, p: 1
      }}
    >
      {sections ? (
        <ButtonGroup variant="text" aria-label="Bar menu button group">
          {
            menuSections?.map((section) => {
              if (section.name) {
                return (
                  <div key={`${section.name}-section`}>
                    <Button
                      aria-label={`Go to ${section.name} section`}
                      sx={{
                        color: '#FFFFFF', fontFamily: 'Raleway', fontWeight: 600,
                        '&:hover': {
                          color: lightGreen[300]
                        }
                      }}
                      aria-controls={section.name === styles && open ? 'styles-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={section.name === styles && open ? 'true' : undefined}
                      onClick={(e) => section.name !== styles ? scrollToSection(section.name) : handleClick(e)}
                    >
                      {section.name?.toUpperCase()}
                    </Button>
                    <Menu
                      id="styles-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      sx={{
                        "& .MuiPaper-root": {
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          backdropFilter: 'blur(10px)',
                        }
                      }}
                    >
                      {
                        styleSlides?.map(slide => (
                          <MenuItem
                            key={`slide-menu-${slide.name}`}
                            aria-label={slide?.name?.replace('_', ' ').toUpperCase()}
                            sx={{
                              fontSize: 13, fontFamily: 'Raleway',
                              color: '#ffffff', backgroundColor: 'rgba(0,0,0,0.5)',
                              '&:hover': {
                                color: lightGreen[300]
                              }
                            }}
                            onClick={() => scrollToSection(slide.name)}>
                            {slide?.name?.replace('_', ' ')}
                          </MenuItem>
                        ))
                      }
                    </Menu>
                  </div>
                )
              }
            })}

        </ButtonGroup>
      ) : null}
    </Box>
  );

}