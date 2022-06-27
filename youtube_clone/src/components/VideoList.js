import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'

export const VideoList = (props) => {
    const listOfVideos = () => {
        
    }
    return (
        <Grid container spacing={10}>
            {props.videos.map((video) => {
            return (
                <Grid item xs={12} className="list">
                    <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => props.onVideoSelect(video)}>
                        <img style={{ marginRight: '20px' }} alt="thumbnail" src='video.snippet.thumbnails.medium.url' />
                        <Typography variant='subtitle1'>
                            <b>{video.snippet.title}</b>
                        </Typography>
                    </Paper>
                </Grid>
            )
        })}
        </Grid>
    )
}
