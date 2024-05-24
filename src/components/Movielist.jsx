import { useSelector } from "react-redux";
import Movie from "./Movie";
const Movielist=()=>{
    const movielist=useSelector(store=>store.movies)
    return <div className="moviescontainer">
    {movielist.map((item)=>(
      <Movie key={item} item={item}></Movie>
     ))}
    </div>
}
export default Movielist;