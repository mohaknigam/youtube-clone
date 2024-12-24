import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../../utils/constants";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState([]);

  const fetchVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      console.log(json);

      if (json?.items) {
        setVideosData(json?.items);
      } else {
        console.error("Invalid response format", json);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return videosData?.length > 0 ? (
    <div className="flex flex-wrap p-5">
      {videosData.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  ) : (
    <div>No Videos!</div>
  );
};

export default VideoContainer;
