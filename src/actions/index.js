import Axios from 'axios';

export const UPDATE_LIST = 'UPDATE_LIST';

export function getVideos(options) {
  console.log(options);
  var videos = Axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    }
  });
  console.log(videos);
  return {
    type: UPDATE_LIST,
    payload: videos
  };
}
