const getVideoDl = async (url) => {
  try {
    const apiUrl = `https://v4.mp3youtube.cc/api/converter`;
    const requestBody = {
      link: url,
      format: "mp3",
    };

    const dlLinkReq = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    const dlLink = await dlLinkReq.json();
    console.log(dlLink);
    return { dlLink };
  } catch (error) {
    console.log(error);
  }
};
export default getVideoDl;
