import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { añadir, borrar } from "../redux/actions";
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, myFavorites, añadir, borrar }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      borrar(id);
    } else {
      setIsFav(true);
      añadir({ id, name, status, species, gender, origin, image });
    }
  };
  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

  return (
    <div className="card">
    <div className="card2">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <NavLink to={`/detail/${id}`}>
        <h2 className="name">{name}</h2>
      </NavLink>
      <img src={image} alt="" className="image"/>
      <h3>{status}</h3>
      <h3>{species}</h3>
      <h3>{gender}</h3>
      <h3>{origin.name}</h3>
    </div>
    </div>
  );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    añadir: (char) => {
      dispatch(añadir(char));
    },
    borrar: (id) => {
      dispatch(borrar(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
