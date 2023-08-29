import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchMovieDetails = (movieId) => {
    const API_KEY = 'e9cdb067d184a391d2bd1112b0d5e606';

    const fetchMovieData = async () => {
        return axios.get(`
        https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    } 
    const fetchCastData = async () => {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    }
    const fetchKeywordsData = async () => {
        return axios.get(`
        https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${API_KEY}`)
    }
    const fetchReviewsData = async () => {
        return axios.get(`
        https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
    }
    const fetchMovieTrailer = async () => {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
    }
    const { isLoading, data, isError, isSuccess} = useQuery({
        queryKey: ['movie-details'],
        queryFn: fetchMovieData,

    });

    const {data: castData} = useQuery({
        queryKey: ['cast-details'],
        queryFn: fetchCastData
    })

    const {data: keywordsData} = useQuery({
        queryKey: ['key-words'],
        queryFn: fetchKeywordsData
    })
    const {data: reviews} = useQuery({
        queryKey: ['reviews'],
        queryFn: fetchReviewsData
    })
    const {data: movieTrailer} = useQuery({
        queryKey: ['current-trailer'],
        queryFn: fetchMovieTrailer
    })

    if (isLoading) {
        return 'Loading...'
    }
    if (isError) {
        return 'Oooops...'
    }

    // console.log(data);
    return { isLoading, data, isError, castData, keywordsData, reviews, movieTrailer };

}