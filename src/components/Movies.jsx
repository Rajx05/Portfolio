import { useEffect, useRef, useState } from "react";

const formatRelativeDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const watched = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayDiff = Math.round((today - watched) / (1000 * 60 * 60 * 24));

  if (dayDiff === 0) return "Today";
  if (dayDiff === 1) return "Yesterday";
  if (dayDiff < 7)
    return date.toLocaleDateString(undefined, { weekday: "long" });
  return date.toLocaleDateString();
};

const Movies = () => {
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [loadingShows, setLoadingShows] = useState(false);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const fetched = useRef(false);

  // tmdb api stuff
  const TMDB_Key = import.meta.env.VITE_TMDB_KEY;
  const TMDB_BASE_URL = "https://image.tmdb.org/t/p/w500";

  // trakt api stuff
  const TRAKT_ID = import.meta.env.VITE_TRAKT_ID;
  const USERNAME = import.meta.env.VITE_TRAKT_USERNAME;

  useEffect(() => {
    const fetchHistory = async (type) => {
      const isMovie = type === "movies";
      if (isMovie) setLoadingMovies(true);
      else setLoadingShows(true);

      try {
        const response = await fetch(
          `https://api.trakt.tv/users/${encodeURIComponent(USERNAME)}/history/${type}`,
          {
            headers: {
              "Content-Type": "application/json",
              "trakt-api-version": "2",
              "trakt-api-key": TRAKT_ID,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Trakt API failed for ${type}`);
        }

        let traktData = await response.json();

        // Filter shows to only show the most recently watched episode per show
        if (!isMovie) {
          const seenShows = new Set();
          traktData = traktData.filter((item) => {
            const showId = item.show.ids.trakt;
            if (seenShows.has(showId)) return false;
            seenShows.add(showId);
            return true;
          });
        }

        const dataWithImages = await Promise.all(
          traktData.map(async (item) => {
            const media = isMovie ? item.movie : item.show;
            const tmdbId = media.ids.tmdb || media.ids.imdb;
            if (!tmdbId) return { ...item, posterUrl: null };

            try {
              const tmdbType = isMovie ? "movie" : "tv";
              const tmdbResponse = await fetch(
                `https://api.themoviedb.org/3/${tmdbType}/${encodeURIComponent(tmdbId)}?api_key=${TMDB_Key}`,
                { headers: { accept: "application/json" } },
              );

              if (!tmdbResponse.ok) return { ...item, posterUrl: null };

              const tmdbData = await tmdbResponse.json();
              return {
                ...item,
                posterUrl: tmdbData.poster_path
                  ? `${TMDB_BASE_URL}${tmdbData.poster_path}`
                  : null,
              };
            } catch (err) {
              return { ...item, posterUrl: null };
            }
          }),
        );

        if (isMovie) setMovies(dataWithImages);
        else setShows(dataWithImages);
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      } finally {
        if (isMovie) setLoadingMovies(false);
        else setLoadingShows(false);
      }
    };

    if (!fetched.current) {
      fetchHistory("movies");
      fetchHistory("shows");
      fetched.current = true;
    }
  }, []);

  const renderSection = (title, data, isLoading) => (
    <div className="flex border border-gray-200 dark:border-gray-800 my-8 overflow-x-auto">
      <div className="text-4xl text-center p-4 border-r border-gray-200 dark:border-gray-800 flex items-center justify-center min-w-[200px]">
        <h2>{title}</h2>
      </div>
      {isLoading ? (
        <div className="p-4 flex items-center">
          Loading {title.toLowerCase()}...
        </div>
      ) : (
        data.map((item) => {
          const media = item.movie || item.show;
          return (
            <div
              className="border-r border-gray-200 dark:border-gray-800 p-4 flex-shrink-0 w-48"
              key={item.id}
            >
              {item.posterUrl ? (
                <img
                  src={item.posterUrl}
                  alt={media.title}
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              ) : (
                <div className="w-full h-72 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg text-gray-400">
                  No Image
                </div>
              )}
              <h2
                className="mt-2 text-lg font-semibold truncate"
                title={media.title}
              >
                {media.title}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Watched: {formatRelativeDate(item.watched_at)}
              </p>
            </div>
          );
        })
      )}
    </div>
  );

  return (
    <div className="flex flex-col mt-32 text-gray-900 dark:text-gray-100">
      <div className="text-4xl text-center">
        <h1>Recently Watched</h1>
      </div>

      {renderSection("Movies", movies, loadingMovies)}
      {renderSection("Shows", shows, loadingShows)}
    </div>
  );
};

export default Movies;
