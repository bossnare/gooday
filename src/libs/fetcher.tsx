import type { FetchProps } from '@/types/propTypes';

export const fetcher = async ({ url }: FetchProps) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};
