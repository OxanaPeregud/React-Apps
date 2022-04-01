import {useState} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films/').then(response => {
            return response.json();
        }).then(data => {
            const transformedMovies = data.results.map(movie => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    releaseDate: movie.release_date,
                    openingText: movie.opening_crawl
                }
            });
            setMovies(transformedMovies);
        });
    }

    return (
        <>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies}/>
            </section>
        </>
    );
}

export default App;
