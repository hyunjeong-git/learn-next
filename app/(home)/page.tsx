import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

// server component 에서 fetching -> 네트워크탭에서 보이지 않음
export default async function HomePages() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
