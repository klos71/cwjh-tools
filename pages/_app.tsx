import { WASMContextProvider } from '@/context/WASM';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,body,#__next {
        margin: 0;
        padding: 0px;
        height: 100%;
        width: 100%;
        font-family: sans-serif;
        scroll-behavior: smooth;
    }
`;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WASMContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </WASMContextProvider>
    );
}
