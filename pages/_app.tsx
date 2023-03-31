import { WASMContextProvider } from '@/context/WASM';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WASMContextProvider>
            <Component {...pageProps} />
        </WASMContextProvider>
    );
}
