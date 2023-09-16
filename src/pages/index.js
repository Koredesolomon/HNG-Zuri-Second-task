import MovieList from "../../components/movie-list";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { useState } from "react";

export default function Home() {
 const [search, setSearch] = useState({});
  return (
    <main>
      <Nav setSearch = {setSearch} />
      <MovieList  search = {search}/>
      <Footer />
    </main>
  )
}
