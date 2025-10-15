import Movie from "../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";


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
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
