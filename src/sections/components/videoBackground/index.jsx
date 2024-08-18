import { useRef } from 'react'
import { Box } from '@mui/material'

import videoBackground1 from '/mujer_arboles.mp4'

export const VideoBackground = ({ source = videoBackground1 }) => {
  const videoRef = useRef();

  const slowMotion = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        zIndex: -1,
        overflow: 'hidden',
        position: 'absolute'
      }}
    >
      <video ref={videoRef} className='videoTag'
        autoPlay loop muted
        onLoadedData={slowMotion}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      >
        <source src={source} type='video/mp4' />
      </video>
    </Box>


  )

}

