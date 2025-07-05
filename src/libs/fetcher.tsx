import type { FetchProps } from '@/types/propTypes';

export const fetcher = async ({ url }: FetchProps) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err: unknown) {
    console.log(err);
    return err
  }
};
