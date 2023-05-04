const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    if (!data.name) throw new Error("Not found") 

      const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
      };

      return res.status(200).json(character);    

   
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};