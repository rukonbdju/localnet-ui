// src/lib/fetcher.ts
const url = process.env.NEXT_PUBLIC_API_URL;
type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetcherOptions {
    method?: FetchMethod;
    body?: string;
    token?: string;
    headers?: Record<string, string>;
}

export const fetcher = async (endpoint: string, options: FetcherOptions = {}) => {
    console.log(url);
    const { method = 'GET', body = '', token = '', headers = {} } = options;
    const res = await fetch(url + endpoint, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...headers,
        },
        ...(body && { body }),
        credentials: 'include'
    });

    if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        const message = errorBody.message || res.statusText || 'Something went wrong';
        const error = new Error(message) as Error & { code?: number };
        error.code = res.status; // 👈 attach the status code
        throw error;
    }

    return res.json();
};
