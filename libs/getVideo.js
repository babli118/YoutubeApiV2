import { Client } from "youtubei";

const getVideo = async (url) => {
  const youtube = new Client();
  try {
    const videores = await youtube.getVideo(url);

    console.log("shortres: ", videores);

    const video = {
      title: videores.title,
      thumbnails: videores.thumbnails,
      uploadDate: videores.uploadDate,
      duration: videores.duration,
      channel: videores.channel.name,
      watchingCount: videores.watchingCount,
      channelThumbnails: videores.channel.thumbnails,
      viewCount: videores.viewCount,
      id: videores.id,
    };
    return { video };
  } catch (error) {
    console.log("error:", error);
  }
};
export default getVideo;
