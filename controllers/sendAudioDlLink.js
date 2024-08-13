import getAudioDl from "../libs/getAudioDl.js";

export const sendAudioDlLink = async (req, res) => {
  try {
    const dlLink = await getAudioDl(req.body.url);

    res.status(201).json(dlLink);
  } catch (error) {
    res
      .status(409)
      .json({ error: "Something unexpected happened, please try again" });
  }
};
