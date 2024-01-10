import React, {useState, useEffect} from 'react';
import '../css/Row.css'
import axios from "../axios";

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    // console.log(isLargeRow);

    const base_url = "https://image.tmdb.org/t/p/original/"
    const rowLarge = isLargeRow && "row-poster-large"
    // console.log(rowLarge);

    //variable outside of useEffect-->fetchUrl that's y [fetchUrl]
    useEffect(() => {
        async function fetchData() {
            const reqs = await axios.get(fetchUrl);
            setMovies(reqs.data.results)
            return reqs;
        }

        fetchData().then(r => console.log(r));
    }, [fetchUrl]);
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row-posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path) )&& (
                        <img key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                             className={`row-poster ${rowLarge}`} alt={movie.name}/>
                    )

                ))}
            </div>


        </div>
    )

}

export default Row;