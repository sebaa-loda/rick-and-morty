import SearchBar from "./SearchBar"
import { NavLink, useNavigate } from "react-router-dom"

export default function Nav({onSearch, random, setAccess}){

    const logout = () => {
        setAccess(false)
    } 

    return (
        <nav>
            <div className="nav">
            <SearchBar  className="searchBar" onSearch={onSearch}/>
            <button className="btn1" onClick={random}>Random Pick</button>
            <button className="btn">
                <NavLink className="link" to="/about">About</NavLink>
            </button>
            <button className="btn">
                <NavLink className="link" to="/home">Home</NavLink>
            </button>
            <button className="btn">
                <NavLink className="link" to="/favorites">Favorites</NavLink>
            </button>
            <button className="btn" onClick={logout}>Log Out</button>
            </div>
        </nav>
    )
}