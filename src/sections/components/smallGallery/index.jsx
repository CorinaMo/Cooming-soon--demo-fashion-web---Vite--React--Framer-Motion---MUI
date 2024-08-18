import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import { CreditsMedia } from '../../../components/credits_media';
import { lightGreen } from '@mui/material/colors';

export const SmallGallery = ({ itemData, hasBackData = true }) => {

    return (
        <Box
            sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100%', overflowY: 'visible'
            }}>
            <ImageList
                variant="masonry" cols={2} gap={8}
                style={{ overflow: 'visible' }}>
                {itemData?.images?.map((item, i) => {

                    return (
                        <AnimatePresence mode='wait' key={'pic-' + i} >
                            <motion.div
                                initial={{ opacity: 0, x: -100, scale: 0.5, translateY: -100 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1, translateY: 0 }}
                                transition={{ duration: 3, delay: 0.7, bounce: 0.8 }}
                            >
                                <ImageListItem key={item.image} style={{ overflow: 'hidden', position: 'relative' }} >
                                    <img
                                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.image}?w=248&fit=crop&auto=format`}
                                        alt={itemData.alt}
                                        style={{
                                            borderRadius: 20,
                                        }}
                                        loading="lazy"
                                    />
                                    {
                                        hasBackData ? (
                                            <motion.div
                                                style={{
                                                    display: 'flex', opacity: 0,
                                                    backgroundColor: '#ffffff', borderRadius: 20,
                                                    position: 'absolute', zIndex: 400,
                                                    width: '100%', height: '100%', top: 0, left: 0,
                                                    justifyContent: 'center', alignItems: 'center', textAlign: 'center'
                                                }}
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                            >
                                                <Typography
                                                    sx={{ lineHeight: 0.9, fontSize: { xs: 20, md: 30 } }}
                                                    variant='body1' component='div'
                                                    fontFamily='Raleway' fontStyle='italic'>
                                                    <Typography
                                                        sx={{ lineHeight: 0.9, fontSize: { xs: 45, md: 90 } }}
                                                        variant='h3' component='div'
                                                        color='primary'
                                                        fontFamily='Sassy Frass' fontWeight='bold'>
                                                        {item.backText[0] + ' ' || ''}
                                                    </Typography>
                                                    {item.backText[1] + ' ' || ''}
                                                </Typography>
                                            </motion.div>
                                        ) : null
                                    }

                                    <CreditsMedia
                                        author={item.credits.author || ''}
                                        linkAuthor={item.credits.linkAuthor || ''}
                                        linkMedia={item.credits.linkMedia || ''}
                                        mediaTag={'Image'}
                                        nameWeb={item.credits.nameWeb || ''}
                                        key={`credits-${item.image || i}`}
                                        linkColor='#000000'
                                        baseColor={lightGreen[900]}
                                    />

                                </ImageListItem>
                            </motion.div>
                        </AnimatePresence>
                    )
                })}
            </ImageList>
        </Box >
    );
}
