export default function MovieDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie Detail Page {id}</h1>;
}
