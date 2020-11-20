import React from 'react'
import './style.css'

//importando componentes
import YouTube from 'react-youtube';

interface VIDEO_PLAYER{
    videoId:string
}

const VideoPlayer: React.FC<VIDEO_PLAYER> = (props) => {
    return(
        <div className="container-video">
            <YouTube videoId={props.videoId} opts={{
                    height: '460',
                    width: '820',
                    playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 1,
                    },
                }} 
            />
        </div>
    )
}

export default VideoPlayer