const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export const metadata = {
  title: "Home",
};

async function getMovies() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

// server component 에서 fetching -> 네트워크탭에서 보이지 않음
export default async function HomePages() {
  const movies = await getMovies();
  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  );
}
