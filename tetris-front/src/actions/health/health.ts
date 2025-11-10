import type { HealthResponse } from "../../types/api/health/health";
import { FetchApi } from "../api/fetch";


export const getApiHealth = async ()  : Promise<HealthResponse> => {
    const response = await FetchApi<HealthResponse>('/', 'GET');
    return response;
}
