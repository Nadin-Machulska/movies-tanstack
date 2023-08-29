import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchPosters = (movieId) => {
    const API_KEY = 'e9cdb067d184a391d2bd1112b0d5e606';

    const fetchData = async () => {
        return axios.get(`
            https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}`)

    }


    const { isLoading, data: posters, isError } = useQuery({
        queryKey: ['movie-posters'],
        queryFn: fetchData,

    });
    if (isLoading) {
        return 'Loading...'
    }
    if (isError) {
        return 'Oooops...'
    }

    // console.log(data);
    return { posters };

}