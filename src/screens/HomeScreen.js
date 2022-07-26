import React from "react";
import "./HomeScreen.css";
import Row from "../Row";
import requests from "../requests";
import Banner from "../Banner";
import Nav from "../Nav";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTopRated} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default HomeScreen;
