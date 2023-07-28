import { connect } from "react-redux"
import Card from "./Card"

const Favorites = ({myFavorites}) => {
    return (
        <div className="favorites">
        {myFavorites.map((char) => {
            return (
                <div className="cardFavorite">
                <Card
                id = {char.id}
                name = {char.name}
                status = {char.status}
                species = {char.species}
                gender = {char.gender}
                origin = {char.origin}
                image = {char.image}  
                />
                </div>
            )
        })}
        </div>
    )
}

const mapStateToProps = (state) => {
   return {myFavorites : state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites)
