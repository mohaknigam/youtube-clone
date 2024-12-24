export const buttonsList = [
  "All",
  "Music",
  "Mixes",
  "Podcasts",
  "Gaming",
  "Live",
  "React",
  "Coding",
  "Comedy",
];

const GOOGLE_API_KEY = "AIzaSyDhxaMmaKoVG2GxOoLOyzNevPp5E8iAyQ8";

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;
