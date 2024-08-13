import { Client } from "youtubei";

const getSearch = async (searchWords) => {
  const youtube = new Client();

  try {
    const videores = await youtube.search(searchWords);

    const videoData = videores.items.map((video) => {
      let channelName = "";
      if (video.channel && video.channel.name) {
        channelName = video.channel.name;
      }
      let channelThumbnail = "";
      if (video.channel && video.channel.thumbnails) {
        channelThumbnail = video.channel.thumbnails[0].url;
      }
      return {
        title: video.title,
        thumbnails: video.thumbnails,
        duration: video.duration,
        channel: channelName,
        channelThumbnail: channelThumbnail,
        views: video.viewCount,
        id: video.id,
      };
    });
    return { videoData };
  } catch (error) {
    console.log(error);
  }
};
export default getSearch;
