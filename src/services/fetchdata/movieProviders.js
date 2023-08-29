import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchMovieProviders = () => {

    const fetchData = async () => {
        return axios.get(`https://api.themoviedb.org/3/search/company?query=Netflix&api_key=cb65a4f46d5bc238c9a8056dee288f77`);
    } 
    const { isLoading, data, isError, isPreviousData, isFetching, } = useQuery({
        queryKey: ['movie-providers'],
        queryFn: fetchData,
    
    });
    if (isLoading) {
        return 'Loading...'
    }
    if (isError) {
        return 'Oooops...'
    }
    
    console.log(data);
    return { isLoading, data, isError, isPreviousData, isFetching };
}
