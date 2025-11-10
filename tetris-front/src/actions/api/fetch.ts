


export async function FetchApi<TResponse, TBody = unknown>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: TBody,
): Promise<TResponse> {


    try {

        const response = await fetch(`http://localhost:3000${url}`, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data as TResponse;

    } catch (error) {


        console.error('Error fetching API:', error);

        if (error instanceof Error) {
            throw new Error(`Error fetching API: ${error.message}`);
        }

        throw new Error('Unknown error fetching API');

    }



}