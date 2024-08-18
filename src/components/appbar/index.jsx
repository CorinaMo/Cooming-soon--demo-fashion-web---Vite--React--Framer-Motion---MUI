import { motion } from 'framer-motion';
import { AppBar, Box, Toolbar } from '@mui/material';
import { teal } from '@mui/material/colors';
import { BarMenu } from './barmenu';
import { BoxMenu } from './boxmenu';

export const MenuAppBar = ({ sections, scrollToSection }) => {
  const sectionsOutOfMenu = ['styles_2', 'styles_3']
  const menuSections = sections?.filter(section => !sectionsOutOfMenu.includes(section.name))

  return (
    <motion.div
      style={{
        width: '100vw', zIndex: 15,
        backgroundColor: 'transparent', position: 'fixed',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <AppBar position="static" sx={{
        backgroundColor: 'transparent', 
        backdropFilter: "blur(10px)"
      }} >
        <div style={{ 
          backgroundColor: teal[900],
          position: 'fixed', width: '100%', height: '100%', opacity: 0.1
          }} />

        <Toolbar sx={{ color: '#FFFFFF', display: 'flex', justifyContent: 'space-between' }}>
         
          <BoxMenu sections={menuSections} scrollToSection={scrollToSection} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <BarMenu sections={sections} scrollToSection={scrollToSection} />
          </Box>

          <div style={{ 
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              backgroundColor: '#000000', width: 45, height: 45, pl: 15, borderRadius: '100%', borderTopRightRadius: 0,  }}>
            <span
              style={{ color: '#ffffff', fontFamily: 'Sassy Frass', fontWeight: 'bold', fontSize: 20 }}
            >W</span>
          </div>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

