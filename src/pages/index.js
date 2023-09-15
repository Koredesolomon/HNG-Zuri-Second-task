import { getAllMovies } from "../../dummy-data"
import MovieList from "../../components/movie-list";
import Footer from "../../components/footer";
import Nav from "../../components/nav";

export default function Home() {
  const events = getAllMovies();

  return (
    <main>
      <Nav />
      <MovieList items={events}/>
      <Footer />
    </main>
  )
}
