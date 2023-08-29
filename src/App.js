import './App.css';
import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useState } from 'react';

import Home from './components/home/Home';

import PopularMovies from './components/movies/popular/PopularMovies';
import NowCinema from './components/movies/now-in-cinema/NowCinema';
import TopRatedMovie from './components/movies/top-rated/TopRatedMovie';
import Waited from './components/movies/waited/Waited';

import NowLive from './components/tv-shows/now-live/NowLive';
import PopularTv from './components/tv-shows/popular-tv/PopularTv';
import TodayLive from './components/tv-shows/today-live/TodayLive';
import TopRatedTv from './components/tv-shows/toprated-tv/TopRatedTv';

import Header from './components/header/Header';

import SearcOutput from './components/search/SearcOutput';
import MovieSearch from './components/search/MovieSearch';
import TvSearch from './components/search/TvSearch';
import PersonSearch from './components/search/PersonSearch';

import LatestTrailersHome from './components/home/latest-trailers-home/LatestTrailersHome';
import Streaming from './components/home/latest-trailers-home/StreamingTrailers';
import OnTv from './components/home/latest-trailers-home/OnTvTrailers';
import ForRent from './components/home/latest-trailers-home/ForRentTrailers';
import InTheaters from './components/home/latest-trailers-home/InTheatersTrailers';

import TrailerModal from './components/TrailerModal';

import ThisWeek from './components/home/trending-home/ThisWeek';
import TrendingToday from './components/home/trending-home/TrendingToday';

import MovieCard from './components/movie-card/MovieCard';
import FullCast from './components/movie-card/FullCast';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedTv, setSearchedTv] = useState([]);
  const [searchedPersons, setSearchedPersons] = useState([])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={process.env.PUBLIC_URL} element={<Home inputValue={inputValue} setInputValue={setInputValue} />} />
        {/* latest-trailers */}
        <Route path='latest-trailers' element={<LatestTrailersHome />} />
        <Route index path='latest-trailers/:trailerId' element={<TrailerModal />} />

        <Route path='streaming-trailers' element={<Streaming />} />
        <Route index path='streaming-trailers/:trailerId' element={<TrailerModal />} />

        <Route path='ontv-trailers' element={<OnTv />} />
        <Route index path='ontv-trailers/:trailerId' element={<TrailerModal />} />

        <Route path='for-rent-trailers' element={<ForRent />} />
        <Route index path='for-rent-trailers/:trailerId' element={<TrailerModal />} />

        {/* trending */}
        <Route path='trendind-week' element={<ThisWeek />} />
        <Route path='trendind-week/:movieId' element={<MovieCard />} />
        <Route path='trendind-today' element={<TrendingToday />} />
        <Route path='trendind-today/:movieId' element={<MovieCard />} />

        {/* what`s popular */}
        <Route path='popular-for-rent' element={<ForRent />} />
        <Route path='popular-for-rent/:movieId' element={<MovieCard />} />
        <Route path='popular-in-theaters' element={<InTheaters />} />
        <Route path='popular-in-theaters/:movieId' element={<MovieCard />} />
        <Route path='popular-on-tv' element={<OnTv />} />
        <Route path='popular-on-tv/:movieId' element={<MovieCard />} />
        <Route path='popular-streaming' element={<Streaming />} />
        <Route path='popular-streaming/:movieId' element={<MovieCard />} />

        {/* movies categories */}
        <Route path='popular-movies' element={<PopularMovies />} />
        <Route path='now-in-cinema-movies' element={<NowCinema />} />
        <Route path='top-rated-movies' element={<TopRatedMovie />} />
        <Route path='waited-movies' element={<Waited />} />

        {/* tv shows categories */}
        <Route path='now-live-tv' element={<NowLive />} />
        <Route path='popular-tv' element={<PopularTv />} />
        <Route path='today-live-tv' element={<TodayLive />} />
        <Route path='top-rated-tv' element={<TopRatedTv />} />

        {/* movie card */}
        <Route path='movie-card' element={<MovieCard />} />
        <Route path='movie-card/:movieId' element={<TrailerModal />} />
        <Route path='movie-card/full-cast/:movieId' element={<FullCast />} />


        {/* search */}
        <Route path='search-output' element={<SearcOutput
          inputValue={inputValue}
          setInputValue={setInputValue}
          searchedMovies={searchedMovies}
          setSearchedMovies={setSearchedMovies}
          searchedTv={searchedTv}
          setSearchedTv={setSearchedTv}
          searchedPersons={searchedPersons}
          setSearchedPersons={setSearchedPersons}
        />}>
          <Route index element={<MovieSearch searchedMovies={searchedMovies} />} />
          <Route index path='movies' element={<MovieSearch searchedMovies={searchedMovies} />} />
          <Route path='tv' element={<TvSearch searchedTv={searchedTv} />} />
          <Route path='persons' element={<PersonSearch searchedPersons={searchedPersons} />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
