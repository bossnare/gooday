import { fetcher } from '@/libs/fetcher';
import useSWR from 'swr';

function useFetch(url: string) {
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
}

export default useFetch;
