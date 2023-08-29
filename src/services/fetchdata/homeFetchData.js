import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchSwipersData = (queryKey, queryParam, category, pageParam) => {

    const fetchData = async () => {
        return axios.get(`https://api.themoviedb.org/3/${category}/${queryParam}?api_key=e9cdb067d184a391d2bd1112b0d5e606&page=${pageParam}`);
    } 
    const { isLoading, data, isError, isPreviousData, isFetching, } = useQuery({
        queryKey: [queryKey],
        queryFn: fetchData,
    
    });
    if (isLoading) {
        return 'Loading...'
    }
    if (isError) {
        return 'Oooops...'
    }
    
    return { isLoading, data, isError, isPreviousData, isFetching };
}
