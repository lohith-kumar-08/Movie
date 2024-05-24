const Movie =({item})=>{
    console.log(item);
    return <>
    <center className="card eachmovie">
  <img src={item.Poster} className="card-img-top hover-zoom" alt="..."/>
  <div className="card-body body">
 <p>{item.Title}</p>
 <p>{item.Year}</p>
 <p>{item.imdbID}</p>
  </div>
</center>
    </>
}
export default Movie;