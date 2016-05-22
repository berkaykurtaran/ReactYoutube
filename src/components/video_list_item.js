/**
 * Created by whiskey on 20.05.2016.
 */
import React from 'react'

const VideoListItem = (props)=> {


    return (
        <li onClick={()=>props.onVideoSelect(props.video)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img src={props.video.snippet.thumbnails.default.url} className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {props.video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;