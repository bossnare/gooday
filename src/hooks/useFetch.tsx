import { fetcher } from '@/libs/fetcher';
import useSWR from 'swr';

function useFetch(url: string, enabled: boolean) {
  const { data, error, isLoading } = useSWR(enabled ? url : null, fetcher);
  return { data, error, isLoading };
}

export default useFetch;
