import React from 'react';
import '../css/HomeScreen.css'
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../Requests";

function HomeScreen(){
    return(
        <div className="HomeScreen">
            <Nav />
            <Banner />
            <Row title='NETFLIX ORIGINALS'
                 fetchUrl={requests.fetchNetflixOriginals}
                 isLargeRow={true}
            />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
            <Row title='Top Rated' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )

}

export default  HomeScreen;