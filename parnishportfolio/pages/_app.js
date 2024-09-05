import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import '../public/styles.css';

export default function App({ Component, pageProps }) {
  <Analytics/>

  return <Component {...pageProps} />
}
