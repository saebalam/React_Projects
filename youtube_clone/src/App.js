import React,{useState} from 'react';
import './App.css';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core'
import { SearchBar } from './components/SearchBar';
import { VideoDetail } from './components/VideoDetail';
import {VideoList} from './components/VideoList'

function App() {
  const [videos,setVideos]=useState([])
  const [selectedVideo,setSelectedVideo]=useState({id:{}, snippet:{}})

  const selectedVideoHandler=()=>{
    setVideos()
  }

  return (
    <>
      <Grid style={{justifyContent:'center'}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spaxing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail selectedVideo={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={selectedVideoHandler}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  async function handleSubmit(searchTerm){
    const {data: {items:videos}} = await youtube.get("search",{
      params:{
        part:'snippet',
        maxResults:6,
        key:'AIzaSyBFIaHrzuLqZ8PdVTj30ena6F0BGmaaa7g',
        q:searchTerm
      }
    })
    setVideos(videos)
    setSelectedVideo(videos[0])
  }
}

export default App;
