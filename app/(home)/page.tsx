"use client";
import { useEffect, useState } from "react";

// 홈페이지에만 표시
// client component에서 metadata 설정 불가
// export const metadata = {
//   title: "Home",
// };

export default function Pages() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://nomad-movies.nomadcoders.workers.dev/movies`
    );
    const json = await response.json();
    setMovie(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? 'Loading...' : JSON.stringify(movie)}
    </div>
  );
}
