import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchYTVideos = (category, queryKeyMovies, queryKeyTrailers, queryParam) => {
    const API_KEY = 'e9cdb067d184a391d2bd1112b0d5e606';

    
        const fetchMovieData = async () => {
          const response = await axios.get(
            `https://api.themoviedb.org/3/${category}/${queryParam}?api_key=${API_KEY}&language=EN`
          );
          return response.data;
        };
      
        const { isLoading, data, isError } = useQuery([queryKeyMovies], fetchMovieData);

        const fetchTrailers = async () => {
          const movies = data?.results
          const trailers = await Promise.all(
            movies.map((movie) => fetchYoutubeData(movie.id))
          );
          return trailers;
        };

        const fetchYoutubeData = async (movieId) => {
          const response = await axios.get(
            `
            https://api.themoviedb.org/3/${category}/${movieId}/videos?api_key=${API_KEY}`
          );
          return response.data;
        };
      
      
      
        const { data: trailersData } = useQuery([queryKeyTrailers], fetchTrailers, {
          enabled: !!data , 
        });
        
        return { isLoading, isError, data, trailersData };

};


