import { useEffect, useState } from "react";

interface Movie {
  id: number | string;
  title: string;
  poster_path: string;
  popularity: number;
}

const ShowMovies = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjY2MzIyZGE0YzJhNDk4NWE4M2E3ZjgyOWUyYzhhYiIsIm5iZiI6MTc5MjYyMzM3MC44NDYwMDAyLCJzdWIiOiI2YWQ5NDMwYTA1YTNlODUwMDY3Mjg4ZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1_CTVfHdze3rVU4MlV8Q79Pm-pUyXRrphejfsZhH4SE",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <main className="movieContainer">
        {data.map((item) => (
          <div key={item.id} className="movie">
            <h2>{item.title}</h2>
            <img
              src={"https://image.tmdb.org/t/p/original/" + item.poster_path}
              alt=""
            />
            <span className="movie-price">
              ${(item.popularity * 10).toFixed(2)}
            </span>
            <button
              className="addcart"
              onClick={() => {
                console.log("Clicked: ", item.title);
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </main>
    </>
  );
};

export default ShowMovies;
