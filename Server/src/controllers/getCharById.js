const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios(`${URL}/${id}`);
    if (!data.name) throw new Error("not found");
    const character = {
      id: character.id,
      name: character.name,
      status: character.status,
      origin: character.origin,
      image: character.image,
      gender: character.gender,
      species: character.species,
    };
    return res.status(200).json(character)
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};
