import getSearch from "../libs/getSearch.js";

const sendSearch = async (req, res) => {
  const searchWords = req.body.searchWords;

  // Check if a match is found

  try {
    const videoInfo = await getSearch(searchWords);

    res.status(201).json(videoInfo);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export { sendSearch };
