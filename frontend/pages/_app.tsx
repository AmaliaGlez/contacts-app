import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const TTL = 1000 * 60 * 60; // 1 hour

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: TTL,
      cacheTime: TTL,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
