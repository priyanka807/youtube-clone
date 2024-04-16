import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import { useState,useEffect } from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import {fetchApi} from  '../utils/fetchApi'


export default function Feed() {
  const [selectedCategory,setSelectedCategory] = useState('New')
  const [video,setVideo] = useState([])

  useEffect(() => {
  
       
    fetchApi(`/search?q=${selectedCategory}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`)  //use of search api
    
 
      .then((data) => setVideo(data.items))  //name,video,title,chhanel,description
    }, [selectedCategory]);

console.log(selectedCategory,'selectedCategory')
  return (
    <>

   <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "87vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar  selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}/>
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "white" }}>
         {selectedCategory}<span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>
  <Video video={video}/>
       
      </Box>

    </Stack>

  
    </>
  
  )
}
