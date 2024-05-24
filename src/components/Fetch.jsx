import { useDispatch } from "react-redux";
import { movieactions } from "../store/movieslice";
import { useEffect} from "react";
const Fetch=()=>{
    const dispatch=useDispatch();
    useEffect(() => {
        fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
            .then(response => response.json())
            .then(data => dispatch(movieactions.addmovies(data.Search)));
    }, []);
  
    return <>
    </>
}
export default Fetch;