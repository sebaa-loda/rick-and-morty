import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
   const handleChange = (evento) => {
      setId(evento.target.value)
   }
   return (
      <div>
         <input className="search" placeholder="Enter a number" type='search' onChange={handleChange} value={id}/>
         <button className="add" onClick={() => {onSearch(id); setId("")}}><span>ADD</span></button>
      </div>
   );
}
