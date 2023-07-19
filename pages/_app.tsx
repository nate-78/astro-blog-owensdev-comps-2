import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../lib/cms-components';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
