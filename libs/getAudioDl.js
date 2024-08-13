const getAudioDl = async (url) => {
  try {
    const apiUrl = `http://localhost:9002/api/json`;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const requestBody = {
      url: url,
      aFormat: "mp3",
      dubLang: false,
      isAudioOnly: true,
      isNoTTWatermark: false,
      filenamePattern: "basic",
    };

    const dlLinkReq = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    const dlLink = await dlLinkReq.json();
    return { dlLink };
  } catch (error) {
    console.log(error);
  }
};
export default getAudioDl;
