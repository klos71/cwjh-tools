import { useState, createContext, useEffect } from 'react';
import type { ReactNode } from 'react';

const initial: IWASMContext = {};

export const WASMContext = createContext(initial);

export const WASMContextProvider: React.FC<WASMContextProviderProps> = ({ children }) => {
    const [state, setState] = useState<IWASMContext>(initial);

    useEffect(() => {
        (async () => {
            const wasm = await import('@klos71/cwjh_wasm');
            await wasm.default();
            setState({ wasm });
        })();
    }, []);

    return <WASMContext.Provider value={state}>{children}</WASMContext.Provider>;
};

interface IWASMContext {
    wasm?: typeof import('@klos71/cwjh_wasm');
}

interface WASMContextProviderProps {
    children: ReactNode;
}
