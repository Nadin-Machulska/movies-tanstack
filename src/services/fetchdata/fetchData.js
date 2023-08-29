import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchData = (queryKey, queryParam, category) => {
    const fetchData = ({ pageParam = 1 }) => {
        return axios.get(`https://api.themoviedb.org/3/${category}/${queryParam}?api_key=e9cdb067d184a391d2bd1112b0d5e606&page=${pageParam}`);
    }

    const { isLoading, data, isError, isPreviousData, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: queryKey,
        queryFn: fetchData,

        getNextPageParam: (_lastPage, pages) => {
            const currentPage = pages.length;
            const totalPages = pages[0]?.data?.results?.length;
    
            if (currentPage < totalPages) {
              console.log(pages.length, 'pages');
              return currentPage + 1;
            } else {
              return undefined;
            } 
        },
        
        keepPreviousData: true,
    });

    return { isLoading, data, isError, isPreviousData, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage }
}
