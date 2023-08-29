import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchSearchedData = (inputValue) => {
    const fetchData = async () => {
        return axios.get(`https://api.themoviedb.org/3/search/multi?query=${inputValue}&api_key=e9cdb067d184a391d2bd1112b0d5e606`);
    } 
    const { isLoading, data, isError, isPreviousData, isFetching, } = useQuery({
        queryKey: ['input-search', inputValue],
        queryFn: fetchData,

    });
    if (isLoading) {
        return 'Loading...'
    }
    if (isError) {
        return 'Oooops...'
    }

    // console.log(data);
    return { isLoading, data, isError, isPreviousData, isFetching };

}