let myFavorites = [];

const postFav =  (req,res) => {
    const character = req.body;

    myFavorites.push(character);

    return res.status(200).json(character)
}

const deleteFav = (req,res) => {
    const {id} = req.params;

    const characterFilter = myFavorites.filter((char) => char.id !== +id)

    return res.status(200).json(characterFilter)
}

module.exports = {
    postFav,
    deleteFav,
}