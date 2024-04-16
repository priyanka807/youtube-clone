import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail , marginTop}) => {
console.log(channelDetail,'channelDetail')
  return(
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
    margin:'auto',
    marginTop,

    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '150px', width: '200px', mb: 2,ml:6, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6" sx={{textAlign:'left' }}>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray',textAlign:'left' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
  )
 
}

export default ChannelCard;

