import { useEffect, useRef, useState } from "react";

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const movieIDs = useRef([]);
  const movieImgs = useRef([]);
  const movieFetched = useRef(false);

  // tmdb stuff
  const TMDB_Key = "b909ede7ad4bfb248ebfa85982ca417c";
  const TMDB_BASE_URL = "https://image.tmdb.org/t/p/w500";

  // trakt stuff
  const TRAKT_ID =
    "b0e884b0252e486f1e0b66c1678b12b9c5c6dbc800a47bd16e07f0a774428a07";
  const USERNAME = "NotRaj05";

  useEffect(() => {
    // fetch movie data from trakt and tmdb
    console.log("fetching data from trakt & tmdb");

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.trakt.tv/users/${encodeURIComponent(USERNAME)}/history/movies`,
          {
            headers: {
              "Content-Type": "application/json",
              "trakt-api-version": "2",
              "trakt-api-key": TRAKT_ID,
            },
          },
        );

        if (!response.ok) {
          const body = await response.text().catch(() => "");
          throw new Error(
            `Trakt API failed ${response.status} ${response.statusText}: ${body}`,
          );
        }

        const data = await response.json();
        setMovies(data);

        // extract movie id's from movies --> moviesID
        movieIDs.current = data.map((movi) => movi.movie.ids.imdb);
        console.log(movieIDs);

        // now fetch movie images from tmdb using the movie id's
        movieIDs.current.forEach((id) => {
          const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}/images?api_key=${TMDB_Key}`;
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          };
          fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
              const imgUrl = json.posters[0].file_path;
              movieImgs.current.push(`${TMDB_BASE_URL}${imgUrl}`);
              console.log(`ID: ${id} \n Img: ${imgUrl}`);
            })
            .catch((err) => console.error(err));
        });
        console.log(movieImgs);

        movieFetched.current = true;
      } catch (error) {
        console.log("error", error);
      }
    };

    if (!movieFetched.current) {
      fetchData();
    }
  }, []);

  // console.log(movies);
  return (
    <div className="flex flex-col mt-32">
      <div className="text-4xl text-center">
        <h1>Recently Watched </h1>
      </div>
      {/* Movies */}
      <div className="flex border my-8">
        <div className="text-4xl text-center">
          <h2>Movies</h2>
        </div>
        {movies.map((item, index) => {
          return (
            <div className="border p-4" key={item.movie.ids.imdb}>
              <img src={movieImgs.current[index]} alt="movie poster" />
              <h2>{item.movie.title}</h2>
              <p>{index}</p>
              <p>{item.movie.ids.imdb}</p>
            </div>
          );
        })}
      </div>

      {/* Shows */}
      <div>
        <div className="text-center text-4xl">
          <h2>Shows</h2>
        </div>
      </div>
    </div>
  );
};

export default Movies;
