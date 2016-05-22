import React from 'react';
import VideoListItem from  './video_list_item';

const VideoList = (props)=> {

    var items=props.videos.map(i =>
        <VideoListItem key={i.etag} onVideoSelect={props.onVideoSelect} video={i}/>
    );

    return (
        <ul className="col-md-4 list-group">
            {items}
        </ul>
    )
};

export default VideoList;