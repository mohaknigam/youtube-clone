import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <Link to={`/watch?v=${videoInfo.id}`}>
      <div className="flex flex-col justify-around gap-3 shadow-lg m-3 w-auto h-80  p-2">
        <img
          src={thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-lg"
        />
        <div className="flex flex-col w-72 line-clamp-2">
          <p className="font-bold">{title}</p>
          <div className="flex flex-col">
            <p>{channelTitle}</p>
            <p>{viewCount} Views</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
