import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../constants/query-keys";
import { getApiHealth } from "../../../actions/health/health";



export const useGetApiHealth = () => {
    const query = useQuery({
        queryKey: [QUERY_KEYS.API_HEALTH],
        queryFn: getApiHealth,
    });

    if(query.error) {
        console.error(query.error);
    }

    return query;
}