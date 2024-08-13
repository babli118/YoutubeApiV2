import getVideoDl from "../libs/getVideoDl.js";

export const GetVideoDl = async (req, res) => {
  const url = req.body.url;
  const quality = req.body.quality;
  try {
    const dlLink = await getVideoDl(url, quality);

    res.status(201).json(dlLink);
  } catch (error) {
    res
      .status(409)
      .json({ error: "Something unexpected happened, please try again" });
  }
};
